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

    setChatHistory(prev => [...prev, {
      role: 'user',
      message: userInput
    }]);

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
      className="decorative-border bg-surface p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-1 pt-2">
        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
          <span className="text-base">✍️</span>
        </div>
        <h2 className="text-xl font-bold text-text">Oefening 2: Creatie</h2>
      </div>

      <div className="h-px bg-border my-4"></div>

      {(alreadyCompletedOwn || alreadyCompletedAi) && (
        <div className="bg-success-light border border-success/20 rounded-xl p-4 mb-4 flex items-center gap-3">
          <svg className="w-6 h-6 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <div>
            <div className="font-semibold text-text text-sm">Voltooid!</div>
            <div className="text-xs text-text-secondary">
              {alreadyCompletedOwn && "Je hebt al een eigen voorbeeld bedacht"}
              {alreadyCompletedAi && !alreadyCompletedOwn && "Je hebt al een voorbeeld bedacht met AI hulp"}
            </div>
          </div>
        </div>
      )}

      <div className="bg-bg-alt p-4 rounded-xl mb-5 border border-border">
        <p className="text-sm font-semibold text-text mb-1">Opdracht:</p>
        <p className="text-sm text-text-secondary leading-relaxed">{principle.creativePrompt}</p>
      </div>

      {/* Text Area */}
      <div className="mb-5">
        <textarea
          value={userExample}
          onChange={(e) => setUserExample(e.target.value)}
          placeholder="Typ hier je voorbeeld..."
          className="w-full h-32 p-4 rounded-xl border border-border bg-surface text-text placeholder-text-muted text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none resize-none transition-all"
          disabled={isCompleted}
        />
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-xs text-text-muted">
            {userExample.length} karakters (minimaal 20)
          </span>
          {userExample.length >= 20 && (
            <span className="text-xs text-success font-medium flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Voldoende lengte
            </span>
          )}
        </div>
      </div>

      {/* Buttons */}
      {!isCompleted ? (
        <div className="space-y-2.5">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={handleSelfValidate}
            disabled={userExample.trim().length < 20}
            className={`btn-primary w-full flex items-center justify-center gap-2 ${
              userExample.trim().length < 20 ? 'opacity-40 cursor-not-allowed' : ''
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Dit is een goed voorbeeld {!alreadyCompletedOwn && '(+25 pts)'}
          </motion.button>

          {!showAiHelper && (
            <button
              onClick={handleAiHelp}
              className="w-full py-3 rounded-xl border border-border text-text-secondary text-sm font-medium hover:border-primary/40 hover:text-text hover:bg-bg-alt transition-all flex items-center justify-center gap-2"
            >
              <span>💬</span>
              Ik kom er niet uit - AI Helper
            </button>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-success-light border border-success/20 rounded-xl p-5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">🎉</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-text text-base mb-1">Uitstekend!</h3>
              <p className="text-sm text-text-secondary mb-3">Je hebt een eigen voorbeeld bedacht. Dit helpt je het principe beter te onthouden!</p>
              <div className="bg-surface p-3 rounded-lg border border-border">
                <p className="text-sm text-text-secondary italic">"{userExample}"</p>
              </div>
              {!alreadyCompletedOwn && !alreadyCompletedAi && (
                <div className="mt-3 inline-flex items-center gap-1.5 bg-success/20 px-2.5 py-1 rounded-full text-success text-xs font-semibold">
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
            className="mt-5 border border-primary/20 rounded-xl overflow-hidden"
          >
            <div className="bg-primary-50 px-4 py-3 border-b border-primary/20">
              <h3 className="font-semibold text-text text-sm flex items-center gap-2">
                <span>💬</span>
                AI Helper (Socratische begeleiding)
              </h3>
            </div>

            <div className="bg-bg-alt p-4 max-h-64 overflow-y-auto space-y-3">
              {chatHistory.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-surface text-text-secondary border border-border'
                    }`}
                  >
                    <p>{msg.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <form onSubmit={handleAiSubmit} className="p-3 border-t border-primary/20 bg-surface">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type hier je antwoord..."
                  className="flex-1 px-3.5 py-2 rounded-lg border border-border bg-bg-alt text-text placeholder-text-muted text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors"
                >
                  Verstuur
                </button>
              </div>
            </form>

            {chatHistory.length >= 4 && userExample.length >= 20 && (
              <div className="p-3 bg-primary-50 border-t border-primary/20">
                <button
                  onClick={handleAiAssistedComplete}
                  className="btn-primary w-full text-sm"
                >
                  Ik heb nu een voorbeeld {!alreadyCompletedAi && '(+20 pts)'}
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
