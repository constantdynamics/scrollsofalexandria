import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getPrincipleById } from '../data/principles';

const UnlockNotification = ({ principleId, delay = 0, onClose }) => {
  const navigate = useNavigate();
  const principle = getPrincipleById(principleId);

  useEffect(() => {
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
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{
        delay,
        type: 'spring',
        stiffness: 260,
        damping: 22
      }}
      className="fixed bottom-6 right-6 z-50 max-w-sm"
    >
      <div
        className="bg-surface border border-border rounded-2xl p-5 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow relative overflow-hidden"
        onClick={handleClick}
      >
        {/* Accent top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-accent" />

        <div className="mb-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
            className="flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
            Nieuwe scroll ontgrendeld!
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.4 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">{principle.emoji}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-text text-sm mb-0.5 truncate">{principle.title}</h3>
            <p className="text-xs text-text-muted line-clamp-1">
              {principle.definition.substring(0, 80)}...
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.6 }}
          className="mt-3 flex items-center justify-between"
        >
          <span className="tag-pill text-xs">{principle.academicCategory}</span>
          <span className="text-xs text-primary font-medium flex items-center gap-1">
            Verkennen
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </span>
        </motion.div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full text-text-muted hover:text-text hover:bg-bg-alt transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </motion.div>
  );
};

export default UnlockNotification;
