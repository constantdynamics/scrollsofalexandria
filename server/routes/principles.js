import express from 'express';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Search principles (public endpoint)
router.get('/search', (req, res) => {
  try {
    const { q, category, difficulty, tags } = req.query;

    // Import principles dynamically to allow hot reload during development
    import('../../src/data/principles.js').then(module => {
      let results = module.principles;

      // Text search
      if (q && q.trim()) {
        const searchTerm = q.toLowerCase().trim();
        results = results.filter(p =>
          p.title.toLowerCase().includes(searchTerm) ||
          p.definition.toLowerCase().includes(searchTerm) ||
          p.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
          p.examples.some(ex => ex.text.toLowerCase().includes(searchTerm))
        );
      }

      // Category filter
      if (category) {
        results = results.filter(p =>
          p.academicCategory === category || p.skillCategory === category
        );
      }

      // Difficulty filter
      if (difficulty) {
        results = results.filter(p => p.difficulty === parseInt(difficulty));
      }

      // Tags filter
      if (tags) {
        const tagList = tags.split(',').map(t => t.trim().toLowerCase());
        results = results.filter(p =>
          p.tags.some(tag => tagList.includes(tag.toLowerCase()))
        );
      }

      res.json({
        results,
        total: results.length,
        query: { q, category, difficulty, tags }
      });
    }).catch(err => {
      console.error('Principles import error:', err);
      res.status(500).json({ error: 'Failed to load principles' });
    });
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ error: 'Search failed' });
  }
});

// Get all principles
router.get('/', (req, res) => {
  try {
    import('../../src/data/principles.js').then(module => {
      res.json({ principles: module.principles });
    }).catch(err => {
      console.error('Principles import error:', err);
      res.status(500).json({ error: 'Failed to load principles' });
    });
  } catch (err) {
    console.error('Principles fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch principles' });
  }
});

// Get categories
router.get('/categories', (req, res) => {
  try {
    const { system } = req.query; // 'academic' or 'skills'

    import('../../src/data/principles.js').then(module => {
      const categories = module.getCategories(system || 'academic');
      res.json({ categories });
    }).catch(err => {
      console.error('Categories import error:', err);
      res.status(500).json({ error: 'Failed to load categories' });
    });
  } catch (err) {
    console.error('Categories fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// Get all tags
router.get('/tags', (req, res) => {
  try {
    import('../../src/data/principles.js').then(module => {
      const tags = module.getAllTags();
      res.json({ tags });
    }).catch(err => {
      console.error('Tags import error:', err);
      res.status(500).json({ error: 'Failed to load tags' });
    });
  } catch (err) {
    console.error('Tags fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch tags' });
  }
});

// Get single principle by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;

    import('../../src/data/principles.js').then(module => {
      const principle = module.getPrincipleById(id);
      if (!principle) {
        return res.status(404).json({ error: 'Principle not found' });
      }
      res.json({ principle });
    }).catch(err => {
      console.error('Principle import error:', err);
      res.status(500).json({ error: 'Failed to load principle' });
    });
  } catch (err) {
    console.error('Principle fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch principle' });
  }
});

export default router;
