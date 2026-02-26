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
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {step === 1 && <Step1 key="step1" onNext={nextStep} />}
        {step === 2 && <Step2 key="step2" onNext={nextStep} />}
        {step === 3 && <Step3 key="step3" onChoose={handleOrganizationChoice} />}
      </AnimatePresence>
    </div>
  );
};

const Step1 = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl w-full text-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="mb-10"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg">
          <span className="text-4xl">📜</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text mb-3 tracking-tight">
          Scrolls of Wisdom
        </h1>
        <p className="text-lg text-text-secondary max-w-md mx-auto">
          Leer generieke denkprincipes die je overal kunt toepassen
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-primary-50 border border-primary-100 rounded-xl p-6 mb-8 max-w-md mx-auto"
      >
        <p className="text-text-secondary italic leading-relaxed">
          "Kennis van de principes van het denken is machtiger dan kennis van feiten alleen.
          Leer een principe en pas het toe in duizend situaties."
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        onClick={onNext}
        className="btn-primary text-base px-8 py-3.5"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Begin je reis
      </motion.button>
    </motion.div>
  );
};

const Step2 = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl w-full"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-text text-center mb-2 tracking-tight">
        Hoe het werkt
      </h2>
      <p className="text-text-muted text-center mb-8">Drie stappen naar dieper inzicht</p>

      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {[
          { icon: '📜', step: '1', title: 'Kies een principe', desc: 'Blader door categorieën en kies een denkprincipe dat je interesseert' },
          { icon: '📖', step: '2', title: 'Leer door voorbeelden', desc: 'Zie hoe het principe werkt in business, politiek en dagelijks leven' },
          { icon: '✍️', step: '3', title: 'Pas toe en beheers', desc: 'Oefen met herkenning en bedenk je eigen voorbeelden' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.15 }}
            className="card text-center p-6"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-50 flex items-center justify-center">
              <span className="text-2xl">{item.icon}</span>
            </div>
            <div className="text-xs font-bold text-primary mb-1">STAP {item.step}</div>
            <h3 className="text-lg font-bold text-text mb-2">{item.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-accent/10 border border-accent/20 rounded-xl p-5 mb-8 flex items-start gap-4"
      >
        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
          <span className="text-xl">🎯</span>
        </div>
        <div>
          <h4 className="font-bold text-text mb-1">Ontgrendel nieuwe scrolls</h4>
          <p className="text-sm text-text-secondary">
            Naarmate je leert, worden gerelateerde principes ontgrendeld. Verzamel punten door voorbeelden te bedenken.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-center"
      >
        <button onClick={onNext} className="btn-primary text-base px-8 py-3.5">
          Volgende
        </button>
      </motion.div>
    </motion.div>
  );
};

const Step3 = ({ onChoose }) => {
  const [selected, setSelected] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl w-full"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-text text-center mb-2 tracking-tight">
        Kies je organisatie
      </h2>
      <p className="text-center text-text-secondary mb-8">
        Hoe wil je principes verkennen? Je kunt dit later altijd switchen.
      </p>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => setSelected('academic')}
          className={`card text-left p-6 transition-all ${
            selected === 'academic'
              ? 'ring-2 ring-primary border-primary shadow-lg'
              : 'hover:shadow-md hover:border-border-strong'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold text-text">Academisch</h3>
          </div>
          <p className="text-sm text-text-secondary mb-4">
            Verken principes georganiseerd naar klassieke filosofische en wetenschappelijke categorieën
          </p>
          <div className="space-y-2">
            {['📚 Logica', '⚖️ Ethiek', '🧠 Epistemologie', '🎭 Retorica'].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-text-muted">{item}</div>
            ))}
          </div>
          {selected === 'academic' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4"
            >
              <span className="inline-flex items-center gap-1.5 bg-primary text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Gekozen
              </span>
            </motion.div>
          )}
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          onClick={() => setSelected('skills')}
          className={`card text-left p-6 transition-all ${
            selected === 'skills'
              ? 'ring-2 ring-primary border-primary shadow-lg'
              : 'hover:shadow-md hover:border-border-strong'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-text">Vaardigheden</h3>
          </div>
          <p className="text-sm text-text-secondary mb-4">
            Verken principes georganiseerd naar praktische vaardigheden en toepassingen
          </p>
          <div className="space-y-2">
            {['💬 Beter Argumenteren', '🎭 Manipulatie Herkennen', '🧩 Complexiteit Begrijpen', '🎲 Beslissingen Nemen'].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-text-muted">{item}</div>
            ))}
          </div>
          {selected === 'skills' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4"
            >
              <span className="inline-flex items-center gap-1.5 bg-primary text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Gekozen
              </span>
            </motion.div>
          )}
        </motion.button>
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
          className={`btn-primary text-base px-8 py-3.5 ${
            !selected ? 'opacity-40 cursor-not-allowed' : ''
          }`}
        >
          Start met leren
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Onboarding;
