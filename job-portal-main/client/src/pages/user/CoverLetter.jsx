// src/pages/user/CoverLetter.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CoverLetter() {
  const navigate = useNavigate();
  const [template, setTemplate] = useState('template1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    experience: '',
  });
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [generationTime, setGenerationTime] = useState('');

  const templates = {
    template1: 'Classic',
    template2: 'Modern',
    template3: 'Creative',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateCoverLetter = () => {
    const { name, email, phone, jobTitle, company, experience } = formData;
    const currentTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    setGenerationTime(currentTime);

    let letterContent = '';
    switch (template) {
      case 'template1':
        letterContent = `
${name || '[Your Name]'}
${email || '[Your Email]'} | ${phone || '[Your Phone]'}
${currentTime}

[Hiring Manager]
${company || '[Company Name]'}
[Company Address]

Dear Hiring Manager,

I am excited to apply for the ${jobTitle || '[Job Title]'} position at ${company || '[Company Name]'}. With ${experience || '[Your Experience]'} of experience in [your field], I am confident in my ability to contribute to your team.

[Your experience details go here. Highlight key achievements or skills.]

I would welcome the opportunity to discuss how my background aligns with your needs. Thank you for considering my application.

Sincerely,
${name || '[Your Name]'}
`;
        break;
      case 'template2':
        letterContent = `
${name || '[Your Name]'}
${email || '[Your Email]'} | ${phone || '[Your Phone]'}
${currentTime}

${company || '[Company Name]'}
Attn: Hiring Manager
[Company Address]

Dear Hiring Team,

I am eager to apply for the ${jobTitle || '[Job Title]'} role at ${company || '[Company Name]'}. My ${experience || '[Your Experience]'} years in [your field] have equipped me with the skills to excel in this position.

[Detail your relevant skills or projects here.]

I look forward to the possibility of contributing to your success. Please feel free to contact me at your convenience.

Best regards,
${name || '[Your Name]'}
`;
        break;
      case 'template3':
        letterContent = `
${name || '[Your Name]'}
${email || '[Your Email]'} | ${phone || '[Your Phone]'}
${currentTime}

Hiring Manager
${company || '[Company Name]'}
[Company Address]

Hello,

I am thrilled to submit my application for the ${jobTitle || '[Job Title]'} position at ${company || '[Company Name]'}. With ${experience || '[Your Experience]'} years of experience, I bring a passion for [your field] and a track record of [key achievement].

[Add a brief highlight of your accomplishments.]

I’d love to explore how I can add value to your team. Thank you!

Cheers,
${name || '[Your Name]'}
`;
        break;
      default:
        letterContent = '';
    }

    setGeneratedLetter(letterContent);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedLetter], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cover_letter.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSave = () => {
    if (generatedLetter) {
      const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
      userProfile.coverLetter = generatedLetter;
      userProfile.coverLetterGenerated = true;
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      navigate('/candidate-dashboard', { state: { coverLetterSaved: true } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Cover Letter Generator
        </h1>

        {/* Template Selection */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Choose a Template:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(templates).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTemplate(key)}
                className={`p-4 rounded-lg border ${
                  template === key
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                } transition duration-200`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Form Inputs */}
        <div className="mb-6 space-y-4">
          {['name', 'email', 'phone', 'jobTitle', 'company', 'experience'].map((field) => (
            <input
              key={field}
              name={field}
              type="text"
              value={formData[field]}
              onChange={handleInputChange}
              placeholder={
                field
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase())
              }
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
          <button
            onClick={generateCoverLetter}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Generate Cover Letter
          </button>
        </div>

        {/* Generated Letter */}
        {generatedLetter && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Your Cover Letter:
            </h2>
            <pre className="bg-gray-50 p-4 rounded-lg border border-gray-300 overflow-auto max-h-60 text-gray-800 whitespace-pre-wrap">
              {generatedLetter}
            </pre>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleDownload}
                className="flex-1 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Download as TXT
              </button>
              <button
                onClick={handleSave}
                className="flex-1 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Save Cover Letter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoverLetter;
