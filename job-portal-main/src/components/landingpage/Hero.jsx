// import { Sparkles, User, FileText } from "lucide-react";
// import { FileText, MessageSquareText, Search,Users, Gamepad2, UserCheck } from "lucide-react";

// export default function Hero() {
//   return (

//     <>
//      <section className="w-full h-full bg-gradient-to-br from-blue-100 to-white pt-20 pb-10">
      
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 sm:px-8">
        
//         {/* ✅ Left Content */}
//         <div className="space-y-8 text-left">
//           <div className="text-sm text-blue-600 font-medium flex items-center gap-1 py-5">
//             <Sparkles size={16} className="text-blue-500" />
//             AI-Powered Career Support
//           </div>

//           <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900  leading-tight ">
//             Your Dream Job <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//               Starts Here
//             </span>
//           </h1>

//           <p className="text-gray-600 text-md max-w-xl">
//             From resume building to interview prep, we’re here to guide freshers and experienced professionals toward their perfect career match. Let AI be your personal career coach! ❤️
//           </p>

//           {/* 🔵 Buttons */}
//           <div className="flex flex-wrap items-center gap-4">
//             <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md shadow-md font-medium">
//               Start Building Resume
//             </button>
//             <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-800 font-medium hover:bg-gray-100">
//               Watch Demo
//             </button>
//           </div>

//           {/* 🟣 Stats */}
//           <div className="flex gap-6 pt-4 text-sm text-gray-600 font-medium">
//             <div className="flex items-center gap-1">
//               <User size={16} className="text-blue-500" />
//               10,000+ Users
//             </div>
//             <div className="flex items-center gap-1">
//               <FileText size={16} className="text-purple-500" />
//               50,000+ Resumes Created
//             </div>
//           </div>
//         </div>

//         {/* ✅ Right Mock Card */}
//         <div className="relative px-4 sm:px-0">
//           <div className="bg-white rounded-xl shadow-2xl p-6 space-y-3 w-full max-w-md">
//             <div className="h-4 w-2/3 bg-gradient-to-r from-blue-400 to-purple-300 rounded"></div>
//             <div className="h-4 w-full bg-gray-200 rounded"></div>
//             <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
//             <div className="h-4 w-full bg-blue-100 rounded"></div>
//             <div className="h-4 w-2/3 bg-blue-100 rounded"></div>
//           </div>

//           {/* 🟢 AI Tag */}
//           <div className="absolute top-2 right-2 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-semibold px-10 py-2 rounded-full shadow">
//             AI-Generated ✨
//           </div>

//           {/* 🟣 Resume Score */}
//           <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-md">
//             Resume Score <br />
//             <span className="text-2xl font-bold">92%</span>
//           </div>
//         </div>

//       </div>
//     </section>

//     // feature section

//     <section className="w-full bg-white py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

//         {/* 🔵 Heading */}
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//           Everything You Need for Your{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//             Dream Career
//           </span>
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
//           From complete beginners to experienced professionals, our AI-powered
//           platform guides you through every step of your job search journey.
//         </p>

//         {/* 🔶 Features Grid */}
//         <div className="grid gap-8 md:grid-cols-3">
//           {/* Feature 1 */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//             <div className="flex justify-center mb-4">
//               <div className="bg-blue-600 text-white p-4 rounded-lg">
//                 <FileText size={32} />
//               </div>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               AI Resume Builder
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Create professional resumes with AI-powered summaries and multiple templates.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//             <div className="flex justify-center mb-4">
//               <div className="bg-purple-600 text-white p-4 rounded-lg">
//                 <MessageSquareText size={32} />
//               </div>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               Smart Cover Letters
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Generate personalized cover letters for every job application.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//             <div className="flex justify-center mb-4">
//               <div className="bg-green-600 text-white p-4 rounded-lg">
//                 <Search size={32} />
//               </div>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               Job Matching
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Find jobs that match your skills, experience, and preferences.
//             </p>
//           </div>

//            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//             <div className="flex justify-center mb-4">
//               <div className="bg-green-600 text-white p-4 rounded-lg">
//                 <UserCheck size={32} />
//               </div>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               Interview Prep
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Practice with AI-generated questions tailored to your field
//             </p>
//           </div>

//              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//             <div className="flex justify-center mb-4">
//               <div className="bg-green-600 text-white p-4 rounded-lg">
//                 <Users size={32} />
//               </div>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//              1-on-1 Mentoring
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Book sessions with industry experts for personalized guidance
//             </p>
//           </div>

//            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//             <div className="flex justify-center mb-4">
//               <div className="bg-green-600 text-white p-4 rounded-lg">
//                 <Gamepad2 size={32} />
//               </div>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//              Gamified Progress
//             </h3>
//             <p className="text-gray-600 text-sm">
//              Track your job search progress with achievements and leaderboards
//             </p>
//           </div>


//         </div>
//       </div>
//     </section></>
   

//   );
// }


import {
  Sparkles,
  User,
  FileText,
  MessageSquareText,
  Search,
  Users,
  Gamepad2,
  UserCheck,
  UserPlus,
  CheckCircle,
  Heart,
  Star,
} from "lucide-react";

