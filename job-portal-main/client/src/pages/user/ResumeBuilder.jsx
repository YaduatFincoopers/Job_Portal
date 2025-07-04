import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [experienceLevel, setExperienceLevel] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiCalls, setApiCalls] = useState(0);
  const MAX_API_CALLS = 3;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
    languages: '',
    projects: '',
    digitalSkills: '',
    communicationSkills: '',
    drivingLicense: ''
  });

  const templates = [
    {
      id: 'professional',
      name: 'Professional (Ankit Patel Style)',
      description: 'Clean, traditional design similar to Ankit Patel resume',
      preview: 'https://via.placeholder.com/300x400?text=Professional+Template',
      style: 'traditional'
    },
    {
      id: 'modern',
      name: 'Modern',
      description: 'Contemporary design with stylish accents',
      preview: 'https://via.placeholder.com/300x400?text=Modern+Template',
      style: 'contemporary'
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Unique design for creative professionals',
      preview: 'https://via.placeholder.com/300x400?text=Creative+Template',
      style: 'unique'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    setStep(3);
  };

  const generateResumeWithAI = async (userData) => {
    if (process.env.NODE_ENV === 'development') {
      const template = templates.find(t => t.id === selectedTemplate);
      
      if (template.id === 'professional') {
        return generateAnkitPatelTemplate(userData);
      } else if (template.style === 'contemporary') {
        return generateModernTemplate(userData);
      } else {
        return generateCreativeTemplate(userData);
      }
    }

    try {
      const prompt = `Create a professional resume in HTML format based on:
      Name: ${userData.fullName}
      Email: ${userData.email}
      Phone: ${userData.phone}
      Location: ${userData.location}
      Summary: ${userData.summary}
      Experience: ${userData.experience}
      Education: ${userData.education}
      Skills: ${userData.skills}
      Languages: ${userData.languages}
      Projects: ${userData.projects}
      Technical Skills: ${userData.digitalSkills}
      Communication Skills: ${userData.communicationSkills}
      Driving License: ${userData.drivingLicense}
      Template Style: ${selectedTemplate}
      Experience Level: ${experienceLevel}`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
          max_tokens: 2000
        })
      });

      if (!response.ok) throw new Error('API request failed');

      const data = await response.json();
      return data.choices[0]?.message?.content || 'No content generated';
    } catch (err) {
      console.error('AI generation error:', err);
      return generateFallbackTemplate(userData);
    }
  };

  const generateAnkitPatelTemplate = (userData) => {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
      <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">${userData.fullName}</h1>
      
      <div style="margin-bottom: 20px; font-size: 14px;">
        <strong>Phone number:</strong> ${userData.phone}<br>
        <strong>Email address:</strong> ${userData.email}<br>
        <strong>Address:</strong> ${userData.location}
      </div>
      
      <h2 style="font-size: 18px; font-weight: bold; border-bottom: 1px solid #000; margin: 20px 0 10px; padding-bottom: 5px;">ABOUT ME</h2>
      <p style="margin-bottom: 20px;">${userData.summary}</p>
      
      <h2 style="font-size: 18px; font-weight: bold; border-bottom: 1px solid #000; margin: 20px 0 10px; padding-bottom: 5px;">WORK EXPERIENCE</h2>
      <div style="margin-bottom: 20px;">
        ${formatExperience(userData.experience)}
      </div>
      
      <h2 style="font-size: 18px; font-weight: bold; border-bottom: 1px solid #000; margin: 20px 0 10px; padding-bottom: 5px;">EDUCATION AND TRAINING</h2>
      <div style="margin-bottom: 20px;">
        ${formatEducation(userData.education)}
      </div>
      
      <h2 style="font-size: 18px; font-weight: bold; border-bottom: 1px solid #000; margin: 20px 0 10px; padding-bottom: 5px;">SKILLS</h2>
      <div style="margin-bottom: 20px;">
        ${userData.skills || '[Your skills]'}
      </div>
      
      <h2 style="font-size: 18px; font-weight: bold; border-bottom: 1px solid #000; margin: 20px 0 10px; padding-bottom: 5px;">LANGUAGE SKILLS</h2>
      <div style="margin-bottom: 20px;">
        ${userData.languages || '[Your language skills]'}
      </div>
      
      <h2 style="font-size: 18px; font-weight: bold; border-bottom: 1px solid #000; margin: 20px 0 10px; padding-bottom: 5px;">Technical SKILLS</h2>
      <div style="margin-bottom: 20px;">
        ${userData.digitalSkills || '[Your Technical skills]'}
      </div>
      
      <h2 style="font-size: 18px; font-weight: bold; border-bottom: 1px solid #000; margin: 20px 0 10px; padding-bottom: 5px;">PROJECTS</h2>
      <div style="margin-bottom: 20px;">
        ${userData.projects || '[Your projects]'}
      </div>
      
      <h2 style="font-size: 18px; font-weight: bold; border-bottom: 1px solid #000; margin: 20px 0 10px; padding-bottom: 5px;">COMMUNICATION AND INTERPERSONAL SKILLS</h2>
      <div style="margin-bottom: 20px;">
        ${userData.communicationSkills || '[Your communication skills]'}
      </div>
      
      ${userData.drivingLicense ? `
      <h2 style="font-size: 18px; font-weight: bold; border-bottom: 1px solid #000; margin: 20px 0 10px; padding-bottom: 5px;">DRIVING LICENSE</h2>
      <div style="margin-bottom: 20px;">
        ${userData.drivingLicense}
      </div>` : ''}
    </div>
    `;
  };

  const generateModernTemplate = (userData) => {
    return `
    <div class="modern-resume">
      <div class="left-panel">
        <div class="name-title">
          <h1>${userData.fullName}</h1>
          <div class="location">${userData.location}</div>
        </div>
        <div class="contact">
          <h3>CONTACT</h3>
          <div>${userData.email}</div>
          <div>${userData.phone}</div>
        </div>
        <div class="skills">
          <h3>SKILLS</h3>
          <div>${userData.skills}</div>
        </div>
        <div class="languages">
          <h3>LANGUAGES</h3>
          <div>${userData.languages}</div>
        </div>
        <div class="digital-skills">
          <h3>Technical SKILLS</h3>
          <div>${userData.digitalSkills}</div>
        </div>
      </div>
      <div class="right-panel">
        <section class="profile">
          <h2>PROFILE</h2>
          <p>${userData.summary}</p>
        </section>
        <section class="experience">
          <h2>EXPERIENCE</h2>
          <div>${formatExperience(userData.experience)}</div>
        </section>
        <section class="education">
          <h2>EDUCATION</h2>
          <div>${formatEducation(userData.education)}</div>
        </section>
        <section class="projects">
          <h2>PROJECTS</h2>
          <div>${userData.projects}</div>
        </section>
        <section class="communication-skills">
          <h2>COMMUNICATION SKILLS</h2>
          <div>${userData.communicationSkills}</div>
        </section>
      </div>
    </div>
    `;
  };

  const generateCreativeTemplate = (userData) => {
    return `
    <div class="creative-resume">
      <div class="header">
        <h1>${userData.fullName}</h1>
        <div class="contact">
          ${userData.email} | ${userData.phone} | ${userData.location}
        </div>
      </div>
      <div class="content">
        <section class="about">
          <h2>ABOUT ME</h2>
          <p>${userData.summary}</p>
        </section>
        <section class="experience">
          <h2>EXPERIENCE</h2>
          <div>${formatExperience(userData.experience)}</div>
        </section>
        <section class="education">
          <h2>EDUCATION</h2>
          <div>${formatEducation(userData.education)}</div>
        </section>
        <section class="skills">
          <h2>SKILLS</h2>
          <div>${userData.skills}</div>
        </section>
        <section class="languages">
          <h2>LANGUAGES</h2>
          <div>${userData.languages}</div>
        </section>
        <section class="projects">
          <h2>PROJECTS</h2>
          <div>${userData.projects}</div>
        </section>
        <section class="digital-skills">
          <h2>Technical SKILLS</h2>
          <div>${userData.digitalSkills}</div>
        </section>
        <section class="communication-skills">
          <h2>COMMUNICATION SKILLS</h2>
          <div>${userData.communicationSkills}</div>
        </section>
      </div>
    </div>
    `;
  };

  const generateFallbackTemplate = (userData) => {
    return `
    <div class="basic-resume">
      <h1>${userData.fullName}</h1>
      <div>Email: ${userData.email}</div>
      <div>Phone: ${userData.phone}</div>
      <div>Location: ${userData.location}</div>
      
      <h2>Summary</h2>
      <p>${userData.summary}</p>
      
      <h2>Experience</h2>
      <div>${userData.experience}</div>
      
      <h2>Education</h2>
      <div>${userData.education}</div>
      
      <h2>Skills</h2>
      <div>${userData.skills}</div>
      
      <h2>Languages</h2>
      <div>${userData.languages}</div>
      
      <h2>Projects</h2>
      <div>${userData.projects}</div>
      
      <h2>Technical Skills</h2>
      <div>${userData.digitalSkills}</div>
      
      <h2>Communication Skills</h2>
      <div>${userData.communicationSkills}</div>
      
      ${userData.drivingLicense ? `
      <h2>Driving License</h2>
      <div>${userData.drivingLicense}</div>` : ''}
    </div>
    `;
  };

  const formatExperience = (experience) => {
    if (!experience) return '[Your work experience]';
    if (experience.startsWith('<')) return experience;
    
    return experience.split('\n\n').map(job => {
      const lines = job.split('\n');
      if (lines.length < 2) return `<p>${job}</p>`;
      
      const dateLine = lines[0];
      const titleLine = lines[1];
      const bulletPoints = lines.slice(2);
      
      return `
        <div style="margin-bottom: 15px;">
          <div style="font-weight: bold;">${dateLine}</div>
          <div style="font-weight: bold;">${titleLine}</div>
          <ul style="margin-top: 5px; padding-left: 20px;">
            ${bulletPoints.map(point => `<li>${point.replace(/^- /, '')}</li>`).join('')}
          </ul>
        </div>
      `;
    }).join('');
  };

  const formatEducation = (education) => {
    if (!education) return '[Your education]';
    if (education.startsWith('<')) return education;
    
    return education.split('\n\n').map(edu => {
      const lines = edu.split('\n');
      if (lines.length < 2) return `<p>${edu}</p>`;
      
      const dateLine = lines[0];
      const degreeLine = lines[1];
      const details = lines.slice(2);
      
      return `
        <div style="margin-bottom: 15px;">
          <div style="font-weight: bold;">${dateLine}</div>
          <div style="font-weight: bold;">${degreeLine}</div>
          ${details.map(detail => `<div>${detail}</div>`).join('')}
        </div>
      `;
    }).join('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      'fullName', 'email', 'summary', 'experience', 'education', 'skills',
      'languages', 'projects', 'digitalSkills', 'communicationSkills'
    ];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      setError(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    if (apiCalls >= MAX_API_CALLS) {
      setError(`Maximum ${MAX_API_CALLS} resume generations allowed.`);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const aiGeneratedContent = await generateResumeWithAI(formData);

      const enhancedResume = {
        ...formData,
        aiEnhancedContent: aiGeneratedContent || '',
        generatedAt: new Date().toISOString(),
        template: selectedTemplate,
        experienceLevel
      };

      navigate('/resume-preview', {
        state: {
          resumeData: enhancedResume,
          template: selectedTemplate,
          templateData: templates.find(t => t.id === selectedTemplate)
        }
      });
    } catch (err) {
      setError(err.message || 'Error generating resume. Please try again.');
      console.error('Resume generation error:', err);
    } finally {
      setIsLoading(false);
      setApiCalls(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">AI Resume Builder</h1>
          <p className="text-lg text-gray-600">
            {step === 1 ? 'Select your experience level' :
              step === 2 ? 'Choose a template' : 'Fill in your details'}
          </p>
        </div>

        <div className="flex justify-between mb-8 max-w-md mx-auto">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className={`flex-1 text-center ${step >= stepNumber ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center 
                ${step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                {stepNumber}
              </div>
              <p className="mt-2 text-sm">
                {stepNumber === 1 ? 'Experience' : stepNumber === 2 ? 'Template' : 'Details'}
              </p>
            </div>
          ))}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
            <p className="font-semibold">Error:</p>
            <p>{error}</p>
            <button
              onClick={() => setError(null)}
              className="mt-2 text-sm text-red-600 hover:text-red-800"
            >
              Dismiss
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">What's your experience level?</h2>
            <div className="space-y-4">
              <button
                onClick={() => {
                  setExperienceLevel('fresher');
                  setStep(2);
                }}
                className="w-full p-4 border border-gray-300 rounded-lg text-left hover:bg-blue-50 hover:border-blue-500 transition"
              >
                <h3 className="font-medium">Fresher</h3>
                <p className="text-gray-600 text-sm">Just starting my career</p>
              </button>
              <button
                onClick={() => {
                  setExperienceLevel('experienced');
                  setStep(2);
                }}
                className="w-full p-4 border border-gray-300 rounded-lg text-left hover:bg-blue-50 hover:border-blue-500 transition"
              >
                <h3 className="font-medium">Experienced</h3>
                <p className="text-gray-600 text-sm">1+ years of work experience</p>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Choose a Template</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {templates.map(template => (
                <div
                  key={template.id}
                  onClick={() => handleTemplateSelect(template.id)}
                  className={`border rounded-lg overflow-hidden cursor-pointer transition-all
                    ${selectedTemplate === template.id ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-200 hover:border-blue-300'}`}
                >
                  <div className="bg-gray-100 h-64 flex items-center justify-center p-4">
                    <img
                      src={template.preview}
                      alt={template.name}
                      className="object-contain h-full w-full"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/300x400?text=Template+Preview';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{template.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{template.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-6 text-blue-600 hover:text-blue-800 transition flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Experience Selection
            </button>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-xl font-semibold mb-2 md:mb-0">Personal Information</h2>
              <div className="text-sm text-gray-500">
                Selected template: <span className="font-medium">{templates.find(t => t.id === selectedTemplate)?.name}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your location"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary *</label>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write a brief professional summary..."
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Work Experience *</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your work experience (include job titles, companies, and achievements)"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Education *</label>
              <textarea
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="List your education (degrees, institutions, and years)"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Skills *</label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="List your key skills (separated by commas)"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Languages *</label>
              <textarea
                name="languages"
                value={formData.languages}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="List your language skills (e.g., English - C2, Hindi - Native)"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Projects *</label>
              <textarea
                name="projects"
                value={formData.projects}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your projects (include dates, technologies used, and key features)"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Technical Skills *</label>
              <textarea
                name="digitalSkills"
                value={formData.digitalSkills}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="List your Technical skills (e.g., Web Development, Data Analysis)"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Communication Skills *</label>
              <textarea
                name="communicationSkills"
                value={formData.communicationSkills}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your communication skills (e.g., Teamwork, Presentation)"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Driving License</label>
              <input
                type="text"
                name="drivingLicense"
                value={formData.drivingLicense}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your driving license details (if applicable)"
              />
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 mt-8">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Templates
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    Generate with AI
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;