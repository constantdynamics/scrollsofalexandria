import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import Onboarding from './pages/Onboarding';
import HomePage from './pages/HomePage';
import PrinciplePage from './pages/PrinciplePage';
import SettingsPage from './pages/SettingsPage';
import ErrorBoundary from './components/ErrorBoundary';

function AppRoutes() {
  const { userData } = useUser();
  const theme = userData?.preferences?.theme || 'classic';
  const themeClass = theme === 'dark' ? 'theme-dark' : theme === 'light' ? 'theme-light' : '';

  return (
    <div className={themeClass} style={{ minHeight: '100vh' }}>
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
