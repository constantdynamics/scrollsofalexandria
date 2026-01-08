import express from 'express';
import { queries } from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get user profile and progress
router.get('/profile', authenticateToken, (req, res) => {
  try {
    const user = queries.getUserById.get(req.user.id);
    const preferences = queries.getPreferences.get(req.user.id);
    const points = queries.getPoints.get(req.user.id);
    const progress = queries.getAllProgress.all(req.user.id);

    res.json({
      user,
      preferences,
      points,
      progress
    });
  } catch (err) {
    console.error('Profile fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// Update preferences
router.put('/preferences', authenticateToken, (req, res) => {
  try {
    const { organization, defaultLearningStyle, dailyReminder, reminderTime, theme } = req.body;

    queries.updatePreferences.run(
      organization || 'academic',
      defaultLearningStyle || 'auto',
      dailyReminder ? 1 : 0,
      reminderTime || '09:00',
      theme || 'classic',
      req.user.id
    );

    res.json({ message: 'Preferences updated' });
  } catch (err) {
    console.error('Preferences update error:', err);
    res.status(500).json({ error: 'Failed to update preferences' });
  }
});

// Update principle progress
router.post('/progress/:principleId', authenticateToken, (req, res) => {
  try {
    const { principleId } = req.params;
    const { read, multipleChoiceCorrect, ownExample, aiAssistedExample, ownExampleText } = req.body;

    // Calculate mastery
    let mastery = 0;
    if (read) mastery += 20;
    if (multipleChoiceCorrect) mastery += 20;
    if (ownExample) mastery += 30;
    if (aiAssistedExample) mastery += 30;
    mastery = Math.min(mastery, 100);

    // Get existing progress
    const existing = queries.getProgress.get(req.user.id, principleId);
    const timesReviewed = existing ? existing.times_reviewed + 1 : 1;

    queries.upsertProgress.run(
      req.user.id,
      principleId,
      mastery,
      read ? 1 : 0,
      multipleChoiceCorrect ? 1 : 0,
      ownExample ? 1 : 0,
      aiAssistedExample ? 1 : 0,
      ownExampleText || null,
      new Date().toISOString(),
      timesReviewed
    );

    // Add points for new activities
    let pointsEarned = 0;
    if (!existing?.read && read) pointsEarned += 10;
    if (!existing?.multiple_choice_correct && multipleChoiceCorrect) pointsEarned += 15;
    if (!existing?.own_example && ownExample) pointsEarned += 25;
    if (!existing?.ai_assisted_example && aiAssistedExample) pointsEarned += 20;

    if (pointsEarned > 0) {
      queries.addPoints.run(pointsEarned, req.user.id);
    }

    // Initialize spaced repetition if mastery >= 50%
    if (mastery >= 50) {
      const sr = queries.getSpacedRepetition.get(req.user.id, principleId);
      if (!sr) {
        const nextReview = new Date();
        nextReview.setDate(nextReview.getDate() + 1);
        queries.upsertSpacedRepetition.run(
          req.user.id,
          principleId,
          nextReview.toISOString(),
          1, // interval_days
          2.5, // ease_factor
          0, // repetitions
          null // last_quality
        );
      }
    }

    res.json({
      mastery,
      pointsEarned,
      totalPoints: queries.getPoints.get(req.user.id)?.total_points || 0
    });
  } catch (err) {
    console.error('Progress update error:', err);
    res.status(500).json({ error: 'Failed to update progress' });
  }
});

// Get spaced repetition reviews due
router.get('/reviews', authenticateToken, (req, res) => {
  try {
    const reviews = queries.getReviewsDue.all(req.user.id);
    res.json({ reviews });
  } catch (err) {
    console.error('Reviews fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// Submit spaced repetition review result
router.post('/reviews/:principleId', authenticateToken, (req, res) => {
  try {
    const { principleId } = req.params;
    const { quality } = req.body; // 0-5 rating (0-2 = forgot, 3 = hard, 4 = good, 5 = easy)

    const sr = queries.getSpacedRepetition.get(req.user.id, principleId);
    if (!sr) {
      return res.status(404).json({ error: 'No review scheduled for this principle' });
    }

    // SM-2 Algorithm implementation
    let { interval_days: interval, ease_factor: ef, repetitions } = sr;

    if (quality < 3) {
      // Forgot - reset
      repetitions = 0;
      interval = 1;
    } else {
      // Remembered
      if (repetitions === 0) {
        interval = 1;
      } else if (repetitions === 1) {
        interval = 6;
      } else {
        interval = Math.round(interval * ef);
      }
      repetitions++;

      // Update ease factor
      ef = ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
      ef = Math.max(1.3, ef);
    }

    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);

    queries.upsertSpacedRepetition.run(
      req.user.id,
      principleId,
      nextReview.toISOString(),
      interval,
      ef,
      repetitions,
      quality
    );

    // Award points for review
    queries.addPoints.run(5, req.user.id);

    res.json({
      nextReview: nextReview.toISOString(),
      intervalDays: interval,
      pointsEarned: 5
    });
  } catch (err) {
    console.error('Review submit error:', err);
    res.status(500).json({ error: 'Failed to submit review' });
  }
});

// Learning style choice tracking
router.post('/learning-style', authenticateToken, (req, res) => {
  try {
    const { choice } = req.body;
    queries.addLearningStyleChoice.run(req.user.id, choice);
    res.json({ message: 'Learning style recorded' });
  } catch (err) {
    console.error('Learning style error:', err);
    res.status(500).json({ error: 'Failed to record learning style' });
  }
});

export default router;
