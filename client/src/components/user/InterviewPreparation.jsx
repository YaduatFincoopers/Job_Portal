import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this line
import { FiChevronLeft, FiChevronRight, FiBookmark } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

const InterviewPreparation = () => {
  const navigate = useNavigate(); // ✅ Add this line
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showTips, setShowTips] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Tell me about yourself.",
      tips: "Structure your answer with: 1) Current role, 2) Relevant experience, 3) Key achievements, 4) Why you're interested in this position",
      answer: "I'm currently a Frontend Developer at XYZ with 3 years of experience building responsive web applications. I specialize in React and have led several projects that improved user engagement by 30%. I'm excited about this opportunity because..."
    },
    // Add more questions as needed
  ];

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setShowTips(false);
      setShowAnswer(false);
    }
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setShowTips(false);
    setShowAnswer(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate('/user/UserDashboard')}
          className="flex items-center text-black-600 hover:underline"
        >
          <IoIosArrowBack className="mr-1" />
          Back to Dashboard
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Interview Preparation</h1>
        <p className="text-gray-600 mb-8">Practice common interview questions</p>

        <div className="border-t border-b border-gray-200 py-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{questions[0].text}</h2>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 mb-8">
            Start Practice Session
          </button>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Show Tips</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Sample Answer</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Show Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-600">Behavioral</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => setShowTips(!showTips)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {showTips ? 'Hide Tips' : 'Show Tips'}
                    </button>
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    Use this as a guide, but make your answers personal and authentic.
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => setShowAnswer(!showAnswer)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {showAnswer ? 'Hide Answer' : 'Show Answer'}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {showTips && (
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <h3 className="font-medium text-gray-800 mb-2">Tips:</h3>
              <p className="text-gray-600">{questions[0].tips}</p>
            </div>
          )}

          {showAnswer && (
            <div className="mt-4 p-4 bg-green-50 rounded-md">
              <h3 className="font-medium text-gray-800 mb-2">Sample Answer:</h3>
              <p className="text-gray-600">{questions[0].answer}</p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrevious}
            className="flex items-center text-gray-600 hover:text-gray-800"
            disabled={currentQuestion === 1}
          >
            <FiChevronLeft className="mr-1" /> Previous Question
          </button>

          <div className="text-gray-600">
            Question {currentQuestion} of 10
          </div>

          <button
            onClick={handleNext}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            Next Question <FiChevronRight className="ml-1" />
          </button>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <FiBookmark className="mr-2" /> Save a Lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewPreparation;
