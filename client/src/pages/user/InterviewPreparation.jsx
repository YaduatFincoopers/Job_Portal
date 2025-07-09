import React, { useState } from 'react';

// Font and color variables for pixel-perfect match
const fontFamily = 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif';
const modules = [
  {
    key: 'common',
    title: 'Common Questions',
    description: 'Practice the most frequently asked interview questions.',
    icon: '💬',
    checklist: [
      'Tell me about yourself.',
      'Why do you want this job?',
      'What are your strengths and weaknesses?',
      'Where do you see yourself in 5 years?',
      'Why should we hire you?'
    ]
  },
  {
    key: 'behavioral',
    title: 'Behavioral Tips',
    description: 'Master behavioral interviews with proven strategies.',
    icon: '🧠',
    checklist: [
      'Use the STAR method (Situation, Task, Action, Result).',
      'Be specific and concise in your answers.',
      'Practice with real-life scenarios.',
      'Showcase teamwork and leadership skills.'
    ]
  },
  {
    key: 'technical',
    title: 'Technical Practice',
    description: 'Sharpen your technical skills with coding challenges.',
    icon: '💻',
    checklist: [
      'Practice coding problems on LeetCode, HackerRank, etc.',
      'Review data structures and algorithms.',
      'Understand system design basics.',
      'Be ready to explain your code and thought process.'
    ]
  },
  {
    key: 'resume',
    title: 'Resume & Cover Letter',
    description: 'Perfect your resume and cover letter for applications.',
    icon: '📄',
    checklist: [
      'Tailor your resume to the job description.',
      'Highlight achievements with metrics.',
      'Keep formatting clean and professional.',
      'Write a concise, targeted cover letter.'
    ]
  },
  {
    key: 'mock',
    title: 'Mock Interviews',
    description: 'Simulate real interviews and get feedback.',
    icon: '🎤',
    checklist: [
      'Schedule a mock interview with a mentor or peer.',
      'Simulate real interview conditions.',
      'Request feedback and improve.',
      'Repeat until confident.'
    ]
  }
];

export default function InterviewPreparation() {
  const [progress, setProgress] = useState(0);
  const [activeModule, setActiveModule] = useState(null);
  const [checked, setChecked] = useState({});

  // Calculate progress
  React.useEffect(() => {
    const total = modules.reduce((acc, m) => acc + m.checklist.length, 0);
    const done = Object.values(checked).filter(Boolean).length;
    setProgress(Math.round((done / total) * 100));
  }, [checked]);

  const handleCheck = (moduleKey, idx) => {
    setChecked((prev) => ({ ...prev, [`${moduleKey}-${idx}`]: !prev[`${moduleKey}-${idx}`] }));
  };


  return (
    <div className="min-h-screen bg-[#fcfbf8] flex flex-col items-center" style={{ fontFamily }}>
      {/* Hero Section */}
      <div className="w-full flex justify-center bg-gradient-to-br from-[#f7f4ed] to-[#e5e7eb] py-12 px-4 border-b border-[#ede8df]">
        <div className="max-w-3xl w-full flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold text-[#1b1b1b] mb-4 tracking-tight">Interview Preparation</h1>
            <p className="text-lg text-[#374151] mb-6">Personalized resources, practice, and tips to help you land your dream job.</p>
            <div className="flex gap-3 mt-2">
              <button className="bg-[#1b1b1b] text-white px-7 py-2.5 rounded-full font-semibold shadow hover:bg-[#383838] transition text-base">Start Preparation</button>
              <button className="bg-[#f7f4ed] text-[#374151] border border-[#ede8df] px-7 py-2.5 rounded-full font-semibold hover:bg-[#ede8df] transition text-base">View Resources</button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/interview-6332342-5229292.png" alt="Interview" className="w-56 h-56 object-contain" />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full flex justify-center bg-transparent mt-8">
        <div className="max-w-3xl w-full px-4">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-base font-semibold text-[#1b1b1b]">Progress</span>
            <span className="text-base text-[#6b7280]">{progress}%</span>
          </div>
          <div className="w-full bg-[#ede8df] rounded-full h-4">
            <div
              className="bg-[#4b73ff] h-4 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-10">
        {modules.map((mod) => (
          <div
            key={mod.key}
            className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-start hover:shadow-2xl transition cursor-pointer border border-[#ede8df] hover:border-[#4b73ff]"
            onClick={() => setActiveModule(mod.key)}
          >
            <div className="text-4xl mb-3">{mod.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-[#1b1b1b]">{mod.title}</h3>
            <p className="text-[#6b7280] mb-4 text-base">{mod.description}</p>
            <button className="mt-auto text-[#4b73ff] font-semibold hover:underline text-base">View Details</button>
          </div>
        ))}
      </div>

      {/* Module Details Modal */}
      {activeModule && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md relative animate-fadeIn border border-[#ede8df]">
            <button
              className="absolute top-4 right-4 text-[#6b7280] hover:text-[#4b73ff] text-3xl font-bold"
              onClick={() => setActiveModule(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="text-5xl mb-4">{modules.find((m) => m.key === activeModule).icon}</div>
            <h2 className="text-2xl font-bold mb-6 text-[#1b1b1b]">{modules.find((m) => m.key === activeModule).title}</h2>
            <ul className="mb-6">
              {modules.find((m) => m.key === activeModule).checklist.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 mb-3">
                  <input
                    type="checkbox"
                    checked={!!checked[`${activeModule}-${idx}`]}
                    onChange={() => handleCheck(activeModule, idx)}
                    className="accent-[#4b73ff] w-5 h-5 rounded-full border border-[#ede8df]"
                  />
                  <span className={checked[`${activeModule}-${idx}`] ? 'line-through text-[#bdbdbd]' : 'text-[#374151]'}>{item}</span>
                </li>
              ))}
            </ul>
            <button
              className="w-full bg-[#4b73ff] text-white py-2.5 rounded-full font-semibold hover:bg-[#3556b0] transition text-base"
              onClick={() => setActiveModule(null)}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full flex justify-center mt-16 mb-4">
        <div className="text-xs text-[#bdbdbd]">Inspired by Lovable.dev &copy; {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}
