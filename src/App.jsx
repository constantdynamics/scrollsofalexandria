import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import Onboarding from './pages/Onboarding';
import HomePage from './pages/HomePage';
import PrinciplePage from './pages/PrinciplePage';
import SettingsPage from './pages/SettingsPage';
import RegisterPage from './pages/RegisterPage';
import BlindDefinitionPage from './pages/BlindDefinitionPage';
import HerhalingPage from './pages/HerhalingPage';
import ExpertiseProfielPage from './pages/ExpertiseProfielPage';
import BoekenplankPage from './pages/BoekenplankPage';
import PrestatiePage from './pages/PrestatiePage';
import LeerpadPage from './pages/LeerpadPage';
import DagelijkseUitdagingPage from './pages/DagelijkseUitdagingPage';
import ErrorBoundary from './components/ErrorBoundary';
import AchievementToast from './components/AchievementToast';

function AppRoutes() {
  const { userData } = useUser();
  const theme = userData?.preferences?.theme || 'classic';
  const themeClass = theme === 'dark' ? 'theme-dark' : theme === 'light' ? 'theme-light' : '';

  return (
    <div className={`${themeClass} min-h-screen bg-bg`}>
      <AchievementToast />
      <Routes>
        <Route
          path="/"
          element={
            userData?.completedOnboarding ? (
              <Navigate to="/home" replace />
            ) : (
              <Onboarding />
            )
          }
        />
        <Route
          path="/home"
          element={
            userData?.completedOnboarding ? (
              <HomePage />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="/principle/:principleId" element={<PrinciplePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blinde-definitie" element={<BlindDefinitionPage />} />
        <Route path="/herhaling" element={<HerhalingPage />} />
        <Route path="/expertise" element={<ExpertiseProfielPage />} />
        <Route path="/boekenplank" element={<BoekenplankPage />} />
        <Route path="/prestaties" element={<PrestatiePage />} />
        <Route path="/leerpad" element={<LeerpadPage />} />
        <Route path="/uitdaging" element={<DagelijkseUitdagingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
