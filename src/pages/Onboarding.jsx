import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { updatePreference, completeOnboarding } = useUser();

  const handleOrganizationChoice = (choice) => {
    updatePreference('organization', choice);
    completeOnboarding();
    navigate('/home');
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      {/* Ambient background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(92,79,207,0.18) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(201,136,15,0.15) 0%, transparent 70%)' }}
        />
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-border) 0.75px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {step === 1 && <Step1 key="step1" onNext={nextStep} />}
          {step === 2 && <Step2 key="step2" onNext={nextStep} />}
          {step === 3 && <Step3 key="step3" onChoose={handleOrganizationChoice} />}
        </AnimatePresence>
      </div>

      {/* Step indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {[1, 2, 3].map(s => (
          <div
            key={s}
            className="rounded-full transition-all duration-300"
            style={{
              width: s === step ? '24px' : '6px',
              height: '6px',
              background: s === step ? 'var(--color-primary)' : 'var(--color-border-strong)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Step1 = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="max-w-xl w-full text-center mx-auto"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, type: 'spring', stiffness: 180 }}
        className="mb-8"
      >
        <div
          className="w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center shadow-xl float-gentle"
          style={{
            background: 'linear-gradient(140deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
            boxShadow: '0 8px 32px rgba(92,79,207,0.35), 0 2px 8px rgba(92,79,207,0.20)',
          }}
        >
          <span className="text-5xl">📜</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-4xl md:text-5xl font-bold text-text mb-3"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
        >
          Scrolls of<br />
          <span style={{ color: 'var(--color-primary)' }}>Alexandria</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-text-secondary max-w-sm mx-auto leading-relaxed"
        >
          Leer generieke denkprincipes die je overal kunt toepassen
        </motion.p>
      </motion.div>

      {/* Quote card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="mb-8 mx-auto max-w-md"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary-50) 0%, rgba(201,136,15,0.06) 100%)',
          border: '1px solid var(--color-primary-100)',
          borderRadius: 'var(--radius-xl)',
          padding: '1.5rem',
          position: 'relative',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '4rem',
            lineHeight: 1,
            color: 'var(--color-primary)',
            opacity: 0.25,
            position: 'absolute',
            top: '0.5rem',
            left: '1rem',
            fontStyle: 'italic',
          }}
        >
          &ldquo;
        </span>
        <p className="text-text-secondary italic leading-relaxed text-sm relative z-10 pt-2">
          Kennis van de principes van het denken is machtiger dan kennis van feiten alleen.
          Leer een principe en pas het toe in duizend situaties.
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        onClick={onNext}
        className="btn-primary text-base px-10 py-4"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Begin je reis
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

const Step2 = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="max-w-3xl w-full mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-2" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>
          Hoe het werkt
        </h2>
        <p className="text-text-muted">Drie stappen naar dieper inzicht</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-7">
        {[
          { icon: '📜', step: '1', title: 'Kies een principe', desc: 'Blader door categorieën en kies een denkprincipe dat je interesseert', color: 'var(--color-primary)' },
          { icon: '📖', step: '2', title: 'Leer door voorbeelden', desc: 'Zie hoe het principe werkt in business, politiek en dagelijks leven', color: 'var(--color-accent)' },
          { icon: '✍️', step: '3', title: 'Pas toe en beheers', desc: 'Oefen met herkenning en bedenk je eigen voorbeelden', color: 'var(--color-success)' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 + i * 0.14, ease: 'easeOut' }}
            className="card text-center p-6 relative overflow-hidden"
          >
            {/* Step number watermark */}
            <div
              className="absolute top-3 right-4 font-bold opacity-8"
              style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', lineHeight: 1, color: item.color, opacity: 0.07 }}
            >
              {item.step}
            </div>
            <div
              className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center relative z-10"
              style={{
                background: `color-mix(in srgb, ${item.color} 12%, transparent)`,
                border: `1px solid color-mix(in srgb, ${item.color} 25%, transparent)`,
              }}
            >
              <span className="text-2xl">{item.icon}</span>
            </div>
            <div className="text-xs font-bold mb-1.5 tracking-widest uppercase" style={{ color: item.color }}>
              Stap {item.step}
            </div>
            <h3 className="text-base font-bold text-text mb-2">{item.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="rounded-2xl p-5 mb-7 flex items-start gap-4"
        style={{
          background: 'rgba(201,136,15,0.07)',
          border: '1px solid rgba(201,136,15,0.25)',
        }}
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(201,136,15,0.15)', border: '1px solid rgba(201,136,15,0.25)' }}
        >
          <span className="text-xl">🏆</span>
        </div>
        <div>
          <h4 className="font-bold text-text mb-1">Ontgrendel nieuwe scrolls</h4>
          <p className="text-sm text-text-secondary leading-relaxed">
            Naarmate je leert, worden gerelateerde principes ontgrendeld. Verzamel punten door voorbeelden te bedenken.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <button onClick={onNext} className="btn-primary text-base px-10 py-4">
          Volgende
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

const Step3 = ({ onChoose }) => {
  const [selected, setSelected] = useState(null);

  const options = [
    {
      id: 'academic',
      icon: '🎓',
      title: 'Academisch',
      desc: 'Verken principes georganiseerd naar klassieke filosofische en wetenschappelijke categorieën',
      tags: ['📚 Logica', '⚖️ Ethiek', '🧠 Epistemologie', '🎭 Retorica'],
      accentColor: 'var(--color-primary)',
      accentBg: 'var(--color-primary-50)',
      accentBorder: 'var(--color-primary-100)',
    },
    {
      id: 'skills',
      icon: '🎯',
      title: 'Vaardigheden',
      desc: 'Verken principes georganiseerd naar praktische vaardigheden en toepassingen',
      tags: ['💬 Beter Argumenteren', '🎭 Manipulatie Herkennen', '🧩 Complexiteit', '🎲 Beslissingen'],
      accentColor: 'var(--color-accent)',
      accentBg: 'rgba(201,136,15,0.08)',
      accentBorder: 'rgba(201,136,15,0.22)',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="max-w-3xl w-full mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-2" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>
          Kies je pad
        </h2>
        <p className="text-text-secondary">
          Hoe wil je principes verkennen? Je kunt dit later altijd wijzigen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        {options.map((opt, i) => {
          const isSelected = selected === opt.id;
          return (
            <motion.button
              key={opt.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.15 }}
              onClick={() => setSelected(opt.id)}
              className="card text-left p-6 transition-all relative overflow-hidden"
              style={isSelected ? {
                borderColor: opt.accentColor,
                boxShadow: `0 0 0 2px ${opt.accentColor}, var(--shadow-md)`,
              } : {
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Selected accent strip */}
              {isSelected && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: opt.accentColor, transformOrigin: 'left' }}
                />
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{
                    background: isSelected ? opt.accentColor : opt.accentBg,
                    border: `1px solid ${opt.accentBorder}`,
                    transition: 'background 0.25s ease',
                  }}
                >
                  <span className="text-2xl">{opt.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-text" style={{ fontFamily: 'var(--font-display)' }}>
                  {opt.title}
                </h3>
              </div>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">{opt.desc}</p>
              <div className="space-y-1.5">
                {opt.tags.map(tag => (
                  <div key={tag} className="flex items-center gap-2 text-sm text-text-muted">{tag}</div>
                ))}
              </div>
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 pt-4 border-t"
                  style={{ borderColor: opt.accentBorder }}
                >
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold text-white"
                    style={{ background: opt.accentColor }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gekozen
                  </span>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <button
          onClick={() => selected && onChoose(selected)}
          disabled={!selected}
          className={`btn-primary text-base px-10 py-4 ${!selected ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          Start met leren
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        {!selected && (
          <p className="text-xs text-text-muted mt-2">Kies eerst een optie hierboven</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Onboarding;
