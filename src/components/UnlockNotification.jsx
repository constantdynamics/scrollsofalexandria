import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getPrincipleById } from '../data/principles';

const UnlockNotification = ({ principleId, delay = 0, onClose }) => {
  const navigate = useNavigate();
  const principle = getPrincipleById(principleId);

  useEffect(() => {
    // Auto close after 8 seconds
    const timer = setTimeout(() => {
      onClose?.();
    }, 8000 + delay * 1000);

    return () => clearTimeout(timer);
  }, [delay, onClose]);

  if (!principle) return null;

  const handleClick = () => {
    navigate(`/principle/${principleId}`);
    onClose?.();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -100, scale: 0.8 }}
      transition={{
        delay,
        type: 'spring',
        stiffness: 200,
        damping: 20
      }}
      className="fixed bottom-8 right-8 z-50 max-w-md"
    >
      <div className="decorative-border bg-parchment-dark p-6 shadow-2xl cursor-pointer hover:scale-105 transition-transform"
           onClick={handleClick}>
        {/* Sparkle animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: [0, 1.5, 1], rotate: 0 }}
          transition={{ duration: 0.6, delay }}
          className="absolute -top-3 -right-3 text-4xl"
        >
          ✨
        </motion.div>

        <div className="mb-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
            className="text-gold font-serif text-lg mb-1 flex items-center gap-2"
          >
            <span className="text-2xl">🔓</span>
            <span>You have unlocked a new Scroll of Wisdom!</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="text-4xl">{principle.emoji}</div>
          <div className="flex-1">
            <h3 className="font-serif text-xl text-ink mb-1">{principle.title}</h3>
            <p className="text-sm text-ink-light">
              {principle.definition.substring(0, 80)}...
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.7 }}
          className="mt-4 flex items-center justify-between"
        >
          <div className="flex gap-2">
            <span className="tag-pill text-xs">{principle.academicCategory}</span>
            <span className="text-ink-light text-xs">{'⭐'.repeat(principle.difficulty)}</span>
          </div>
          <span className="text-gold font-semibold text-sm">Klik om te verkennen →</span>
        </motion.div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          className="absolute top-2 right-2 text-ink-light hover:text-ink w-6 h-6 flex items-center justify-center rounded-full hover:bg-sepia/20"
        >
          ×
        </button>
      </div>
    </motion.div>
  );
};

export default UnlockNotification;
