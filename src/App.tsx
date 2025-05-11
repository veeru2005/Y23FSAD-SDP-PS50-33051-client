import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import MusicPlayer from './components/player/MusicPlayer';
import HomePage from './pages/HomePage';
import RadioPage from './pages/RadioPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={
          <>
            <Navbar />
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/radio" element={<RadioPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
            <MusicPlayer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;