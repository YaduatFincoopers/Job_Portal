import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const MockTest = () => {
  const navigate = useNavigate();
  const [view, setView] = useState('assigned');
  const [testMeta, setTestMeta] = useState({ name: '', category: '' });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions] = useState([
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
  ]);

  useEffect(() => {
    setSelectedOption(userAnswers[currentQuestion] ?? null);
  }, [currentQuestion]);

  const selectTest = (name, category) => {
    setTestMeta({ name, category });
    setView('instructions');
  };

  const startTest = () => {
    setUserAnswers(Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setView('test');
  };

  const handleOptionSelect = (index) => {
    if (userAnswers[currentQuestion] === null) setSelectedOption(index);
  };

  const handleNext = () => {
    const updated = [...userAnswers];
    if (updated[currentQuestion] === null) {
      updated[currentQuestion] = selectedOption;
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore((prev) => prev + 1);
      }
    }
    setUserAnswers(updated);
    setCurrentQuestion((prev) => prev + 1);
    setSelectedOption(null);
  };

  const handlePrev = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleSubmit = () => {
    const updated = [...userAnswers];
    if (updated[currentQuestion] === null) {
      updated[currentQuestion] = selectedOption;
    }

    let finalScore = 0;
    updated.forEach((ans, i) => {
      if (ans === questions[i].correctAnswer) finalScore += 1;
    });

    const percentage = Math.round((finalScore / questions.length) * 100);
    setUserAnswers(updated);
    setScore(finalScore);
    localStorage.setItem('mockTestScore', percentage);
    setView('result');
  };

  const handleFinish = () => {
    navigate('/user/UserDashboard', {
      state: { testCompleted: true, score },
    });
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => navigate('/user/UserDashboard')} className="flex items-center text-gray-600 hover:underline">
            <IoIosArrowBack className="mr-1" />
            Back to Dashboard
          </button>
        </div>

        {/* Assigned Tests */}
        {view === 'assigned' && (
          <>
            <h1 className="text-2xl font-bold mb-2">Assigned Tests</h1>
            <p className="text-gray-600 mb-6">Select a test to begin</p>

            <div className="bg-gray-50 border rounded-lg p-4 flex justify-between items-center">
              <div>
                <h2 className="text-md font-semibold">test2</h2>
                <p className="text-sm text-gray-500">Category: JavaScript</p>
              </div>
              <button
                onClick={() => selectTest('test2', 'JavaScript')}
                className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm"
              >
                Take Test
              </button>
            </div>
          </>
        )}

        {/* Instructions */}
        {view === 'instructions' && (
          <>
            <h1 className="text-2xl font-bold mb-2">{testMeta.name}</h1>
            <p className="text-gray-600 mb-1">Category: {testMeta.category}</p>
            <p className="text-gray-600 mb-6">Test your knowledge with our practice questions</p>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-gray-800 mb-6">
              <h2 className="font-semibold text-lg mb-3">Test Instructions</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Total Questions: {questions.length}</li>
                <li>Each question has 4 options</li>
                <li>You can navigate between questions</li>
                <li>Click "Submit Test" when you're done</li>
              </ul>
            </div>

            <button
              onClick={startTest}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Start Test
            </button>
          </>
        )}

        {/* Test View */}
        {view === 'test' && (
          <>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>Category: {testMeta.category}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-6">{questions[currentQuestion].question}</h2>

            <div className="space-y-4 mb-8">
              {questions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  disabled={userAnswers[currentQuestion] !== null}
                  className={`w-full text-left px-4 py-3 border rounded-lg transition ${
                    selectedOption === idx ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                  } ${userAnswers[currentQuestion] !== null ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Nav Buttons */}
            <div className="flex justify-between">
              <button
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                className="px-4 py-2 border rounded-md text-sm disabled:opacity-50"
              >
                Previous
              </button>

              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  className="bg-black text-white px-6 py-2 rounded-md text-sm disabled:opacity-50"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                  className="bg-green-600 text-white px-6 py-2 rounded-md text-sm disabled:opacity-50"
                >
                  Submit Test
                </button>
              )}
            </div>
          </>
        )}

        {/* Result */}
        {view === 'result' && (
  <div className="text-center mt-8">
    <h2 className="text-2xl font-bold text-green-600 mb-2">🎉 Congratulations!</h2>
    <p className="text-gray-700 text-lg mb-1">You have completed <strong>{testMeta.name}</strong></p>
    <p className="text-gray-600 mb-1">Category: <strong>{testMeta.category}</strong></p>
    <p className="text-gray-800 font-medium mb-1">You answered <strong>{score}</strong> out of <strong>{questions.length}</strong> questions correctly.</p>
    <p className="text-gray-900 font-semibold text-xl mb-6">
      Score: <span className="text-blue-600">{Math.round((score / questions.length) * 100)}%</span>
    </p>

    <button
      onClick={handleFinish}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Back to Dashboard
    </button>
  </div>
)}

      </div>
    </div>
  );
};

export default MockTest;
