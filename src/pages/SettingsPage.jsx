import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';

const SettingsPage = () => {
  const navigate = useNavigate();
  const { userData, updatePreference, getUserStats, resetUserData } = useUser();
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const stats = getUserStats();

  const handlePreferenceChange = (key, value) => {
    updatePreference(key, value);
  };

  const handleReset = () => {
    resetUserData();
    setShowResetConfirm(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-parchment parchment">
      {/* Header */}
      <header className="bg-parchment-dark border-b-2 border-sepia shadow-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/home')}
              className="flex items-center gap-2 text-ink-light hover:text-ink transition-colors"
            >
              <span className="text-xl">←</span>
              <span>Terug</span>
            </button>
            <h1 className="text-2xl font-serif text-ink flex items-center gap-2">
              <span>⚙️</span>
              Instellingen
            </h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-8"
        >
          <h2 className="text-xl font-serif text-ink mb-4 flex items-center gap-2">
            <span>📊</span>
            Je Voortgang
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-parchment rounded-lg border border-sepia">
              <div className="text-3xl font-bold text-gold mb-1">{stats.points}</div>
              <div className="text-sm text-ink-light">Punten</div>
            </div>
            <div className="text-center p-4 bg-parchment rounded-lg border border-sepia">
              <div className="text-3xl font-bold text-gold mb-1">{stats.unlockedCount}</div>
              <div className="text-sm text-ink-light">Ontgrendeld</div>
            </div>
            <div className="text-center p-4 bg-parchment rounded-lg border border-sepia">
              <div className="text-3xl font-bold text-gold mb-1">{stats.completedPrinciples}</div>
              <div className="text-sm text-ink-light">Beheerst</div>
            </div>
            <div className="text-center p-4 bg-parchment rounded-lg border border-sepia">
              <div className="text-3xl font-bold text-gold mb-1">{stats.averageMastery}%</div>
              <div className="text-sm text-ink-light">Gem. Beheersing</div>
            </div>
          </div>
        </motion.div>

        {/* Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card mb-8"
        >
          <h2 className="text-xl font-serif text-ink mb-6 flex items-center gap-2">
            <span>🎨</span>
            Voorkeuren
          </h2>

          {/* Organization Preference */}
          <div className="mb-6 pb-6 border-b border-sepia">
            <h3 className="font-semibold text-ink mb-3">📜 Organisatie Voorkeur</h3>
            <p className="text-sm text-ink-light mb-3">
              Kies hoe je principes wilt browsen
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handlePreferenceChange('organization', 'academic')}
                className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                  userData?.preferences?.organization === 'academic'
                    ? 'border-gold bg-gold/20'
                    : 'border-sepia hover:border-gold'
                }`}
              >
                <div className="text-2xl mb-2">🎓</div>
                <div className="font-semibold text-ink">Academisch</div>
                <div className="text-xs text-ink-light mt-1">Logica, Ethiek, etc.</div>
              </button>
              <button
                onClick={() => handlePreferenceChange('organization', 'skills')}
                className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                  userData?.preferences?.organization === 'skills'
                    ? 'border-gold bg-gold/20'
                    : 'border-sepia hover:border-gold'
                }`}
              >
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-semibold text-ink">Vaardigheden</div>
                <div className="text-xs text-ink-light mt-1">Argumenteren, Beslissen, etc.</div>
              </button>
            </div>
          </div>

          {/* Daily Reminder */}
          <div className="mb-6 pb-6 border-b border-sepia">
            <h3 className="font-semibold text-ink mb-3">🔔 Dagelijkse Herinnering</h3>
            <p className="text-sm text-ink-light mb-3">
              Ontvang een dagelijkse herinnering om te leren (via browser notificaties)
            </p>
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <button
                  onClick={() => handlePreferenceChange('dailyReminder', true)}
                  className={`px-6 py-2 rounded-lg border-2 transition-all ${
                    userData?.preferences?.dailyReminder
                      ? 'border-gold bg-gold/20 font-semibold'
                      : 'border-sepia hover:border-gold'
                  }`}
                >
                  Aan
                </button>
                <button
                  onClick={() => handlePreferenceChange('dailyReminder', false)}
                  className={`px-6 py-2 rounded-lg border-2 transition-all ${
                    !userData?.preferences?.dailyReminder
                      ? 'border-gold bg-gold/20 font-semibold'
                      : 'border-sepia hover:border-gold'
                  }`}
                >
                  Uit
                </button>
              </div>
              {userData?.preferences?.dailyReminder && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-ink-light">Tijd:</span>
                  <input
                    type="time"
                    value={userData?.preferences?.reminderTime || '08:00'}
                    onChange={(e) => handlePreferenceChange('reminderTime', e.target.value)}
                    className="px-3 py-2 rounded-lg border-2 border-sepia bg-parchment text-ink focus:border-gold focus:outline-none"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Learning Style */}
          <div className="mb-6 pb-6 border-b border-sepia">
            <h3 className="font-semibold text-ink mb-3">💡 Standaard Leerstijl</h3>
            <p className="text-sm text-ink-light mb-3">
              Kies hoe je nieuwe principes wilt leren (je kunt dit altijd per principe aanpassen)
            </p>
            <div className="space-y-2">
              <button
                onClick={() => handlePreferenceChange('defaultLearningStyle', 'definition-first')}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  userData?.preferences?.defaultLearningStyle === 'definition-first'
                    ? 'border-gold bg-gold/20'
                    : 'border-sepia hover:border-gold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <div className="font-semibold text-ink">Definitie eerst</div>
                    <div className="text-xs text-ink-light">Start met de abstracte uitleg, dan voorbeelden</div>
                  </div>
                </div>
              </button>
              <button
                onClick={() => handlePreferenceChange('defaultLearningStyle', 'example-first')}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  userData?.preferences?.defaultLearningStyle === 'example-first'
                    ? 'border-gold bg-gold/20'
                    : 'border-sepia hover:border-gold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <div className="font-semibold text-ink">Voorbeeld eerst</div>
                    <div className="text-xs text-ink-light">Start met concrete voorbeelden, werk naar definitie toe</div>
                  </div>
                </div>
              </button>
              <button
                onClick={() => handlePreferenceChange('defaultLearningStyle', 'auto')}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  userData?.preferences?.defaultLearningStyle === 'auto'
                    ? 'border-gold bg-gold/20'
                    : 'border-sepia hover:border-gold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <div className="font-semibold text-ink">Laat app kiezen (intelligent)</div>
                    <div className="text-xs text-ink-light">De app leert je voorkeur na enkele principes</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Theme (placeholder for future) */}
          <div>
            <h3 className="font-semibold text-ink mb-3">🎨 Thema</h3>
            <p className="text-sm text-ink-light mb-3">
              Kies het uiterlijk van de app
            </p>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handlePreferenceChange('theme', 'classic')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  userData?.preferences?.theme === 'classic'
                    ? 'border-gold bg-gold/20'
                    : 'border-sepia hover:border-gold'
                }`}
              >
                <div className="text-2xl mb-2">📜</div>
                <div className="text-sm font-semibold text-ink">Klassiek Scroll</div>
              </button>
              <button
                disabled
                className="p-4 rounded-lg border-2 border-gray-300 bg-gray-100 opacity-50 cursor-not-allowed"
              >
                <div className="text-2xl mb-2">☀️</div>
                <div className="text-sm font-semibold text-gray-500">Licht</div>
                <div className="text-xs text-gray-400">Binnenkort</div>
              </button>
              <button
                disabled
                className="p-4 rounded-lg border-2 border-gray-300 bg-gray-100 opacity-50 cursor-not-allowed"
              >
                <div className="text-2xl mb-2">🌙</div>
                <div className="text-sm font-semibold text-gray-500">Donker</div>
                <div className="text-xs text-gray-400">Binnenkort</div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card border-2 border-red-500"
        >
          <h2 className="text-xl font-serif text-red-700 mb-4 flex items-center gap-2">
            <span>⚠️</span>
            Danger Zone
          </h2>
          <p className="text-sm text-ink-light mb-4">
            Reset alle voortgang en begin opnieuw. Dit kan niet ongedaan worden gemaakt!
          </p>

          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Reset Alle Data
            </button>
          ) : (
            <div className="space-y-3">
              <div className="bg-red-100 border-2 border-red-500 rounded-lg p-4">
                <p className="text-red-800 font-semibold mb-2">Weet je het zeker?</p>
                <p className="text-sm text-red-700">
                  Dit verwijdert al je voortgang, punten, en ontgrendelde principes.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Ja, reset alles
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                >
                  Annuleer
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 text-sm text-ink-light"
        >
          <p>Scrolls of Wisdom v1.0</p>
          <p className="mt-1">Leer generieke denkprincipes die je overal kunt toepassen</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SettingsPage;
