import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';

const CreativeExercise = ({ principle, onComplete }) => {
  const [userExample, setUserExample] = useState('');
  const [showAiHelper, setShowAiHelper] = useState(false);
  const [aiStep, setAiStep] = useState(0);
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const { markOwnExample, markAiAssistedExample, getPrincipleProgress } = useUser();
  const progress = getPrincipleProgress(principle.id);
  const alreadyCompletedOwn = progress.activities.ownExample;
  const alreadyCompletedAi = progress.activities.aiAssistedExample;

  const handleSelfValidate = () => {
    if (userExample.trim().length < 20) {
      alert('Je voorbeeld is wat kort. Probeer het uit te breiden met wat meer context!');
      return;
    }

    if (!alreadyCompletedOwn) {
      const { points, newlyUnlocked } = markOwnExample(principle.id);
      setIsCompleted(true);
      if (newlyUnlocked.length > 0) {
        onComplete?.(newlyUnlocked);
      }
    } else {
      setIsCompleted(true);
    }
  };

  const handleAiHelp = () => {
    setShowAiHelper(true);
    if (chatHistory.length === 0) {
      // Start with first helper prompt
      setChatHistory([
        {
          role: 'ai',
          message: principle.aiHelperPrompts?.[0] || "Vertel me meer over waar je tegenaan loopt bij het bedenken van een voorbeeld."
        }
      ]);
    }
  };

  const handleAiSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    setChatHistory(prev => [...prev, {
      role: 'user',
      message: userInput
    }]);

    // Simulate AI response (in real app this would call Claude API)
    const nextStep = Math.min(aiStep + 1, (principle.aiHelperPrompts?.length || 3) - 1);
    setAiStep(nextStep);

    setTimeout(() => {
      const aiMessage = principle.aiHelperPrompts?.[nextStep] ||
        "Dat is een goede richting! Kun je een specifieke situatie bedenken?";

      setChatHistory(prev => [...prev, {
        role: 'ai',
        message: aiMessage
      }]);
    }, 500);

    setUserInput('');
  };

  const handleAiAssistedComplete = () => {
    if (userExample.trim().length < 20) {
      alert('Je voorbeeld is wat kort. Probeer het uit te breiden met wat meer context!');
      return;
    }

    if (!alreadyCompletedAi) {
      const { points, newlyUnlocked } = markAiAssistedExample(principle.id);
      setIsCompleted(true);
      if (newlyUnlocked.length > 0) {
        onComplete?.(newlyUnlocked);
      }
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="decorative-border bg-parchment-dark p-8"
    >
      <h2 className="text-2xl font-serif text-ink mb-4 flex items-center gap-2">
        <span>✍️</span>
        OEFENING 2: Creatie
      </h2>

      <div className="h-px bg-sepia my-4"></div>

      {(alreadyCompletedOwn || alreadyCompletedAi) && (
        <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 mb-4 flex items-center gap-3">
          <span className="text-3xl">✅</span>
          <div>
            <div className="font-semibold text-green-800">Voltooid!</div>
            <div className="text-sm text-green-700">
              {alreadyCompletedOwn && "Je hebt al een eigen voorbeeld bedacht"}
              {alreadyCompletedAi && !alreadyCompletedOwn && "Je hebt al een voorbeeld bedacht met AI hulp"}
            </div>
          </div>
        </div>
      )}

      <div className="bg-parchment p-4 rounded-lg mb-6 border-2 border-sepia">
        <p className="text-lg text-ink font-semibold mb-2">Opdracht:</p>
        <p className="text-ink-light">{principle.creativePrompt}</p>
      </div>

      {/* Text Area */}
      <div className="mb-6">
        <textarea
          value={userExample}
          onChange={(e) => setUserExample(e.target.value)}
          placeholder="Typ hier je voorbeeld..."
          className="w-full h-32 p-4 rounded-lg border-2 border-sepia bg-parchment text-ink placeholder-ink-light/50 focus:border-gold focus:outline-none resize-none"
          disabled={isCompleted}
        />
        <div className="text-sm text-ink-light mt-1">
          {userExample.length} karakters (minimaal 20)
        </div>
      </div>

      {/* Buttons */}
      {!isCompleted ? (
        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSelfValidate}
            disabled={userExample.trim().length < 20}
            className={`btn-primary w-full ${
              userExample.trim().length < 20 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            ✓ Dit is een goed voorbeeld {!alreadyCompletedOwn && '(+25 pts)'}
          </motion.button>

          {!showAiHelper && (
            <button
              onClick={handleAiHelp}
              className="w-full py-3 rounded-lg border-2 border-sepia text-ink hover:border-gold hover:bg-gold/20 transition-all"
            >
              ? Ik kom er niet uit - AI Helper
            </button>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-100 border-2 border-green-500 rounded-lg p-6"
        >
          <div className="flex items-start gap-3">
            <span className="text-4xl">🎉</span>
            <div className="flex-1">
              <h3 className="font-serif text-xl text-green-800 mb-2">Uitstekend!</h3>
              <p className="text-green-700 mb-2">Je hebt een eigen voorbeeld bedacht. Dit helpt je het principe beter te onthouden!</p>
              <div className="bg-parchment p-3 rounded border border-sepia">
                <p className="text-ink italic">"{userExample}"</p>
              </div>
              {!alreadyCompletedOwn && !alreadyCompletedAi && (
                <div className="mt-3 text-green-800 font-semibold">
                  🏆 +{showAiHelper ? '20' : '25'} punten
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* AI Helper Chat */}
      <AnimatePresence>
        {showAiHelper && !isCompleted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 border-2 border-gold rounded-lg overflow-hidden"
          >
            <div className="bg-gold/20 p-3 border-b-2 border-gold">
              <h3 className="font-semibold text-ink flex items-center gap-2">
                <span>💬</span>
                AI Helper (Socratische begeleiding)
              </h3>
            </div>

            <div className="bg-parchment p-4 max-h-64 overflow-y-auto space-y-3">
              {chatHistory.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-gold text-ink'
                        : 'bg-parchment-dark text-ink border-2 border-sepia'
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <form onSubmit={handleAiSubmit} className="p-4 border-t-2 border-gold bg-parchment-dark">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type hier je antwoord..."
                  className="flex-1 px-4 py-2 rounded-lg border-2 border-sepia bg-parchment text-ink placeholder-ink-light/50 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-gold text-ink rounded-lg font-semibold hover:bg-bronze transition-colors"
                >
                  Verstuur
                </button>
              </div>
            </form>

            {chatHistory.length >= 4 && userExample.length >= 20 && (
              <div className="p-4 bg-gold/10 border-t-2 border-gold">
                <button
                  onClick={handleAiAssistedComplete}
                  className="btn-primary w-full"
                >
                  ✓ Ik heb nu een voorbeeld {!alreadyCompletedAi && '(+20 pts)'}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CreativeExercise;
