import React, { useState } from "react";
import html2pdf from "html2pdf.js";

const CoverLetter = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    location: "",
    jobTitle: "",
    company: "",
    date: "",
    years: "",
    industry: "",
    skills: "",
    prevCompany: "",
    achievement: "",
    why: "",
  });

  const [show, setShow] = useState(false);

  const onChange = (e) => setInfo({ ...info, [e.target.name]: e.target.value });

  const onGenerate = (e) => {
    e.preventDefault();
    setShow(true);

    // Mark cover letter as generated
    const profile = JSON.parse(localStorage.getItem("userProfile") || "{}");
    localStorage.setItem(
      "userProfile",
      JSON.stringify({ ...profile, coverLetterGenerated: true })
    );
  };

  const onDownload = () =>
    html2pdf().from(document.getElementById("letter")).save(`${info.name}_CoverLetter.pdf`);

  const onCopy = () => {
    navigator.clipboard
      .writeText(document.getElementById("letter").innerText)
      .then(() => alert("Copied!"));
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100 font-serif text-gray-900">
      <div
        className={`max-w-7xl mx-auto gap-8 ${
          show ? "flex flex-col lg:flex-row" : "flex justify-center"
        }`}
      >
        {/* FORM */}
        <form
          onSubmit={onGenerate}
          className={`bg-white p-6 rounded shadow text-sm w-full lg:w-1/2 ${
            !show ? "max-w-xl" : ""
          }`}
        >
          <h2 className="text-xl font-bold mb-4 text-center text-gray-700">Generate Cover Letter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ["Full Name", "name"],
              ["Email", "email"],
              ["Phone", "phone"],
              ["LinkedIn (optional)", "linkedin"],
              ["City, State", "location"],
              ["Date (e.g. July 8, 2025)", "date"],
              ["Job Title You're Applying For", "jobTitle"],
              ["Company Name", "company"],
              ["Years of Experience", "years"],
              ["Industry/Field", "industry"],
              ["Top Skills", "skills"],
              ["Previous Company", "prevCompany"],
              ["Major Achievement", "achievement"],
              ["Why Do You Want This Job?", "why"],
            ].map(([label, name]) => (
              <div key={name} className="flex flex-col">
                <label className="text-sm font-medium mb-1">{label}</label>
                <input
                  name={name}
                  onChange={onChange}
                  required={name !== "linkedin"}
                  className="border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 max-w-full"
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Generate Cover Letter
          </button>
        </form>

        {/* PREVIEW */}
        {show && (
          <div className="w-full lg:w-1/2 flex flex-col">
            <div
              id="letter"
              className="bg-white p-10 rounded shadow text-gray-900"
              style={{ fontFamily: "Georgia, serif", lineHeight: 1.7 }}
            >
              <div className="mb-6">
                <h2 className="text-xl font-bold tracking-wide">{info.name.toUpperCase()}</h2>
                <p className="text-sm text-gray-700">
                  {info.phone} | {info.email}{" "}
                  {info.linkedin && `| ${info.linkedin}`} | {info.location}
                </p>
              </div>

              <p className="text-sm mb-1">{info.date}</p>
              <p className="mb-4">Dear Hiring Manager,</p>

              <p className="mb-4">
                I am writing to apply for the position of <strong>{info.jobTitle}</strong>. With over{" "}
                <strong>{info.years}</strong> years of experience in the{" "}
                <strong>{info.industry}</strong> field, I am confident I would be a valuable asset to your team.
              </p>

              <p className="mb-4">
                My experience has provided me with a strong skill set. At <strong>{info.prevCompany}</strong>, I{" "}
                <strong>{info.achievement}</strong>. I am highly proficient in <strong>{info.skills}</strong>.
              </p>

              <p className="mb-4">
                I am especially excited about this opportunity because {info.why}. I believe my
                background aligns well with the goals of <strong>{info.company}</strong>.
              </p>

              <p className="mb-4">
                Thank you for considering my application. I look forward to the opportunity to contribute to your team.
              </p>

              <p className="mt-8">
                Sincerely, <br />
                <span className="italic">{info.name}</span>
              </p>
            </div>

            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <button
                onClick={onDownload}
                className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                📥 Download PDF
              </button>
              <button
                onClick={onCopy}
                className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                📋 Copy Text
              </button>
              <button
                onClick={() => setShow(false)}
                className="flex-1 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400"
              >
                ✏️ Edit Info
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverLetter;
