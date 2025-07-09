import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [isEditable, setIsEditable] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  // Load from localStorage or default values
  const [formData, setFormData] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("userProfile"));
    return (
      stored || {
        fullName: "John Doe",
        email: "johndoe@example.com",
        phoneNumber: "",
        field: "Frontend Developer",
        bio: "",
      }
    );
  });

  // Save to localStorage when edited
  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto lg:px-10 font-sans space-y-6">
      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate("/user/UserDashboard")}
          className="flex items-center text-sm text-gray-600 hover:text-black"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </button>
      </div>

      {/* User Header */}
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-6">
        <label className="relative cursor-pointer">
          <div className="bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-full w-24 h-24 flex items-center justify-center text-white text-3xl font-bold">
            👤
          </div>
          {isEditable && (
            <input
              type="file"
              accept="image/*"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          )}
        </label>

        <div>
          <h2 className="text-2xl font-semibold">{formData.fullName}</h2>
          <p className="text-gray-600">{formData.email}</p>
          <p className="text-indigo-600 font-medium">{formData.field}</p>
        </div>

        <button
          onClick={() => setIsEditable(!isEditable)}
          className="text-xl px-2 pb-1 mt-2 ml-auto rounded-md hover:opacity-80 cursor-pointer"
          title={isEditable ? "Save Profile" : "Edit Profile"}
        >
          ✏️
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Resumes Created", value: localStorage.getItem("userResume") ? 1 : 0 },
          { label: "Test Score", value: `${localStorage.getItem("mockTestScore") || 0}%` },
          { label: "Job Applications", value: localStorage.getItem("jobApplications") || 0 },
          { label: "Interviews", value: 0 },
        ].map((stat, i) => (
          <div key={i} className="bg-blue-50 text-center p-4 rounded-md">
            <h3 className="text-2xl font-semibold text-indigo-700">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Profile Info */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-semibold">Profile Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              name="fullName"
              className="w-full border border-gray-200 p-2 rounded-md mt-2"
              value={formData.fullName}
              onChange={handleChange}
              readOnly={!isEditable}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              className="w-full border border-gray-200 p-2 rounded-md mt-2"
              value={formData.email}
              onChange={handleChange}
              readOnly={!isEditable}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              name="phoneNumber"
              className="w-full border border-gray-200 p-2 rounded-md mt-2"
              value={formData.phoneNumber}
              onChange={handleChange}
              readOnly={!isEditable}
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Field</label>
            <input
              name="field"
              className="w-full border border-gray-200 p-2 rounded-md mt-2"
              value={formData.field}
              onChange={handleChange}
              readOnly={!isEditable}
            />
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <label className="block text-lg font-semibold mb-2">Bio</label>
        <textarea
          name="bio"
          className="w-full border p-3 rounded-md h-28 resize-none"
          placeholder="Tell us about yourself..."
          value={formData.bio}
          onChange={handleChange}
          readOnly={!isEditable}
        />
      </div>

      {/* Security Settings */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Security Settings</h3>
          {!showPasswordForm && (
            <button
              onClick={() => setShowPasswordForm(true)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
            >
              Change Password
            </button>
          )}
        </div>

        {showPasswordForm && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Current Password</label>
              <input type="password" className="w-full border p-2 mt-2 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">New Password</label>
              <input type="password" className="w-full border p-2 mt-2 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">Confirm New Password</label>
              <input type="password" className="w-full border p-2 mt-2 rounded-md" />
            </div>
            <div className="flex gap-3">
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm">Update Password</button>
              <button
                onClick={() => setShowPasswordForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* User Features */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-semibold">Your Permissions</h3>
        <div className="flex flex-wrap gap-3">
          {["Resume Builder", "Mock Test", "Jobs", "Interview Prep"].map((perm, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-md text-sm border border-indigo-200"
            >
              ✅ {perm}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
