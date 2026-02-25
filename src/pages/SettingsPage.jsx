import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';

const SettingsPage = () => {
  const navigate = useNavigate();
  const { userData, updatePreference, getUserStats, resetUserData } = useUser();
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [exportMsg, setExportMsg] = useState('');
  const [importMsg, setImportMsg] = useState('');
  const importRef = useRef(null);
  const stats = getUserStats();

  const handlePreferenceChange = (key, value) => {
    updatePreference(key, value);
  };

  const handleReset = () => {
    resetUserData();
    setShowResetConfirm(false);
    navigate('/');
  };

  // Export user data as JSON file
  const handleExport = () => {
    try {
      const data = JSON.stringify(userData, null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `scrolls-of-wisdom-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setExportMsg('Voortgang geëxporteerd!');
      setTimeout(() => setExportMsg(''), 3000);
    } catch {
      setExportMsg('Export mislukt.');
    }
  };

  // Import user data from JSON file
  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const parsed = JSON.parse(evt.target.result);
        // Basic validation: check expected fields
        if (!parsed.userId || !parsed.preferences) {
          setImportMsg('Ongeldig bestand. Gebruik een backup van deze app.');
          return;
        }
        localStorage.setItem('scrolls_of_wisdom_user_data', evt.target.result);
        setImportMsg('Voortgang hersteld! Pagina wordt herladen...');
        setTimeout(() => window.location.reload(), 1500);
      } catch {
        setImportMsg('Fout bij importeren. Controleer het bestand.');
      }
    };
    reader.readAsText(file);
    // Reset file input
    e.target.value = '';
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
              aria-label="Terug naar home"
            >
              <span className="text-xl">←</span>
              <span>Terug</span>
            </button>
            <h1 className="text-2xl font-serif text-ink flex items-center gap-2">
              <span>⚙️</span>
              Instellingen
            </h1>
            <div className="w-20"></div>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <StatCard value={stats.points} label="Punten" />
            <StatCard value={stats.unlockedCount} label="Ontgrendeld" />
            <StatCard value={stats.completedPrinciples} label="Beheerst" />
            <StatCard value={`${stats.averageMastery}%`} label="Gem. Beheersing" />
            <StatCard value={stats.currentStreak > 0 ? `🔥 ${stats.currentStreak}` : '—'} label="Huidige reeks" />
            <StatCard value={stats.longestStreak > 0 ? stats.longestStreak : '—'} label="Langste reeks" />
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
            <div className="flex items-center gap-4 flex-wrap">
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
              {[
                { value: 'definition-first', emoji: '🎯', label: 'Definitie eerst', desc: 'Start met de abstracte uitleg, dan voorbeelden' },
                { value: 'example-first', emoji: '💡', label: 'Voorbeeld eerst', desc: 'Start met concrete voorbeelden, werk naar definitie toe' },
                { value: 'auto', emoji: '🤖', label: 'Laat app kiezen (intelligent)', desc: 'De app leert je voorkeur na enkele principes' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handlePreferenceChange('defaultLearningStyle', opt.value)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    userData?.preferences?.defaultLearningStyle === opt.value
                      ? 'border-gold bg-gold/20'
                      : 'border-sepia hover:border-gold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{opt.emoji}</span>
                    <div>
                      <div className="font-semibold text-ink">{opt.label}</div>
                      <div className="text-xs text-ink-light">{opt.desc}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Theme */}
          <div>
            <h3 className="font-semibold text-ink mb-3">🎨 Thema</h3>
            <p className="text-sm text-ink-light mb-3">
              Kies het uiterlijk van de app
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'classic', emoji: '📜', label: 'Klassiek Scroll', preview: 'bg-amber-100 border-amber-600' },
                { value: 'light', emoji: '☀️', label: 'Licht', preview: 'bg-gray-50 border-gray-400' },
                { value: 'dark', emoji: '🌙', label: 'Donker', preview: 'bg-stone-900 border-stone-600' },
              ].map(theme => (
                <button
                  key={theme.value}
                  onClick={() => handlePreferenceChange('theme', theme.value)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    userData?.preferences?.theme === theme.value
                      ? 'border-gold bg-gold/20'
                      : 'border-sepia hover:border-gold'
                  }`}
                >
                  <div className={`w-full h-8 rounded mb-2 border ${theme.preview}`}></div>
                  <div className="text-xl mb-1">{theme.emoji}</div>
                  <div className="text-sm font-semibold text-ink">{theme.label}</div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Data Export / Import */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="card mb-8"
        >
          <h2 className="text-xl font-serif text-ink mb-4 flex items-center gap-2">
            <span>💾</span>
            Voortgang Opslaan & Herstellen
          </h2>
          <p className="text-sm text-ink-light mb-5">
            Exporteer je voortgang als back-up, of importeer een eerder opgeslagen bestand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <button
                onClick={handleExport}
                className="w-full px-6 py-3 bg-gold text-ink rounded-lg font-semibold border-2 border-bronze hover:bg-bronze transition-colors"
              >
                📤 Exporteer voortgang
              </button>
              {exportMsg && (
                <p className="text-sm text-green-700 mt-2 text-center">{exportMsg}</p>
              )}
            </div>
            <div className="flex-1">
              <button
                onClick={() => importRef.current?.click()}
                className="w-full px-6 py-3 bg-parchment text-ink rounded-lg font-semibold border-2 border-sepia hover:border-gold transition-colors"
              >
                📥 Importeer backup
              </button>
              <input
                ref={importRef}
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
                aria-label="Importeer voortgang JSON bestand"
              />
              {importMsg && (
                <p className="text-sm text-blue-700 mt-2 text-center">{importMsg}</p>
              )}
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
          <p>Scrolls of Wisdom v1.1</p>
          <p className="mt-1">Leer generieke denkprincipes die je overal kunt toepassen</p>
        </motion.div>
      </div>
    </div>
  );
};

const StatCard = ({ value, label }) => (
  <div className="text-center p-3 bg-parchment rounded-lg border border-sepia">
    <div className="text-2xl font-bold text-gold mb-1">{value}</div>
    <div className="text-xs text-ink-light">{label}</div>
  </div>
);

export default SettingsPage;
