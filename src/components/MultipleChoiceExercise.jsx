import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';

const MultipleChoiceExercise = ({ principle, exercise, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [socraticStep, setSocraticStep] = useState(0);
  const { markMultipleChoiceCorrect, getPrincipleProgress } = useUser();

  const progress = getPrincipleProgress(principle.id);
  const alreadyCompleted = progress.activities.multipleChoiceCorrect;

  const handleSubmit = () => {
    const correct = selectedOption === exercise.correct;
    setIsCorrect(correct);
    setAttempts(prev => prev + 1);

    if (correct && !alreadyCompleted) {
      const points = markMultipleChoiceCorrect(principle.id);
      // Check for unlocks
      const { checkAndUnlockPrinciples } = require('../utils/localStorage');
      const newlyUnlocked = checkAndUnlockPrinciples(principle.id);
      if (newlyUnlocked.length > 0) {
        onComplete?.(newlyUnlocked);
      }
    } else if (!correct) {
      setSocraticStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="decorative-border bg-parchment-dark p-8"
    >
      <h2 className="text-2xl font-serif text-ink mb-4 flex items-center gap-2">
        <span>✍️</span>
        OEFENING 1: Herkenning
      </h2>

      <div className="h-px bg-sepia my-4"></div>

      {alreadyCompleted && (
        <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 mb-4 flex items-center gap-3">
          <span className="text-3xl">✅</span>
          <div>
            <div className="font-semibold text-green-800">Voltooid!</div>
            <div className="text-sm text-green-700">Je hebt deze oefening al correct beantwoord</div>
          </div>
        </div>
      )}

      {/* Question */}
      <div className="bg-parchment p-4 rounded-lg mb-6 border-2 border-sepia">
        <p className="text-lg text-ink font-semibold mb-2">Situatie:</p>
        <p className="text-ink-light">{exercise.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {exercise.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isThisCorrect = index === exercise.correct;
          const showResult = isCorrect !== null;

          return (
            <motion.button
              key={index}
              onClick={() => !showResult && setSelectedOption(index)}
              disabled={showResult}
              whileHover={!showResult ? { scale: 1.02, x: 4 } : {}}
              whileTap={!showResult ? { scale: 0.98 } : {}}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                showResult
                  ? isThisCorrect
                    ? 'border-green-500 bg-green-50'
                    : isSelected
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 bg-gray-50 opacity-50'
                  : isSelected
                  ? 'border-gold bg-gold/20'
                  : 'border-sepia bg-parchment hover:border-gold'
              } ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    showResult && isThisCorrect
                      ? 'border-green-500 bg-green-500'
                      : showResult && isSelected && !isThisCorrect
                      ? 'border-red-500 bg-red-500'
                      : isSelected
                      ? 'border-gold bg-gold'
                      : 'border-sepia'
                  }`}
                >
                  {showResult && isThisCorrect && <span className="text-white text-sm">✓</span>}
                  {showResult && isSelected && !isThisCorrect && <span className="text-white text-sm">✗</span>}
                </div>
                <span className={`flex-1 ${showResult && isThisCorrect ? 'font-semibold text-green-800' : 'text-ink'}`}>
                  {option}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Submit/Reset Button */}
      {isCorrect === null ? (
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className={`btn-primary w-full ${selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Controleer Antwoord
        </button>
      ) : (
        <div className="space-y-4">
          {/* Feedback */}
          <AnimatePresence>
            {isCorrect ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 border-2 border-green-500 rounded-lg p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="text-4xl">✅</span>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-green-800 mb-2">Correct!</h3>
                    <p className="text-green-700">{exercise.feedback}</p>
                    {!alreadyCompleted && (
                      <div className="mt-3 text-green-800 font-semibold">
                        🏆 +15 punten
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-4xl">🤔</span>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-yellow-800 mb-2">Niet helemaal...</h3>
                      <p className="text-yellow-700 mb-3">
                        {socraticQuestions[Math.min(socraticStep, socraticQuestions.length - 1)]}
                      </p>
                      {attempts >= 2 && (
                        <button
                          onClick={() => setShowHint(!showHint)}
                          className="text-yellow-800 underline hover:no-underline"
                        >
                          {showHint ? 'Verberg hint' : 'Toon hint'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-blue-100 border-2 border-blue-500 rounded-lg p-4"
                  >
                    <p className="text-blue-800">
                      💡 Hint: Het correcte antwoord is optie {String.fromCharCode(65 + exercise.correct)}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={handleReset}
            className="btn-primary w-full"
          >
            {isCorrect ? 'Ga verder →' : 'Probeer opnieuw'}
          </button>
        </div>
      )}
    </motion.div>
  );
};

const socraticQuestions = [
  "Interessant! Waarom denk je dat dit het juiste antwoord is?",
  "Ik snap je redenering. Maar kijk nog eens goed naar de details in de vraag...",
  "Denk aan de definitie van het principe. Past dat bij dit antwoord?",
  "Welk antwoord toont het principe het duidelijkst?",
];

export default MultipleChoiceExercise;
