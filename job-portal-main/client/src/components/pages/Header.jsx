import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 h-18  z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
            JP
          </div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            JobPortal <span className="text-purple-600">AI</span>
          </h1>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 text-sm font-medium">
          <Link to="#features" className="hover:text-black transition">Features</Link>
          <Link to="#how" className="hover:text-black transition">How it Works</Link>
          <Link to="#pricing" className="hover:text-black transition">Pricing</Link>
        </nav>

        {/* Right: Login and CTA */}
        <div className="flex items-center gap-6">
          <Link to="/login" className="flex items-center gap-1 text-black font-medium hover:text-purple-600 transition">
            <ArrowRight size={18} /> Login
          </Link>
          <Link
            to="/register"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white gap-2 px-4 py-2 h-10 rounded-md text-sm font-semibold shadow hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
