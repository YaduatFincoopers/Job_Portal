import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from '../src/components/pages/Login';
import Register from '../src/components/pages/Register';
import LandingPage from '../src/components/pages/LandingPage';
import UserDashboard from '../src/components/user/UserDashboard';
import AdminDashboard from '../src/components/admin/AdminDashboard';

import InterviewPreparation from './pages/user/InterviewPreparation';

import MainLayout from '../src/Layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import Profile from '../src/components/admin/Profile';


function App() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>

        {/* Public Routes - No Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Public Route with Layout */}
        <Route path="/" element={
          <MainLayout>
            <LandingPage />
          </MainLayout>
        } />

        {/* User Protected Route */}
        <Route path="/user/dashboard" element={
          
            <MainLayout>
              <UserDashboard />
            </MainLayout>
         
        } />

        {/* Interview Preparation Page (User) */}
        <Route path="/user/interview-preparation" element={
          <MainLayout>
            <InterviewPreparation />
          </MainLayout>
        } />

        {/* Admin Protected Route */}
        <Route path="/admin/AdminDashboard" element={
    
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
         
        } />
        <Route path="/admin/profile" element={
    <AdminLayout>
      <Profile />
    </AdminLayout>
  } />
      

      </Routes>
    </Router>
  );
}

export default App;
