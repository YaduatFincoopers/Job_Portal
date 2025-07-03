import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaDownload,
  FaUserCircle,
  FaEye,
  FaSearch,
  FaBell,
  FaFileExport,
   FaArrowLeft
} from 'react-icons/fa';

const applicationsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    email: "sarah.johnson@email.com",
    contact: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    experience: "5+ years",
    appliedDate: "2 hours ago",
    skills: ["React", "TypeScript", "Node.js"],
    status: "Active",
    views: 234
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Product Manager",
    company: "StartupXYZ",
    email: "michael.chen@email.com",
    contact: "+1 (555) 987-6543",
    location: "New York, NY",
    experience: "7+ years",
    appliedDate: "5 hours ago",
    skills: ["Product Strategy", "Analytics", "Agile"],
    status: "Draft",
    views: 150
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "UX Designer",
    company: "Design Studio",
    email: "emily.rodriguez@email.com",
    contact: "+1 (555) 765-4321",
    location: "Remote",
    experience: "4+ years",
    appliedDate: "1 day ago",
    skills: ["UI/UX", "Figma", "User Research"],
    status: "Paused",
    views: 190
  },
  {
    id: 4,
    name: "David Park",
    title: "Backend Developer",
    company: "CloudTech",
    email: "david.park@email.com",
    contact: "+1 (555) 222-3333",
    location: "Seattle, WA",
    experience: "3+ years",
    appliedDate: "2 days ago",
    skills: ["Python", "Django", "AWS"],
    status: "Active",
    views: 100
  },
  {
    id: 5,
    name: "Lisa Wang",
    title: "Data Scientist",
    company: "AI Innovations",
    email: "lisa.wang@email.com",
    contact: "+1 (555) 999-8888",
    location: "Boston, MA",
    experience: "6+ years",
    appliedDate: "3 days ago",
    skills: ["Machine Learning", "Python", "R"],
    status: "Active",
    views: 270
  },
];

const JobApplication = () => {
     const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  return (
    <div className="p-4 max-w-6xl mx-auto">
           <div className="flex items-center justify-between mb-6">
                <button
                    onClick={() => navigate("/dashboard")}
                    className="flex items-center text-sm text-gray-600 hover:text-black"
                >
                    <FaArrowLeft className="w-3 h-4 mr-2" />
                    Back to Dashboard
                </button>
            </div>
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 w-full md:w-1/2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search candidates..."
            className="w-full outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <FaBell className="text-gray-600 text-xl cursor-pointer" />
          <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-bold">Job Applications</h1>
          <p className="text-gray-500">Manage job postings and track applications</p>
        </div>

        {/* Export Button */}
        <button className="flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded hover:bg-green-200">
          <FaFileExport /> Export Data
        </button>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-2  md:grid-cols-5 gap-4 mb-6">
        <div className="bg-white shadow  shadow-gray-500 rounded-lg p-4 text-center">
          <h4 className="text-xl font-bold text-blue-600">45</h4>
          <p className="text-gray-500 text-sm">New</p>
        </div>
        <div className="bg-white shadow shadow-gray-500  rounded-lg p-4 text-center">
          <h4 className="text-xl font-bold text-yellow-600">32</h4>
          <p className="text-gray-500 text-sm">Reviewed</p>
        </div>
        <div className="bg-white shadow shadow-gray-500 rounded-lg p-4 text-center">
          <h4 className="text-xl font-bold text-purple-600">18</h4>
          <p className="text-gray-500 text-sm">Interview</p>
        </div>
        <div className="bg-white shadow shadow-gray-500 rounded-lg p-4 text-center">
          <h4 className="text-xl font-bold text-green-600">12</h4>
          <p className="text-gray-500 text-sm">Hired</p>
        </div>
        <div className="bg-white shadow shadow-gray-500 rounded-lg p-4 text-center">
          <h4 className="text-xl font-bold text-red-600">8</h4>
          <p className="text-gray-500 text-sm">Rejected</p>
        </div>
      </div>

      {/* Filter + Search */}
     <div className="flex justify-between items-center gap-4 flex-wrap mb-4">
  
  {/* Search Bar (Left) */}
  <div className="w-full sm:w-1/2">
    <div className="flex ml-20 items-center border border-gray-300 rounded-xl px-3 py-2">
      <FaSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full outline-none text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  </div>
    <div className="w-full sm:w-40">
    <select
      className="border border-gray-300 w-full px-3 py-2 rounded-lg text-sm"
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
    >
      <option>All Status</option>
      <option>New</option>
      <option>Reviewed</option>
      <option>Hired</option>
      <option>Rejected</option>
    </select>
  </div>
      </div>

      {/* Application Cards */}
      {applicationsData
        .filter(app => app.name.toLowerCase().includes(search.toLowerCase()))
        .filter(app => statusFilter === 'All' || app.status === statusFilter)
        .map(app => (
          <div key={app.id} className="bg-white rounded-xl border border-gray-200 p-6 relative mb-6">
            <div className="absolute top-4 right-4">
              <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                app.status === 'New' ? 'bg-blue-100 text-blue-600' :
                app.status === 'Reviewed' ? 'bg-yellow-100 text-yellow-800' :
                app.status === 'Active' ? 'bg-green-100 text-green-700' :
                app.status === 'Draft' ? 'bg-gray-100 text-gray-700' :
                app.status === 'Paused' ? 'bg-orange-100 text-orange-700' :
                ''
              }`}>
                {app.status}
              </span>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{app.name}</h2>
                <p className="text-gray-600">{app.title} at {app.company}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-2">
                  <span className="flex items-center gap-1"><FaEnvelope /> {app.email}</span>
                  <span className="flex items-center gap-1"><FaPhoneAlt /> {app.contact}</span>
                  <span className="flex items-center gap-1"><FaMapMarkerAlt /> {app.location}</span>
                  <span className="flex items-center gap-1"><FaBriefcase /> {app.experience}</span>
                  <span className="flex items-center gap-1"><FaCalendarAlt /> Applied {app.appliedDate}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {app.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 text-sm bg-gray-100 rounded-full text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-4 items-center">
                  <button className="flex items-center gap-1 text-sm border border-gray-400  px-3 py-1 rounded hover:bg-gray-100">
                    <FaEye /> View Profile
                  </button>
                  <button className="flex items-center gap-1 text-sm border  border-gray-400 px-3 py-1 rounded hover:bg-gray-100">
                    <FaDownload /> Resume
                  </button>
                  <button className="flex items-center gap-1 text-sm border  border-gray-400 px-3 py-1 rounded hover:bg-gray-100">
                    <FaEnvelope /> Contact
                  </button>
                  <select className="border  border-gray-400 text-sm px-3 py-1 rounded cursor-pointer">
                    <option>{app.status === 'New' ? 'Hired' : 'Change status'}</option>
                    <option>New</option>
                    <option>Reviewed</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default JobApplication;
