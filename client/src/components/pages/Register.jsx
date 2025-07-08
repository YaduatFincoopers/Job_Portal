import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [role, setRole] = useState("candidate");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const newUser = {
      name: fullName,
      email: email,
      password: password,
      role: role,
    };

    console.log("User Created:", newUser);
    alert(`Account created as ${role.toUpperCase()}!\nCheck console for details.`);

    // Clear form
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
        <h2 className="text-center text-2xl font-bold text-gray-900">Create Account</h2>
        <p className="text-center text-sm text-gray-500 mb-6">Join JobPortal AI today</p>

        {/* Role switch */}
        <div>
          <p className="text-sm mb-2 font-medium">I want to register as:</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setRole("candidate")}
              className={`flex items-center h-20 justify-center gap-2 py-2 px-4 border rounded-md transition ${
                role === "candidate"
                  ? "bg-blue-50 text-blue-700 border-blue-500"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              <User size={18} />
              Candidate
            </button>
            <button
              onClick={() => setRole("admin")}
              className={`flex items-center h-20 justify-center gap-2 py-2 px-4 border rounded-md transition ${
                role === "admin"
                  ? "bg-blue-50 text-blue-700 border-blue-500"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              <Settings size={18} />
              Admin
            </button>
          </div>
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full mt-1 py-2 px-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full mt-1 py-2 pl-10 pr-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <Mail className="absolute left-3 top-9 text-gray-400" size={18} />
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            className="w-full mt-1 py-2 pl-10 pr-10 border border-gray-200 rounded-md focus:ring-2 focus:ring-purple-500"
          />
          <Lock className="absolute left-3 top-9 text-gray-400" size={18} />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-9 right-3 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="mb-6 relative">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="w-full mt-1 py-2 pl-10 pr-10 border border-gray-200 rounded-md focus:ring-2 focus:ring-purple-500"
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

        {/* Register Button */}
        <button
          type="button"
          onClick={handleRegister}
          className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:opacity-90 transition"
        >
          Create Account
        </button>

        {/* Already have an account */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Sign in here
          </Link>
        </p>

        {/* Demo Credentials */}
        <div className="bg-gray-100 rounded-md mt-6 p-4 text-sm text-gray-700">
          <p className="font-semibold">Demo Credentials:</p>
          <p>
            <span className="font-medium">Admin:</span> admin@jobportal.com / admin123
          </p>
          <p>
            <span className="font-medium">Candidate:</span> user@jobportal.com / user123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
