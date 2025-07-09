// ResumePreview.jsx

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

const ResumePreview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [resume, setResume] = useState('');

  useEffect(() => {
    if (location.state?.resumeData?.aiEnhancedContent) {
      setResume(location.state.resumeData.aiEnhancedContent);
      localStorage.setItem('userResume', location.state.resumeData.aiEnhancedContent);
    } else {
      const stored = localStorage.getItem('userResume');
      if (stored) {
        setResume(stored);
      } else {
        alert('No resume found!');
        navigate('/resume-builder');
      }
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-lg relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full text-sm text-gray-700 transition-all"
        >
          <FiArrowLeft /> Back
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600 mb-6">
          Resume Preview
        </h1>
        <div className="prose bg-gray-50 p-4 rounded-lg max-h-[70vh] overflow-y-auto">
          <div dangerouslySetInnerHTML={{ __html: resume }} />
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
