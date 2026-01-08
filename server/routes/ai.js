import express from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { queries } from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Initialize Anthropic client
const getAnthropicClient = () => {
  if (!process.env.ANTHROPIC_API_KEY) {
    return null;
  }
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
};

// AI Helper Chat for principles
router.post('/chat/:principleId', authenticateToken, async (req, res) => {
  try {
    const { principleId } = req.params;
    const { message, principleContext } = req.body;

    const anthropic = getAnthropicClient();

    if (!anthropic) {
      // Fallback response when no API key
      return res.json({
        response: generateFallbackResponse(message, principleContext),
        mode: 'fallback'
      });
    }

    // Get chat history for context
    const history = queries.getChatHistory.all(req.user.id, principleId);

    // Build messages array
    const messages = history.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    messages.push({ role: 'user', content: message });

    // Save user message
    queries.addChatMessage.run(req.user.id, principleId, 'user', message);

    const systemPrompt = `Je bent een Socratische leermeester in de Bibliotheek van Alexandrië. Je helpt studenten mentale modellen en denkprincipes te begrijpen door vragen te stellen en ze te begeleiden naar inzichten.

PRINCIPE CONTEXT:
Titel: ${principleContext.title}
Definitie: ${principleContext.definition}
${principleContext.abstractExample ? `Abstract voorbeeld: ${principleContext.abstractExample}` : ''}

INSTRUCTIES:
- Wees Socratisch: stel vragen om begrip te testen, geef niet direct antwoorden
- Geef korte, gerichte antwoorden (max 3 zinnen)
- Help de student eigen voorbeelden te bedenken
- Corrigeer misconcepties vriendelijk
- Gebruik de context van het principe om gerichte hints te geven
- Spreek Nederlands
- Als de student een eigen voorbeeld geeft, evalueer of het correct het principe demonstreert
- Als het voorbeeld goed is, bevestig dit en vraag om een ander domein
- Als het voorbeeld fout is, leg uit waarom en geef een hint`;

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 300,
      system: systemPrompt,
      messages: messages
    });

    const assistantMessage = response.content[0].text;

    // Save assistant response
    queries.addChatMessage.run(req.user.id, principleId, 'assistant', assistantMessage);

    res.json({
      response: assistantMessage,
      mode: 'ai'
    });
  } catch (err) {
    console.error('AI chat error:', err);

    // Fallback to generated response
    res.json({
      response: generateFallbackResponse(req.body.message, req.body.principleContext),
      mode: 'fallback'
    });
  }
});

// Evaluate user's own example
router.post('/evaluate/:principleId', authenticateToken, async (req, res) => {
  try {
    const { principleId } = req.params;
    const { example, principleContext } = req.body;

    const anthropic = getAnthropicClient();

    if (!anthropic) {
      return res.json({
        evaluation: {
          correct: true,
          feedback: 'Goed gedaan! Je voorbeeld lijkt het principe correct toe te passen.',
          suggestions: []
        },
        mode: 'fallback'
      });
    }

    const systemPrompt = `Je bent een expert in mentale modellen en logica. Evalueer of het gegeven voorbeeld correct het principe demonstreert.

PRINCIPE:
Titel: ${principleContext.title}
Definitie: ${principleContext.definition}

Geef je evaluatie in JSON formaat:
{
  "correct": true/false,
  "feedback": "Korte uitleg waarom het wel/niet klopt (1-2 zinnen)",
  "suggestions": ["Optionele suggesties voor verbetering"]
}`;

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 200,
      system: systemPrompt,
      messages: [
        { role: 'user', content: `Evalueer dit voorbeeld: "${example}"` }
      ]
    });

    let evaluation;
    try {
      // Extract JSON from response
      const text = response.content[0].text;
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      evaluation = jsonMatch ? JSON.parse(jsonMatch[0]) : {
        correct: true,
        feedback: text,
        suggestions: []
      };
    } catch {
      evaluation = {
        correct: true,
        feedback: response.content[0].text,
        suggestions: []
      };
    }

    res.json({ evaluation, mode: 'ai' });
  } catch (err) {
    console.error('Evaluation error:', err);
    res.json({
      evaluation: {
        correct: true,
        feedback: 'Goed gedaan! Je voorbeeld is genoteerd.',
        suggestions: []
      },
      mode: 'fallback'
    });
  }
});

// Get chat history
router.get('/history/:principleId', authenticateToken, (req, res) => {
  try {
    const { principleId } = req.params;
    const history = queries.getChatHistory.all(req.user.id, principleId);
    res.json({ history });
  } catch (err) {
    console.error('Chat history error:', err);
    res.status(500).json({ error: 'Failed to fetch chat history' });
  }
});

// Fallback response generator
function generateFallbackResponse(message, context) {
  const prompts = context?.aiHelperPrompts || [];
  const lowercaseMsg = message.toLowerCase();

  if (lowercaseMsg.includes('help') || lowercaseMsg.includes('hint') || lowercaseMsg.includes('hulp')) {
    return prompts[0] || 'Denk aan een situatie uit je dagelijks leven waar dit principe van toepassing zou kunnen zijn.';
  }

  if (lowercaseMsg.includes('voorbeeld') || lowercaseMsg.includes('example')) {
    return prompts[1] || 'Probeer het principe toe te passen op een situatie op je werk of in je studie.';
  }

  if (message.length > 50) {
    // User gave an example
    return 'Interessant voorbeeld! Kun je uitleggen waarom dit het principe demonstreert? Wat zijn de kernonderdelen?';
  }

  // Default socratic response
  const socraticResponses = [
    'Kun je beschrijven wat je al weet over dit principe?',
    'Welk aspect van dit principe vind je het lastigst?',
    'Kun je een situatie bedenken waar dit principe relevant zou zijn?',
    prompts[Math.floor(Math.random() * prompts.length)] || 'Wat zou er gebeuren als je dit principe zou toepassen op een recente beslissing?'
  ];

  return socraticResponses[Math.floor(Math.random() * socraticResponses.length)];
}

export default router;
