import { useState } from "react";
import { ArrowLeft, Plus, Wand2, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TestGenerator = () => {
    const [activeTab, setActiveTab] = useState("create");
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [showQuestionForm, setShowQuestionForm] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [questionData, setQuestionData] = useState({
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: "",
    });

    const navigate = useNavigate();

    const categories = ["JavaScript", "React.js", "Node.js", "Java", "Python", "General"];
    const difficultyLevels = ["Easy", "Medium", "Hard"];

    return (
        <div className="min-h-screen bg-gray-50 lg:px-60 md:px-10 py-6">
            {/* Back Button */}
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={() => navigate("/dashboard")}
                    className="flex items-center text-sm text-gray-600 hover:text-black"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Dashboard
                </button>
                <h2 className="text-xl font-bold text-gray-900">Test Generator</h2>
            </div>

            {/* Tabs */}
            <div className="inline-flex items-center text-sm gap-4 mb-6">
                {["Create Test", "Manage Tests", "Assign Tests"].map((tab, i) => (
                    <button
                        key={i}
                        className={`px-4 py-2 rounded-md ${activeTab === tab.toLowerCase().replace(" ", "")
                                ? "bg-gray-900 text-white"
                                : "bg-white text-gray-700 border"
                            }`}
                        onClick={() => setActiveTab(tab.toLowerCase().replace(" ", ""))}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Create Test Tab */}
            {activeTab === "createtest" && (
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Test Information</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium">Test Title</label>
                            <input
                                type="text"
                                placeholder="Enter test title"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                            />
                        </div>

                        {/* ✅ Category */}
                        <div>
                            <label className="block text-sm font-medium">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                            >
                                <option value="" disabled hidden>
                                    Select Category
                                </option>
                                {categories.map((cat, idx) => (
                                    <option key={idx} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* ✅ Difficulty */}
                        <div>
                            <label className="block text-sm font-medium">Difficulty</label>
                            <select
                                value={difficulty}
                                onChange={(e) => setDifficulty(e.target.value)}
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                            >
                                <option value="" disabled hidden>
                                    Select Difficulty
                                </option>
                                {difficultyLevels.map((level, idx) => (
                                    <option key={idx} value={level}>
                                        {level}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Duration */}
                        <div>
                            <label className="block text-sm font-medium">Duration (minutes)</label>
                            <input
                                type="number"
                                placeholder="30"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            rows={4}
                            placeholder="Enter test description"
                            className="mt-1 block w-full border rounded-md px-3 py-2"
                        ></textarea>
                    </div>

                    {/* Questions Section */}
                    <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Questions ({questions.length})</h3>
                            <div className="flex gap-2">
                                <button className="flex items-center gap-1 text-sm px-3 py-2 border rounded-md">
                                    <Wand2 className="w-4 h-4" />
                                    AI Generate
                                </button>
                                <button
                                    onClick={() => setShowQuestionForm(true)}
                                    className="flex items-center gap-1 text-sm px-3 py-2 bg-gray-900 text-white rounded-md"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Question
                                </button>
                            </div>
                        </div>

                        {showQuestionForm && (
                            <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
                                <div>
                                    <label className="block text-sm font-medium">Question</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Enter your question"
                                        className="mt-1 block w-full border rounded-md px-3 py-2"
                                        value={questionData.question}
                                        onChange={(e) => setQuestionData({ ...questionData, question: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {['A', 'B', 'C', 'D'].map(letter => (
                                        <div key={letter}>
                                            <label className="block text-sm font-medium">Option {letter}</label>
                                            <input
                                                type="text"
                                                placeholder={`Option ${letter}`}
                                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                                value={questionData[`option${letter}`]}
                                                onChange={(e) => setQuestionData({ ...questionData, [`option${letter}`]: e.target.value })}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Correct Answer</label>
                                    <select
                                        className="mt-1 block w-full border rounded-md px-3 py-2"
                                        value={questionData.correctAnswer}
                                        onChange={(e) => setQuestionData({ ...questionData, correctAnswer: e.target.value })}
                                    >
                                        <option value="">Select correct answer</option>
                                        {['A', 'B', 'C', 'D'].map(letter => (
                                            <option key={letter} value={letter}>Option {letter}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        className="bg-gray-900 text-white px-4 py-2 rounded-md"
                                        onClick={() => {
                                            setQuestions([...questions, questionData]);
                                            setQuestionData({ question: "", optionA: "", optionB: "", optionC: "", optionD: "", correctAnswer: "" });
                                            setShowQuestionForm(false);
                                        }}
                                    >
                                        Add Question
                                    </button>
                                    <button
                                        className="bg-white border px-4 py-2 rounded-md"
                                        onClick={() => setShowQuestionForm(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Save Button */}
                    <button className="mt-6 flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md">
                        <Save className="w-4 h-4" />
                        Save Test
                    </button>
                </div>
            )}

            {/* Other tabs */}
            {activeTab === "managetests" && <p>Manage Tests Page Coming Soon</p>}
            {activeTab === "assigntests" && <p>Assign Tests Page Coming Soon</p>}
        </div>
    );
};

export default TestGenerator;
