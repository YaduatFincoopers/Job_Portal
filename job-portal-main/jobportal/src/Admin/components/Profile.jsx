import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  // State for all form fields
  const [formData, setFormData] = useState({
    fullName: "Admin User",
    email: "admin@jobportal.com",
    phoneNumber: "",
    department: "Administration",
    bio: "",
  });

  // Update fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto lg:px-10 font-sans space-y-6">
      {/* Top Header */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center text-sm text-gray-600 hover:text-black"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </button>
      </div>

      {/* Profile Section */}
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-6">
        <label className="relative cursor-pointer">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full w-24 h-24 flex items-center justify-center text-white text-3xl font-bold">
            🛡️
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
          <p className="text-purple-600 font-medium">{formData.department}</p>
        </div>
            <button
          onClick={() => setIsEditable(!isEditable)}
          className=" text-xl px-2 pb-1 mt-2 ml-150 rounded-md hover:opacity-80 cursor-pointer"
          title={isEditable ? "Save Profile" : "Edit Profile"}
        >
          ✏️
        </button>
      </div>
      

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Users Managed", color: "bg-blue-50", value: 0 },
          { label: "Applications", color: "bg-green-50", value: 0 },
          { label: "Tests Created", color: "bg-purple-50", value: 0 },
          { label: "Interviews", color: "bg-yellow-50", value: 0 },
        ].map((stat, i) => (
          <div key={i} className={`${stat.color} text-center p-4 rounded-md`}>
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
            <label className="block text-sm font-medium">Department</label>
            <input
              name="department"
              className="w-full border border-gray-200 p-2 rounded-md mt-2"
              value={formData.department}
              onChange={handleChange}
              readOnly={!isEditable}
            />
          </div>
        </div>
      </div>

      {/* Bio */}
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
              <input
                type="password"
                className="w-med border p-2 mt-2 rounded-md"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">New Password</label>
              <input
                type="password"
                className="w-med border p-2 mt-2 rounded-md"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Confirm New Password</label>
              <input
                type="password"
                className="w-med border p-2 mt-2 rounded-md"
                placeholder="Confirm new password"
              />
            </div>

            <div className="flex gap-3">
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
                Update Password
              </button>
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

      {/* Admin Permissions */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-semibold">Admin Permissions</h3>
        <div className="flex flex-wrap gap-3">
          {["User Management", "Job Management", "Test Management", "Analytics"].map(
            (perm, i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-md text-sm border border-green-200"
              >
                🛡️ {perm}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
