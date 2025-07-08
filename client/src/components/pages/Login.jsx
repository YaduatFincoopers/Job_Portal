import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@jobportal.com" && password === "admin123") {
    navigate("/admin/AdminDashboard");
      console.log("Admin logged in successfully"); 
    } else if (email === "user@jobportal.com" && password === "user123") {
      navigate("user/UserDashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-15 h-15 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
            JP
          </div>
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Sign in to your JobPortal AI account
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="relative mt-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="off" 
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="off"
              required
              className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <button
              type="button"
              className="absolute right-3 top-2.5 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between text-sm mb-4">
          <label className="flex items-center gap-1">
            <input type="checkbox" className="form-checkbox" />
            Remember me
          </label>
          <Link to="/ForgetPassword" className="text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <button
         type="submit"
          onClick={handleLogin}
          className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md hover:opacity-90 transition"
        >
          Sign In
        </button>

        {/* Register */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/Register" className="text-blue-600 font-medium hover:underline">
            Create one here
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

export default Login;
