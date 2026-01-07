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
    <div className="min-h-screen bg-parchment parchment flex items-center justify-center p-4">
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
      transition={{ duration: 0.6 }}
      className="max-w-2xl w-full text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8"
      >
        <div className="text-8xl mb-6">📜</div>
        <h1 className="text-5xl font-serif text-ink mb-4">
          Scrolls of Wisdom
        </h1>
        <p className="text-xl text-ink-light font-sans">
          Leer generieke denkprincipes die je overal kunt toepassen
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="decorative-border bg-parchment-dark p-8 mb-8"
      >
        <p className="text-lg text-ink-light italic">
          "Kennis van de principes van het denken is machtiger dan kennis van feiten alleen.
          Leer een principe en pas het toe in duizend situaties."
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        onClick={onNext}
        className="btn-primary text-lg px-8 py-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
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
      transition={{ duration: 0.6 }}
      className="max-w-3xl w-full"
    >
      <h2 className="text-4xl font-serif text-ink text-center mb-8">
        Hoe het werkt
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card text-center"
        >
          <div className="text-5xl mb-4">📜</div>
          <h3 className="text-xl font-serif text-ink mb-2">1. Kies een principe</h3>
          <p className="text-ink-light">
            Blader door categorieën en kies een denprincipe dat je interesseert
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card text-center"
        >
          <div className="text-5xl mb-4">📖</div>
          <h3 className="text-xl font-serif text-ink mb-2">2. Leer door voorbeelden</h3>
          <p className="text-ink-light">
            Zie hoe het principe werkt in verschillende domeinen: business, politiek, dagelijks leven
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card text-center"
        >
          <div className="text-5xl mb-4">✍️</div>
          <h3 className="text-xl font-serif text-ink mb-2">3. Pas toe en beheers</h3>
          <p className="text-ink-light">
            Oefen met herkenning en bedenk je eigen voorbeelden
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-gold/20 border-2 border-gold rounded-lg p-6 mb-8"
      >
        <div className="flex items-start gap-4">
          <div className="text-3xl">🎯</div>
          <div>
            <h4 className="font-serif text-lg text-ink mb-2">Ontgrendel nieuwe scrolls</h4>
            <p className="text-ink-light">
              Naarmate je leert, worden gerelateerde principes ontgrendeld. Verzamel punten door voorbeelden te bedenken.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center"
      >
        <button
          onClick={onNext}
          className="btn-primary text-lg px-8 py-4"
        >
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
      transition={{ duration: 0.6 }}
      className="max-w-4xl w-full"
    >
      <h2 className="text-4xl font-serif text-ink text-center mb-4">
        Kies je organisatie
      </h2>
      <p className="text-center text-ink-light mb-8 text-lg">
        Hoe wil je principes verkennen? Je kunt dit later altijd switchen.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => setSelected('academic')}
          className={`card text-left p-8 transition-all ${
            selected === 'academic'
              ? 'ring-4 ring-gold shadow-xl scale-105'
              : 'hover:shadow-lg hover:scale-102'
          }`}
          whileHover={{ scale: selected === 'academic' ? 1.05 : 1.02 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">🎓</div>
            <h3 className="text-2xl font-serif text-ink">Academisch</h3>
          </div>
          <p className="text-ink-light mb-4">
            Verken principes georganiseerd naar klassieke filosofische en wetenschappelijke categorieën
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-ink-light">
              <span>📚</span>
              <span>Logica</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-light">
              <span>⚖️</span>
              <span>Ethiek</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-light">
              <span>🧠</span>
              <span>Epistemologie</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-light">
              <span>🎭</span>
              <span>Retorica</span>
            </div>
          </div>
          {selected === 'academic' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 text-center"
            >
              <span className="inline-block bg-gold text-ink px-4 py-2 rounded-full font-semibold">
                ✓ Gekozen
              </span>
            </motion.div>
          )}
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => setSelected('skills')}
          className={`card text-left p-8 transition-all ${
            selected === 'skills'
              ? 'ring-4 ring-gold shadow-xl scale-105'
              : 'hover:shadow-lg hover:scale-102'
          }`}
          whileHover={{ scale: selected === 'skills' ? 1.05 : 1.02 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">🎯</div>
            <h3 className="text-2xl font-serif text-ink">Vaardigheden</h3>
          </div>
          <p className="text-ink-light mb-4">
            Verken principes georganiseerd naar praktische vaardigheden en toepassingen
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-ink-light">
              <span>💬</span>
              <span>Beter Argumenteren</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-light">
              <span>🎭</span>
              <span>Manipulatie Herkennen</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-light">
              <span>🧩</span>
              <span>Complexiteit Begrijpen</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-light">
              <span>🎲</span>
              <span>Beslissingen Nemen</span>
            </div>
          </div>
          {selected === 'skills' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 text-center"
            >
              <span className="inline-block bg-gold text-ink px-4 py-2 rounded-full font-semibold">
                ✓ Gekozen
              </span>
            </motion.div>
          )}
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <button
          onClick={() => selected && onChoose(selected)}
          disabled={!selected}
          className={`btn-primary text-lg px-8 py-4 ${
            !selected ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Start met leren
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Onboarding;
