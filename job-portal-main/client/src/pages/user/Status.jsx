import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Status = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('jobApplicationsData')) || [];

    // Demo fallback
    if (stored.length === 0) {
      const dummyData = [
        {
          company: 'Tech Corp',
          jobTitle: 'Frontend Developer',
          date: '2025-07-01',
          status: 'Pending',
        },
        {
          company: 'InnovaSoft',
          jobTitle: 'Backend Engineer',
          date: '2025-06-28',
          status: 'Accepted',
        },
        {
          company: 'DataBridge Inc.',
          jobTitle: 'Data Analyst',
          date: '2025-06-25',
          status: 'Rejected',
        },
      ];
      setApplications(dummyData);
      localStorage.setItem('jobApplicationsData', JSON.stringify(dummyData));
    } else {
      setApplications(stored);
    }
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Accepted':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Pending':
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans space-y-6">
      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate('/user/UserDashboard')}
          className="flex items-center text-sm text-gray-600 hover:text-black"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </button>
        <h1 className="text-2xl font-semibold text-gray-800">Application Status</h1>
      </div>

      {applications.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md text-yellow-700 text-sm">
          You haven't applied to any jobs yet.
        </div>
      ) : (
        <div className="bg-white shadow-sm rounded-lg overflow-hidden border">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-700">Company</th>
                <th className="px-6 py-3 text-left font-medium text-gray-700">Job Title</th>
                <th className="px-6 py-3 text-left font-medium text-gray-700">Date Applied</th>
                <th className="px-6 py-3 text-left font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {applications.map((app, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4">{app.company}</td>
                  <td className="px-6 py-4">{app.jobTitle}</td>
                  <td className="px-6 py-4">{app.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Status;
