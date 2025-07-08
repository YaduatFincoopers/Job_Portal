import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiBriefcase, FiMapPin, FiDollarSign, FiClock, FiEye, FiEdit2, FiUpload, FiSave, FiX } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import { IoIosArrowBack } from 'react-icons/io';

const Jobs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const testScore = parseInt(localStorage.getItem('mockTestScore') || '0', 10);

  // Check if user is unlocked (testScore >= 75)
  useEffect(() => {
    if (testScore < 75) {
      navigate('/candidate-dashboard', { state: { error: 'Please score 75% or higher on the mock test to access jobs.' } });
    }
  }, [testScore, navigate]);

  // Sample job data with enhanced details
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp Inc.',
      type: 'Full-time',
      location: 'San Francisco, CA',
      salary: '$80,000 - $120,000',
      posted: 'June 23, 2025',
      description: 'We are looking for a skilled Frontend Developer to join our team...',
      requirements: ['React', 'TypeScript', 'Tailwind CSS'],
      icon: <FaReact className="text-blue-500 text-2xl" />,
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'Cloud Solutions',
      type: 'Full-time',
      location: 'Bangalore, India',
      salary: '$70,000 - $90,000',
      posted: 'June 24, 2025',
      description: 'We are seeking a Backend Engineer to build scalable server-side applications...',
      requirements: ['Node.js', 'Express', 'MongoDB'],
      icon: <SiNodedotjs className="text-green-500 text-2xl" />,
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'NextGen Tech',
      type: 'Full-time',
      location: 'Mumbai, India',
      salary: '$85,000 - $110,000',
      posted: 'June 22, 2025',
      description: 'Join us as a Full Stack Developer to work on end-to-end web solutions...',
      requirements: ['MERN Stack', 'JavaScript', 'REST API'],
      icon: (
        <div className="flex space-x-1">
          <SiMongodb className="text-green-600" />
          <SiExpress className="text-gray-600" />
          <SiReact className="text-blue-500" />
          <SiNodedotjs className="text-green-500" />
        </div>
      ),
    },
  ];

  // State to track applied jobs, resume, and modal states
  const [appliedJobs, setAppliedJobs] = useState(JSON.parse(localStorage.getItem('appliedJobs') || '{}'));
  const [uploadedResume, setUploadedResume] = useState(localStorage.getItem('userResume') || '');
  const [editMode, setEditMode] = useState(false);
  const [editedResume, setEditedResume] = useState(localStorage.getItem('userResume') || '');
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);

  const handleApply = (jobId) => {
    if (!appliedJobs[jobId]) {
      setSelectedJob(jobs.find(job => job.id === jobId));
      setApplicationModalOpen(true);
    }
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const resumeContent = e.target.result;
        localStorage.setItem('userResume', resumeContent);
        setUploadedResume(resumeContent);
        setEditedResume(resumeContent);
        alert('Resume uploaded successfully!');
      };
      reader.readAsText(file);
    }
  };

  const handleSaveResume = () => {
    localStorage.setItem('userResume', editedResume);
    setUploadedResume(editedResume);
    setEditMode(false);
    alert('Resume saved successfully!');
  };

  const handleConfirmApply = () => {
    if (uploadedResume) {
      setAppliedJobs((prev) => {
        const updated = { ...prev, [selectedJob.id]: true };
        localStorage.setItem('appliedJobs', JSON.stringify(updated));
        const currentApps = localStorage.getItem('jobApplications') || '0';
        localStorage.setItem('jobApplications', (parseInt(currentApps, 10) + 1).toString());
        console.log(`Applying for job ID: ${selectedJob.id}`);
        setApplicationModalOpen(false);
        return updated;
      });
    } else {
      alert('Please upload a resume before applying.');
    }
  };

  const openPreviewModal = () => {
    if (uploadedResume) {
      setApplicationModalOpen(false); // Close the application modal
      setPreviewModalOpen(true); // Open the preview modal
    } else {
      alert('No resume available to preview. Please upload one.');
    }
  };

  const closePreviewModal = () => {
    setPreviewModalOpen(false);
    setApplicationModalOpen(true); // Reopen the application modal
  };

  const closeApplicationModal = () => {
    setApplicationModalOpen(false);
    setEditMode(false);
    setSelectedJob(null);
  };
    const handleFinish = () => {
    navigate('/user/UserDashboard', {
      state: { testCompleted: true, score },
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
         <div className="flex justify-between items-center mb-6">
                          <button onClick={() => navigate('/user/UserDashboard')} className="flex items-center text-black-600 hover:underline">
                            <IoIosArrowBack className="mr-1" />
                            Back to Dashboard
                          </button>
                        </div>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8 animate-pulse">
          Job Opportunities
        </h1>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {job.icon}
                <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
              </div>
              <p className="text-md text-gray-700 mb-3 font-semibold">{job.company}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-800">{job.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-green-500" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiDollarSign className="text-green-500" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="text-green-500" />
                  <span>Posted: {job.posted}</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-3 mb-2">{job.description}</p>
              <div className="text-sm text-gray-600">
                <strong>Requirements:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {job.requirements.map((req, index) => (
                    <span key={index} className="inline-block bg-gray-100 px-2 py-1 rounded-full text-xs">
                      {req}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleApply(job.id)}
                className={`w-full mt-5 px-4 py-2 text-sm rounded-full font-medium transition-all duration-200 ${
                  appliedJobs[job.id]
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                }`}
              >
                {appliedJobs[job.id] ? 'Applied' : 'Apply Now'}
              </button>
            </div>
          ))}
        </div>

        {/* No jobs message (if applicable) */}
        {jobs.length === 0 && (
          <p className="text-center text-gray-600 text-lg mt-10">No jobs available at the moment.</p>
        )}

        {/* Application Modal */}
        {applicationModalOpen && selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Apply for {selectedJob.title}</h2>
                <button onClick={closeApplicationModal} className="text-gray-500 hover:text-gray-700">
                  <FiX size={20} />
                </button>
              </div>
              <p className="text-gray-600 mb-4">Manage your resume before applying.</p>
              {!editMode ? (
                <>
                  <button
                    onClick={openPreviewModal}
                    className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full mb-2 hover:bg-blue-600"
                  >
                    <FiEye /> Preview Resume
                  </button>
                  <button
                    onClick={() => setEditMode(true)}
                    className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-full mb-2 hover:bg-yellow-600"
                  >
                    <FiEdit2 /> Edit Resume
                  </button>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".txt,.pdf"
                        onChange={handleResumeUpload}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <FiUpload className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                  <button
                    onClick={handleConfirmApply}
                    className="w-full bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
                    disabled={!uploadedResume}
                  >
                    Submit Application
                  </button>
                </>
              ) : (
                <>
                  <textarea
                    value={editedResume}
                    onChange={(e) => setEditedResume(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-2 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Edit your resume here..."
                  />
                  <button
                    onClick={handleSaveResume}
                    className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full mb-2 hover:bg-green-600"
                  >
                    <FiSave /> Save Resume
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="w-full bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600"
                  >
                    Cancel Edit
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Preview Modal */}
        {previewModalOpen && uploadedResume && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-[60vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Resume Preview</h2>
                <button onClick={closePreviewModal} className="text-gray-500 hover:text-gray-700">
                  <FiX size={20} />
                </button>
              </div>
              <pre className="text-gray-800 whitespace-pre-wrap break-words">{uploadedResume}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;