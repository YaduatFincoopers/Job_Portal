import React, { useState } from "react";
import html2pdf from "html2pdf.js";

const CoverLetter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: "",
    experienceYears: "",
    skillset: "",
    interestReason: "",
    previousCompany: "",
    achievement: "",
  });

  const [generated, setGenerated] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    setGenerated(true);
  };

  const handleDownload = () => {
    const element = document.getElementById("cover-letter");
    html2pdf().from(element).save(`${formData.name}_CoverLetter.pdf`);
  };

  const handleCopy = () => {
    const text = document.getElementById("cover-letter").innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("Cover letter copied to clipboard!");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">💼 Cover Letter Generator</h1>
          <p className="text-gray-600 mt-2">AI-style auto-filled professional letter</p>
        </header>

        {/* Form */}
        {!generated && (
          <form
            onSubmit={handleGenerate}
            className="grid grid-cols-1 gap-4 bg-white border border-gray-400 rounded-lg p-6 mb-10 shadow"
          >
            <div className="flex flex-col gap-1 ">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <label>Mobile Number</label>
              <input type="text" name="phone" placeholder="Phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <label>Job Title</label>
              <input type="text" name="jobTitle" placeholder="Job Title" required value={formData.jobTitle} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <label>Company Name</label>
              <input type="text" name="company" placeholder="Company Name" required value={formData.company} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <label>Experience</label>
              <input type="text" name="experienceYears" placeholder="Years of Experience" value={formData.experienceYears} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <label>Skills</label>
              <input type="text" name="skillset" placeholder="Key Skills" value={formData.skillset} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <label>Previous Company</label>
              <input type="text" name="previousCompany" placeholder="Previous Company" value={formData.previousCompany} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <label>Achievement</label>
              <input type="text" name="achievement" placeholder="Impressive Achievement" value={formData.achievement} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <label>Why This Company?</label>
              <input type="text" name="interestReason" placeholder="Why this company?" value={formData.interestReason} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="mt-4 bg-gradient-to-r from-blue-600 to-green-500 text-white py-2 px-6 rounded-lg hover:brightness-110 transition">
              Generate Cover Letter
            </button>
          </form>
        )}

        {/* Generated Cover Letter */}
        {generated && (
          <>
            <section id="cover-letter" className="bg-white border border-gray-300 rounded-lg p-6 shadow text-gray-800">
              <p className="mb-6">Dear Hiring Manager,</p>

              <p className="mb-4">
                I am writing to express my keen interest in the <strong>{formData.jobTitle}</strong> role at{" "}
                <strong>{formData.company}</strong>. With a strong background in <strong>{formData.skillset}</strong> and over{" "}
                <strong>{formData.experienceYears}</strong> years of experience, I am confident in my ability to contribute meaningfully to your team.
              </p>

              <p className="mb-4">
                During my tenure at <strong>{formData.previousCompany}</strong>, I was involved in several projects that required deep focus on{" "}
                {formData.skillset}. One of my most notable accomplishments was <strong>{formData.achievement}</strong>, which helped the company improve
                performance and team output.
              </p>

              <p className="mb-4">
                I am particularly drawn to <strong>{formData.company}</strong> because {formData.interestReason}. I admire your work and would love the
                opportunity to grow within your organization and contribute to your mission.
              </p>

              <p className="mb-4">
                I would be grateful for an opportunity to further discuss how I can be an asset to your team. Thank you for considering my application.
              </p>

              <p className="mb-6">
                Best regards,<br />
                <strong>{formData.name}</strong><br />
                {formData.email}<br />
                {formData.phone}
              </p>
            </section>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <button
                onClick={handleDownload}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                📥 Download PDF
              </button>
              <button
                onClick={handleCopy}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
              >
                📋 Copy to Clipboard
              </button>
              <button
                className="bg-gray-200 text-gray-800 border border-gray-400 py-2 px-4 rounded hover:bg-gray-300"
                onClick={() => setGenerated(false)}
              >
                ✏️ Edit Inputs
              </button>
            </div>
          </>
        )}

        {/* Footer */}
        {/* <footer className="text-center text-sm text-gray-500 mt-12">
          <p>
            Powered by <span className="text-blue-600 font-semibold">React</span> & Tailwind CSS | Simulated AI Output
          </p>
        </footer> */}
      </div>
    </div>
  );
};

export default CoverLetter;