export default function Hero() {
  const steps = [
    {
      id: "01",
      title: "Create Your Profile",
      description:
        "Sign up and tell us about your background, skills, and career goals",
      icon: <UserPlus size={28} />,
      color: "bg-blue-600",
      text: "text-blue-600",
    },
    {
      id: "02",
      title: "Build Your Resume",
      description:
        "Use our AI-powered resume builder to create a professional resume in minutes",
      icon: <FileText size={28} />,
      color: "bg-purple-600",
      text: "text-purple-600",
    },
    {
      id: "03",
      title: "Find Perfect Jobs",
      description:
        "Browse jobs matched to your profile and apply with your AI-generated materials",
      icon: <Search size={28} />,
      color: "bg-green-600",
      text: "text-green-600",
    },
    {
      id: "04",
      title: "Land Your Dream Job",
      description:
        "Prepare for interviews with our AI coach and get hired with confidence",
      icon: <CheckCircle size={28} />,
      color: "bg-orange-500",
      text: "text-orange-500",
    },
  ];

  return (
    <>
      {/* 🔷 Hero Section */}
      <section className="w-full h-full bg-gradient-to-br from-blue-100 to-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 sm:px-8">
          {/* Left */}
          <div className="space-y-8 text-left">
            <div className="text-sm text-blue-600 font-medium flex items-center gap-1 py-5">
              <Sparkles size={16} className="text-blue-500" />
              AI-Powered Career Support
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Your Dream Job <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Starts Here
              </span>
            </h1>
            <p className="text-gray-600 text-md max-w-xl">
              From resume building to interview prep, we’re here to guide freshers and experienced professionals toward their perfect career match.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md shadow-md font-medium">
                Start Building Resume
              </button>
              <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-800 font-medium hover:bg-gray-100">
                Watch Demo
              </button>
            </div>
            <div className="flex gap-6 pt-4 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-1">
                <User size={16} className="text-blue-500" />
                10,000+ Users
              </div>
              <div className="flex items-center gap-1">
                <FileText size={16} className="text-purple-500" />
                50,000+ Resumes Created
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative px-4 sm:px-0">
            <div className="bg-white rounded-xl shadow-2xl p-6 space-y-3 w-full max-w-md">
              <div className="h-4 w-2/3 bg-gradient-to-r from-blue-400 to-purple-300 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-blue-100 rounded"></div>
              <div className="h-4 w-2/3 bg-blue-100 rounded"></div>
            </div>
            <div className="absolute top-2 right-2 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-semibold px-10 py-2 rounded-full shadow">
              AI-Generated ✨
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-md">
              Resume Score <br />
              <span className="text-2xl font-bold">92%</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🟪 Features Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Dream Career
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
            From complete beginners to experienced professionals, our AI-powered
            platform guides you through every step of your job search journey.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: <FileText size={32} />, title: "AI Resume Builder", desc: "Create professional resumes with AI-powered summaries and multiple templates.", color: "bg-blue-600" },
              { icon: <MessageSquareText size={32} />, title: "Smart Cover Letters", desc: "Generate personalized cover letters for every job application.", color: "bg-purple-600" },
              { icon: <Search size={32} />, title: "Job Matching", desc: "Find jobs that match your skills, experience, and preferences.", color: "bg-green-600" },
              { icon: <UserCheck size={32} />, title: "Interview Prep", desc: "Practice with AI-generated questions tailored to your field", color: "bg-green-600" },
              { icon: <Users size={32} />, title: "1-on-1 Mentoring", desc: "Book sessions with industry experts for personalized guidance", color: "bg-green-600" },
              { icon: <Gamepad2 size={32} />, title: "Gamified Progress", desc: "Track your job search progress with achievements and leaderboards", color: "bg-green-600" },
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex justify-center mb-4">
                  <div className={`${f.color} text-white p-4 rounded-lg`}>
                    {f.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟦 How It Works */}
      <section className="bg-[#f9fafe] py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Simple steps to transform your job search from overwhelming to organized
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${step.color} text-white shadow-md mb-4`}>
                  {step.icon}
                </div>
                <h4 className={`text-lg font-semibold ${step.text} mb-1`}>{step.id}</h4>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟣 Call To Action */}
      <section className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="flex justify-center items-center gap-2 text-sm font-medium mb-4">
            <Heart size={16} className="text-white" />
            <span>Built with love for job seekers</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Transform Your <br /> Career Journey?
          </h2>
          <p className="text-lg sm:text-xl font-light mb-10 max-w-2xl mx-auto">
            Join thousands of job seekers who have found their dream jobs with our AI-powered platform.
            Your success story starts today! ✨
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold shadow hover:bg-gray-100 transition">
              Start Building Resume →
            </button>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-md text-lg font-semibold shadow hover:bg-gray-100 transition">
              Explore Features
            </button>
          </div>
          <div className="text-sm mt-10 flex flex-wrap justify-center items-center gap-4 text-white/90">
            <span>🥰 No credit card required</span>
            <span>•</span>
            <span>🚀 Start for free</span>
            <span>•</span>
            <span>
              <Star size={14} className="inline mr-1 text-yellow-300" />
              Trusted by 10,000+ users
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
