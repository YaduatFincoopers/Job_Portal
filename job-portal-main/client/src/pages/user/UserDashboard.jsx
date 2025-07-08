import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FiUser, FiBarChart2, FiLogOut, FiFileText, FiBriefcase,
  FiCalendar, FiAward, FiMessageSquare, FiSearch, FiMenu
} from 'react-icons/fi';

const UserDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testScore, setTestScore] = useState(0);
  const [hasResume, setHasResume] = useState(false);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
  const hasGeneratedCoverLetter = userProfile.coverLetterGenerated || false;

  useEffect(() => {
    try {
      const savedScore = localStorage.getItem('mockTestScore');
      const savedResume = localStorage.getItem('userResume');

      if (savedScore) {
        setTestScore(parseInt(savedScore, 10));
      }
      if (savedResume) {
        setHasResume(true);
      }

      if (location.state?.testCompleted) {
        setNotification({
          type: 'success',
          message: `Mock test completed! Your score: ${savedScore || 0}%`,
        });
        navigate('/user/UserDashboard ', { replace: true, state: {} });
        setTimeout(() => setNotification(null), 3000);
      } else if (location.state?.resumeSaved) {
        setNotification({
          type: 'success',
          message: 'Resume saved successfully!',
        });
        navigate('/user/UserDashboard', { replace: true, state: {} });
        setTimeout(() => setNotification(null), 3000);
      }
    } catch (error) {
      console.error('Error in CandidateDashboard useEffect:', error);
      setNotification({
        type: 'error',
        message: 'Failed to load dashboard data. Please try again.',
      });
    }
  }, [location.state, navigate]);

  const user = {
    name: 'Demo User',
    resumesCreated: hasResume ? 1 : 0,
    jobApplications: parseInt(localStorage.getItem('jobApplications') || '0', 10),
    interviewsScheduled: 0,
    testScore,
  };

  const isUnlocked = testScore >= 75;

  const features = [
        {
      title: 'Resume Builder',
      desc: 'Create professional resumes with AI assistance',
      icon: <FiFileText className="text-blue-500 text-xl" />,
      available: true,
      onClick: () => navigate('/user/ResumeBuilder'),
    },
    {
      title: 'Mock Test',
      desc: 'Test your knowledge with practice questions',
      icon: <FiAward className="text-yellow-500 text-xl" />,
      available: true,
      onClick: () => navigate('/user/MockTest'),
    },
    {
      title: 'Cover Letter Generator',
      desc: 'Generate personalized cover letters',
      icon: <FiMessageSquare className={isUnlocked} />,
      available: isUnlocked,
      onClick: () => navigate('/user/CoverLetter'),
    },
    {
      title: 'Jobs',
      desc: 'Browse and apply to job opportunities',
      icon: <FiBriefcase className={isUnlocked ? 'text-green-500 text-xl' : 'text-gray-400 text-xl'} />,
      available: isUnlocked,
      onClick: () => navigate('/user/Jobs'),
    },
    {
      title: 'InterviewPreparation',
      desc: 'Practice with AI-generated interview questions',
      icon: <FiSearch className={isUnlocked ? 'text-yellow-500 text-xl' : 'text-gray-400 text-xl'} />,
      available: isUnlocked,
      onClick: () => navigate('/user/InterviewPreparation'),
    },
    {
      title: 'InterviewSchedule',
      desc: 'Schedule interviews with mentors',
      icon: <FiCalendar className={isUnlocked ? 'text-green-500 text-xl' : 'text-gray-400 text-xl'} />,
      available: isUnlocked,
      onClick: () => navigate('/user/InterviewSchedule'),
    },
  ].filter((feature) => feature.available || feature.title !== 'Resume Builder');

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
  };

  const handleStatus = () => {
    console.log('Viewing status...');
  };

  const handleProfile = () => {
    console.log('Navigating to profile...');
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white border-b px-4 py-3 flex justify-between items-center shadow-sm relative">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
            JP
          </div>
          <h1 className="text-lg font-bold text-gray-800">Candidate Dashboard</h1>
        </div>

        <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-600">
          <button onClick={handleProfile} className="flex items-center gap-1 hover:text-blue-600">
            <FiUser /><span>{user.name}</span>
          </button>
          <button onClick={handleStatus} className="flex items-center gap-1 hover:text-blue-600">
            <FiBarChart2 /><span>Status</span>
          </button>
          <button onClick={handleLogout} className="flex items-center gap-1 hover:text-red-500">
            <FiLogOut /><span>Logout</span>
          </button>
        </div>

        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu className="text-xl text-gray-700" />
        </button>

        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 bg-white border shadow rounded p-3 space-y-2 w-40 z-50 sm:hidden">
            <button onClick={handleProfile} className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
              <FiUser /> Demo User
            </button>
            <button onClick={handleStatus} className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
              <FiBarChart2 /> Status
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 text-gray-700 hover:text-red-500">
              <FiLogOut /> Logout
            </button>
          </div>
        )}
      </nav>

      <div className="p-6">
        {notification && (
          <div
            className={`mb-6 p-4 rounded-lg border-l-4 ${
              notification.type === 'success'
                ? 'bg-green-100 border-green-500 text-green-800'
                : 'bg-red-100 border-red-500 text-red-800'
            }`}
          >
            <p className="font-semibold">{notification.type === 'success' ? 'Success' : 'Error'}:</p>
            <p>{notification.message}</p>
            <button
              onClick={() => setNotification(null)}
              className="mt-2 text-sm underline text-blue-600 hover:text-blue-800"
            >
              Dismiss
            </button>
          </div>
        )}

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome back, {user.name}! 👋
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Complete a mock test with 75% score to unlock job applications and interviews.
        </p>

        {!isUnlocked ? (
          <div className="mb-6 bg-yellow-100 border border-yellow-400 p-4 rounded-md flex items-start space-x-2 text-sm text-yellow-800">
            <FiAward className="mt-1" />
            <div>
              <strong className="font-semibold block">Complete Your Profile</strong>
              {testScore > 0
                ? `You scored ${testScore}%. Need ${75 - testScore}% more to unlock job features.`
                : 'Take a mock test and score 75% or higher to unlock job applications and interview features.'}
            </div>
          </div>
        ) : (
          <div className="mb-6 bg-green-100 border border-green-400 p-4 rounded-md flex items-start space-x-2 text-sm text-green-800">
            <FiAward className="mt-1" />
            <div>
              <strong className="font-semibold block">Congratulations!</strong>
              You've scored {testScore}% and unlocked all job features!
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Stat title="Resumes Created" value={user.resumesCreated} icon={<FiFileText className="text-blue-500" />} />
          <Stat
            title="Job Applications"
            value={user.jobApplications}
            icon={<FiBriefcase className={isUnlocked ? 'text-green-500' : 'text-gray-400'} />}
          />
          <Stat
            title="Interviews Scheduled"
            value={user.interviewsScheduled}
            icon={<FiCalendar className={isUnlocked ? 'text-green-500' : 'text-gray-400'} />}
          />
          <Stat
            title="Best Test Score"
            value={`${user.testScore}%`}
            icon={<FiAward className={isUnlocked ? 'text-green-500' : 'text-yellow-500'} />}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-5 shadow-md border ${
                item.available ? 'bg-white hover:shadow-lg' : 'bg-gray-100'
              } transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className={`font-semibold ${item.available ? 'text-gray-800' : 'text-gray-400'}`}>
                  {item.title}
                </h3>
              </div>
              <p className={`text-sm ${item.available ? 'text-gray-600' : 'text-gray-400'}`}>
                {item.desc}
              </p>
              <div className="flex justify-between items-center mt-4">
                {item.available ? (
                  <>
                    <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded-full">
                      Available
                    </span>
                    <button
                      onClick={item.onClick}
                      className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 text-sm rounded-lg hover:from-blue-500 hover:to-purple-500 transition duration-300 shadow-md"
                    >
                      Start Now
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-red-500 text-xs">Requires 75% test score</span>
                    <span className="bg-gray-200 text-gray-500 text-xs px-3 py-1 rounded-lg">Locked</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Stat = ({ title, value, icon }) => (
  <div className="bg-white rounded-lg p-4 border border-gray-200 flex justify-between items-center shadow-sm">
    <div>
      <p className="text-xs text-gray-500">{title}</p>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
    <div className="text-2xl">{icon}</div>
  </div>
);

export default UserDashboard;