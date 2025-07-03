


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import Footer from './components/landingpage/Footer';
import Hero from './components/landingpage/Hero';

import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <Router>
      {/* Always show Navbar */}
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Hero />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Dashboard (Protected) */}
        {isAuthenticated && user?.role === 'user' && (
          <Route path="/user/dashboard" element={<UserDashboard />} />
        )}

        {/* Admin Dashboard (Protected) */}
        {isAuthenticated && user?.role === 'admin' && (
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        )}
      </Routes>

      {/* Always show Footer */}
      <Footer />
    </Router>
  );
}

export default App;
