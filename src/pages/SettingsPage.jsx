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

  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const parsed = JSON.parse(evt.target.result);
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
    e.target.value = '';
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="bg-surface border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-surface/95">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/home')}
              className="flex items-center gap-2 text-text-secondary hover:text-text transition-colors text-sm font-medium"
              aria-label="Terug naar home"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Terug
            </button>
            <h1 className="text-lg font-bold text-text">Instellingen</h1>
            <div className="w-16"></div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-6"
        >
          <h2 className="text-base font-bold text-text mb-4 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary-50 flex items-center justify-center"><span className="text-sm">📊</span></div>
            Je Voortgang
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <StatCard value={stats.points} label="Punten" color="text-primary" />
            <StatCard value={stats.totalPrinciples} label="Bezig" color="text-primary" />
            <StatCard value={stats.completedPrinciples} label="Beheerst" color="text-success" />
            <StatCard value={`${stats.averageMastery}%`} label="Gem. Beheersing" color="text-accent-dark" />
            <StatCard value={stats.currentStreak > 0 ? stats.currentStreak : '—'} label="Huidige reeks" color="text-accent-dark" icon={stats.currentStreak > 0 ? '🔥' : null} />
            <StatCard value={stats.longestStreak > 0 ? stats.longestStreak : '—'} label="Langste reeks" color="text-text-secondary" />
          </div>
        </motion.div>

        {/* Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="card mb-6"
        >
          <h2 className="text-base font-bold text-text mb-6 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary-50 flex items-center justify-center"><span className="text-sm">🎨</span></div>
            Voorkeuren
          </h2>

          {/* Organization Preference */}
          <div className="mb-6 pb-6 border-b border-border">
            <h3 className="font-semibold text-text text-sm mb-1">Organisatie Voorkeur</h3>
            <p className="text-xs text-text-muted mb-3">Kies hoe je principes wilt browsen</p>
            <div className="flex gap-3">
              {[
                { value: 'academic', icon: '🎓', label: 'Academisch', desc: 'Logica, Ethiek, etc.' },
                { value: 'skills', icon: '🎯', label: 'Vaardigheden', desc: 'Argumenteren, Beslissen, etc.' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handlePreferenceChange('organization', opt.value)}
                  className={`flex-1 p-4 rounded-xl border transition-all text-left ${
                    userData?.preferences?.organization === opt.value
                      ? 'border-primary bg-primary-50 ring-1 ring-primary/30'
                      : 'border-border hover:border-primary/40'
                  }`}
                >
                  <div className="text-xl mb-1.5">{opt.icon}</div>
                  <div className="font-semibold text-text text-sm">{opt.label}</div>
                  <div className="text-xs text-text-muted mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Daily Reminder */}
          <div className="mb-6 pb-6 border-b border-border">
            <h3 className="font-semibold text-text text-sm mb-1">Dagelijkse Herinnering</h3>
            <p className="text-xs text-text-muted mb-3">Ontvang een dagelijkse herinnering om te leren</p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="inline-flex rounded-lg bg-bg-alt p-1 border border-border">
                <button
                  onClick={() => handlePreferenceChange('dailyReminder', true)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                    userData?.preferences?.dailyReminder
                      ? 'bg-surface text-text shadow-sm border border-border'
                      : 'text-text-muted hover:text-text'
                  }`}
                >
                  Aan
                </button>
                <button
                  onClick={() => handlePreferenceChange('dailyReminder', false)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                    !userData?.preferences?.dailyReminder
                      ? 'bg-surface text-text shadow-sm border border-border'
                      : 'text-text-muted hover:text-text'
                  }`}
                >
                  Uit
                </button>
              </div>
              {userData?.preferences?.dailyReminder && (
                <input
                  type="time"
                  value={userData?.preferences?.reminderTime || '08:00'}
                  onChange={(e) => handlePreferenceChange('reminderTime', e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-border bg-surface text-text text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              )}
            </div>
          </div>

          {/* Learning Style */}
          <div className="mb-6 pb-6 border-b border-border">
            <h3 className="font-semibold text-text text-sm mb-1">Standaard Leerstijl</h3>
            <p className="text-xs text-text-muted mb-3">Kies hoe je nieuwe principes wilt leren</p>
            <div className="space-y-2">
              {[
                { value: 'definition-first', icon: '🎯', label: 'Definitie eerst', desc: 'Start met de abstracte uitleg, dan voorbeelden' },
                { value: 'example-first', icon: '💡', label: 'Voorbeeld eerst', desc: 'Start met concrete voorbeelden, werk naar definitie toe' },
                { value: 'auto', icon: '🤖', label: 'Laat app kiezen', desc: 'De app leert je voorkeur na enkele principes' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handlePreferenceChange('defaultLearningStyle', opt.value)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center gap-3 ${
                    userData?.preferences?.defaultLearningStyle === opt.value
                      ? 'border-primary bg-primary-50 ring-1 ring-primary/30'
                      : 'border-border hover:border-primary/40'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-bg-alt flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">{opt.icon}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-text text-sm">{opt.label}</div>
                    <div className="text-xs text-text-muted">{opt.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Theme */}
          <div className="mb-6 pb-6 border-b border-border">
            <h3 className="font-semibold text-text text-sm mb-1">Thema</h3>
            <p className="text-xs text-text-muted mb-3">Kies het uiterlijk van de app</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'classic', label: 'Standaard', gradient: 'from-slate-100 to-slate-200', dot: 'bg-primary' },
                { value: 'light', label: 'Licht', gradient: 'from-white to-gray-100', dot: 'bg-gray-300' },
                { value: 'dark', label: 'Donker', gradient: 'from-slate-800 to-slate-900', dot: 'bg-slate-600' },
              ].map(theme => (
                <button
                  key={theme.value}
                  onClick={() => handlePreferenceChange('theme', theme.value)}
                  className={`p-4 rounded-xl border transition-all text-center ${
                    userData?.preferences?.theme === theme.value
                      ? 'border-primary ring-1 ring-primary/30 bg-primary-50'
                      : 'border-border hover:border-primary/40'
                  }`}
                >
                  <div className={`w-full h-8 rounded-lg bg-gradient-to-br ${theme.gradient} mb-2 border border-border`}></div>
                  <div className="text-sm font-semibold text-text">{theme.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Progressive Unlock */}
          <div>
            <h3 className="font-semibold text-text text-sm mb-1">Progressief Ontgrendelen</h3>
            <p className="text-xs text-text-muted mb-3">In de bibliotheek volg je een leerpad van basis naar gevorderd. Elke sectie ontgrendelt als je de helft van de vorige hebt gelezen.</p>
            <div className="inline-flex rounded-lg bg-bg-alt p-1 border border-border">
              <button
                onClick={() => handlePreferenceChange('progressiveUnlock', true)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  userData?.preferences?.progressiveUnlock
                    ? 'bg-surface text-text shadow-sm border border-border'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                Aan
              </button>
              <button
                onClick={() => handlePreferenceChange('progressiveUnlock', false)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  !userData?.preferences?.progressiveUnlock
                    ? 'bg-surface text-text shadow-sm border border-border'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                Uit
              </button>
            </div>
          </div>
        </motion.div>

        {/* Data Export / Import */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="card mb-6"
        >
          <h2 className="text-base font-bold text-text mb-2 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary-50 flex items-center justify-center"><span className="text-sm">💾</span></div>
            Voortgang Opslaan & Herstellen
          </h2>
          <p className="text-xs text-text-muted mb-4">
            Exporteer je voortgang als back-up, of importeer een eerder opgeslagen bestand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <button
                onClick={handleExport}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                Exporteer voortgang
              </button>
              {exportMsg && (
                <p className="text-xs text-success mt-2 text-center font-medium">{exportMsg}</p>
              )}
            </div>
            <div className="flex-1">
              <button
                onClick={() => importRef.current?.click()}
                className="w-full px-4 py-3 bg-surface text-text rounded-xl font-semibold border border-border hover:border-primary/40 hover:bg-bg-alt transition-all flex items-center justify-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Importeer backup
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
                <p className="text-xs text-primary mt-2 text-center font-medium">{importMsg}</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="card border-danger/30"
        >
          <h2 className="text-base font-bold text-danger mb-2 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-danger-light flex items-center justify-center"><span className="text-sm">⚠️</span></div>
            Danger Zone
          </h2>
          <p className="text-xs text-text-muted mb-4">
            Reset alle voortgang en begin opnieuw. Dit kan niet ongedaan worden gemaakt!
          </p>

          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="px-4 py-2.5 bg-danger text-white rounded-xl font-semibold text-sm hover:bg-red-600 transition-colors"
            >
              Reset Alle Data
            </button>
          ) : (
            <div className="space-y-3">
              <div className="bg-danger-light border border-danger/30 rounded-xl p-4">
                <p className="text-danger font-semibold text-sm mb-1">Weet je het zeker?</p>
                <p className="text-xs text-text-secondary">
                  Dit verwijdert al je voortgang, punten, en ontgrendelde principes.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 px-4 py-2.5 bg-danger text-white rounded-xl font-semibold text-sm hover:bg-red-600 transition-colors"
                >
                  Ja, reset alles
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 px-4 py-2.5 bg-bg-alt text-text rounded-xl font-semibold text-sm hover:bg-border transition-colors border border-border"
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
          transition={{ delay: 0.25 }}
          className="text-center mt-8 text-xs text-text-muted"
        >
          <p>Scrolls of Wisdom v1.1</p>
          <p className="mt-1">Leer generieke denkprincipes die je overal kunt toepassen</p>
        </motion.div>
      </div>
    </div>
  );
};

const StatCard = ({ value, label, color = 'text-primary', icon }) => (
  <div className="text-center p-3 bg-bg-alt rounded-xl border border-border">
    <div className={`text-xl font-bold ${color} mb-0.5`}>
      {icon && <span className="mr-0.5">{icon}</span>}
      {value}
    </div>
    <div className="text-xs text-text-muted">{label}</div>
  </div>
);

export default SettingsPage;
