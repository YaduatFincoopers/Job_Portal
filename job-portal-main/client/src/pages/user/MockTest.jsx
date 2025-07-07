// src/pages/user/MockTest.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MockTest = () => {
  const navigate = useNavigate();
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: 'What is React?',
      options: [
        'A JavaScript framework',
        'A JavaScript library for building user interfaces',
        'A programming language',
        'A database',
      ],
      correctAnswer: 1,
    },
    {
      question: 'What is JSX?',
      options: [
        'A syntax extension for JavaScript',
        'A template language',
        'A CSS preprocessor',
        'A state management library',
      ],
      correctAnswer: 0,
    },
    {
      question: 'What is the virtual DOM?',
      options: [
        'A lightweight version of the actual DOM',
        'A database concept',
        'A server-side rendering technique',
        'A browser plugin',
      ],
      correctAnswer: 0,
    },
  ];

  const handleStartTest = () => {
    setTestStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setTestCompleted(false);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setCurrentQuestion((prev) => prev + 1);
    setSelectedOption(null);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedOption(null);
    }
  };

  const handleSubmitTest = () => {
    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;
    const finalScore = isCorrect ? score + 1 : score;
    const percentage = Math.round((finalScore / questions.length) * 100);
    localStorage.setItem('mockTestScore', percentage);
    setScore(finalScore);
    setTestCompleted(true);
  };

  const handleFinish = () => {
    navigate('/user/UserDashboard', {
      state: { testCompleted: true, score },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl p-8 shadow-lg border">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Mock Test</h1>

        {!testStarted ? (
          <div className="text-center">
            <p className="text-gray-600 mb-8">
              Prepare yourself for the mock test to unlock job opportunities. Click the button below to begin.
            </p>
            <button
              onClick={handleStartTest}
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Start Test
            </button>
          </div>
        ) : testCompleted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Test Completed!</h2>
            <p className="text-lg text-gray-700 mb-8">
              Your score: {Math.round((score / questions.length) * 100)}%
            </p>
            <button
              onClick={handleFinish}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Return to Dashboard
            </button>
          </div>
        ) : (
          <>
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>

            {/* Question */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {questions[currentQuestion].question}
            </h2>

            {/* Options */}
            <div className="space-y-4 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedOption(index)}
                  className={`w-full flex items-center p-4 border rounded-lg transition duration-200 ${
                    selectedOption === index
                      ? 'bg-blue-100 border-blue-500'
                      : 'bg-white border-gray-300'
                  } hover:bg-blue-50`}
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mr-4">
                    {index + 1}
                  </span>
                  <span className="text-gray-800">{option}</span>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                disabled={currentQuestion === 0}
                onClick={handlePrev}
                className={`px-4 py-2 rounded-lg ${
                  currentQuestion === 0
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                ⬅️ Prev
              </button>

              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  className={`px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition ${
                    selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Next ➡️
                </button>
              ) : (
                <button
                  onClick={handleSubmitTest}
                  disabled={selectedOption === null}
                  className={`px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition ${
                    selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  ✅ Submit Test
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MockTest;
