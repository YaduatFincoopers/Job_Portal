import React, { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const CreateNewPassword = () => {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleReset = () => {
    // Validate and redirect
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl flex items-center justify-center font-bold text-sm">
            JP
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-900">
          Create New Password
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Set a strong password for your account.
        </p>

        {/* New Password */}
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type={showNew ? "text" : "password"}
            placeholder="Enter new password"
            className="w-full mt-1 py-2 pl-10 pr-10 border rounded-md focus:ring-2 focus:ring-purple-500"
          />
          <Lock className="absolute left-3 top-9 text-gray-400" size={18} />
          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            className="absolute top-9 right-3 text-gray-400"
          >
            {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="mb-6 relative">
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm password"
            className="w-full mt-1 py-2 pl-10 pr-10 border rounded-md focus:ring-2 focus:ring-purple-500"
          />
          <Lock className="absolute left-3 top-9 text-gray-400" size={18} />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute top-9 right-3 text-gray-400"
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button
          onClick={handleReset}
          className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:opacity-90 transition"
        >
          Reset Password
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Back to{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateNewPassword;
