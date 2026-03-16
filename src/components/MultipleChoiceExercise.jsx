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
      markMultipleChoiceCorrect(principle.id);
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
      className="decorative-border bg-surface p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-1 pt-2">
        <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
          <span className="text-base">✍️</span>
        </div>
        <h2 className="text-xl font-bold text-text">Oefening 1: Herkenning</h2>
      </div>

      <div className="h-px bg-border my-4"></div>

      {alreadyCompleted && (
        <div className="bg-success-light border border-success/20 rounded-xl p-4 mb-4 flex items-center gap-3">
          <svg className="w-6 h-6 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <div>
            <div className="font-semibold text-text text-sm">Voltooid!</div>
            <div className="text-xs text-text-secondary">Je hebt deze oefening al correct beantwoord</div>
          </div>
        </div>
      )}

      {/* Question */}
      <div className="bg-bg-alt p-4 rounded-xl mb-5 border border-border">
        <p className="text-sm font-semibold text-text mb-1">Situatie:</p>
        <p className="text-sm text-text-secondary leading-relaxed">{exercise.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-2.5 mb-5">
        {exercise.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isThisCorrect = index === exercise.correct;
          const showResult = isCorrect !== null;

          return (
            <motion.button
              key={index}
              onClick={() => !showResult && setSelectedOption(index)}
              disabled={showResult}
              whileHover={!showResult ? { x: 2 } : {}}
              className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                showResult
                  ? isThisCorrect
                    ? 'border-success bg-success-light'
                    : isSelected
                    ? 'border-danger bg-danger-light'
                    : 'border-border bg-bg-alt opacity-40'
                  : isSelected
                  ? 'border-primary bg-primary-50 ring-1 ring-primary/30'
                  : 'border-border bg-surface hover:border-primary/40'
              } ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    showResult && isThisCorrect
                      ? 'border-success bg-success'
                      : showResult && isSelected && !isThisCorrect
                      ? 'border-danger bg-danger'
                      : isSelected
                      ? 'border-primary bg-primary'
                      : 'border-border-strong'
                  }`}
                >
                  {showResult && isThisCorrect && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  )}
                  {showResult && isSelected && !isThisCorrect && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                  )}
                </div>
                <span className={`flex-1 text-sm ${showResult && isThisCorrect ? 'font-semibold text-text' : 'text-text-secondary'}`}>
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
          className={`btn-primary w-full ${selectedOption === null ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          Controleer Antwoord
        </button>
      ) : (
        <div className="space-y-4">
          <AnimatePresence>
            {isCorrect ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-success-light border border-success/20 rounded-xl p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-text text-base mb-1">Correct!</h3>
                    <p className="text-sm text-text-secondary">{exercise.feedback}</p>
                    {!alreadyCompleted && (
                      <div className="mt-2 inline-flex items-center gap-1.5 bg-success/20 px-2.5 py-1 rounded-full text-success text-xs font-semibold">
                        🏆 +15 punten
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-3"
              >
                <div className="bg-warning-light border border-warning/20 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-warning/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🤔</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-text text-base mb-1">Niet helemaal...</h3>
                      <p className="text-sm text-text-secondary mb-3">
                        {socraticQuestions[Math.min(socraticStep, socraticQuestions.length - 1)]}
                      </p>
                      {attempts >= 2 && (
                        <button
                          onClick={() => setShowHint(!showHint)}
                          className="text-sm text-primary font-medium hover:text-primary-dark"
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
                    className="bg-primary-50 border border-primary-100 rounded-xl p-4"
                  >
                    <p className="text-sm text-primary-dark flex items-center gap-2">
                      <span>💡</span>
                      Hint: Het correcte antwoord is optie {String.fromCharCode(65 + exercise.correct)}
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
            {isCorrect ? 'Ga verder' : 'Probeer opnieuw'}
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
