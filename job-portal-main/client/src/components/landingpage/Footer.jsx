import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-6 w-full px-3">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 🔵 Brand & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold w-8 h-8 rounded-md flex items-center justify-center text-sm">
              JP
            </div>
            <h2 className="text-xl font-semibold">JobPortal AI</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering job seekers with AI-powered tools to build better resumes, find perfect jobs, and ace interviews with confidence.
          </p>
          <div className="flex items-center gap-1 text-sm text-red-400 mt-4">
            <Heart size={14} />
            <span>Built with love for your success</span>
          </div>
        </div>

        {/* 📘 Features */}
        <div>
          <h3 className="text-white font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>AI Resume Builder</li>
            <li>Cover Letter Generator</li>
            <li>Job Matching</li>
            <li>Interview Prep</li>
            <li>Mentoring</li>
          </ul>
        </div>

        {/* 🏢 Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Success Stories</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* 📞 Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={14} /> support@jobportal.ai
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} /> +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} /> San Francisco, CA
            </li>
          </ul>
        </div>
      </div>

      {/* 📄 Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © 2024 JobPortal AI. Made with <Heart className="inline text-red-400" size={14} /> for job seekers everywhere.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
