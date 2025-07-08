import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import Footer from './components/landingpage/Footer';
import Hero from './components/landingpage/Hero';

import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import MockTest from './pages/user/MockTest';
import ResumeBuilder from './pages/user/ResumeBuilder';
import InterviewPreparation from './pages/user/InterviewPreparation';
import CoverLetter from './pages/user/CoverLetter';
import InterviewSchedule from './pages/user/InterviewSchedule';
import ResumePreview from './pages/user/ResumePreview';
import Jobs from './pages/user/Jobs';
import Profile from './pages/admin/Profile';
import Managepopup from './pages/admin/Managepopup';
import TestGenerator from './pages/admin/TestGenerator';

import { useEffect } from 'react';

function AppContent() {
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Add all routes here where you don't want Navbar & Footer
  const noHeaderFooterRoutes = [
    '/user/MockTest',
    '/user/ResumePreview',
    '/user/ResumeBuilder',
    '/user/Jobs',
    '/user/CoverLetter',
    '/user/InterviewPreparation',
    '/user/InterviewSchedule',
    '/user/UserDashboard'
    // add more if needed
  ];

  const hideLayout = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/UserDashboard" element={<UserDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/user/MockTest" element={<MockTest />} />
        <Route path="/user/ResumeBuilder" element={<ResumeBuilder />} />
        <Route path="/user/InterviewPreparation" element={<InterviewPreparation />} />
        <Route path="/user/CoverLetter" element={<CoverLetter />} />
        <Route path="/user/InterviewSchedule" element={<InterviewSchedule />} />
        <Route path="/user/ResumePreview" element={<ResumePreview />} />
        <Route path="/user/Jobs" element={<Jobs />} />
        <Route path="/admin/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/admin/Navbar" element={<Navbar />} />
        <Route path="/admin/Profile" element={<Profile />} />
        <Route path="/admin/Managepopup" element={<Managepopup />} />
        <Route path="/admin/TestGenerator" element={<TestGenerator />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
