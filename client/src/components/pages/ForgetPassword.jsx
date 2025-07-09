import React from "react";
import { Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSendLink = (e) => {
    e.preventDefault();
 
    navigate("/verifyOtp"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl flex items-center justify-center font-bold text-sm">
            JP
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Forgot Password?
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your email and we’ll send you an OTP to reset password.
        </p>

        {/* Email Input */}
        <div className="mb-6 relative">
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 py-2 pl-10 pr-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <Mail className="absolute left-3 top-9 text-gray-400" size={18} />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSendLink}
          className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:opacity-90 transition"
        >
          Send Reset Link
        </button>

        {/* Back to Login */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Remember your password?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
