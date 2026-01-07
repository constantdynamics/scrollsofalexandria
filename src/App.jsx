import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import Onboarding from './pages/Onboarding';
import HomePage from './pages/HomePage';
import PrinciplePage from './pages/PrinciplePage';
import SettingsPage from './pages/SettingsPage';

function AppRoutes() {
  const { userData } = useUser();

  return (
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
  );
}

function App() {
  return (
    <Router>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </Router>
  );
}

export default App;
