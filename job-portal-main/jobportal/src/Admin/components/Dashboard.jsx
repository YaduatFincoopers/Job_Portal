import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import UserManagementModal from "../components/Managepopup"; 


import {
    Users,
    Box,
    CalendarDays,
    MessageCircle,
} from "lucide-react";

const Dashboard = () => {
    const navigate = useNavigate();
     const [showUserModal, setShowUserModal] = useState(false);
    const dataCards = [
        { title: "Total Users", icon: <Users className="text-blue-600 w-6 h-6" />, count: 0 },
        { title: "Job Applications", icon: <Box className="text-green-600 w-6 h-6" />, count: 0 },
        { title: "Scheduled Interviews", icon: <CalendarDays className="text-yellow-600 w-6 h-6" />, count: 0 },
        { title: "Pending Reviews", icon: <MessageCircle className="text-red-600 w-6 h-6" />, count: 0 },
    ];

    const manageSections = [
        {
            title: "User Management",
            desc: "View and manage all registered users",
            count: 0,
            status: "Active",
        },
        {
            title: "Job Applications",
            desc: "Monitor job applications and their status",
            count: 0,
            status: "Active",
        },
        {
            title: "Interview Management",
            desc: "Manage interview schedules and mentor assignments",
            count: 0,
            status: "Active",
        },
        {
            title: "Test Generator",
            desc: "Create and manage tests for candidates",
            count: 0,
            status: "Active",
        },
        {
            title: "Analytics",
            desc: "View platform statistics and reports",
            count: 0,
            status: "Coming Soon",
        },
    ];

    return (
        <>
        
             <Navbar />
            <div className="min-h-screen bg-gray-50 px-4 md:px-8 lg:px-50 lg:  py-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Control Panel 🔰</h2>
                <p className="text-gray-600">Manage the JobPortal AI platform and users</p>
            
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 mt-10">
                    {dataCards.map((card, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg shadow text-center">
                            <div className="flex justify-center mb-2">{card.icon}</div>
                            <p className="text-gray-600">{card.title}</p>
                            <h3 className="text-2xl font-bold">{card.count}</h3>
                        </div>
                    ))}
                </div>

                {/* Manage Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {manageSections.map((sec, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg shadow">
                            <div className="flex flex-col justify-between h-full">
                                {/* Title and description */}
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{sec.title}</h3>
                                    <p className="text-gray-500">{sec.desc}</p>
                                </div>

                                {/* Status left, Count + Button right */}
                                <div className="flex items-center justify-between mt-4">
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full ${sec.status === "Active"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-yellow-100 text-yellow-800"
                                            }`}
                                    >
                                        {sec.status}
                                    </span>

                                    <div className="flex items-center gap-3">
                                        <p className="text-sm text-gray-600">Count: {sec.count}</p>
                                        <button
                                            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:brightness-110 h-9 rounded-md px-3 ${sec.status === "Coming Soon"
                                                    ? "cursor-not-allowed opacity-50"
                                                    : "cursor-pointer"
                                                }`}
                                            onClick={() => {
                                                if (sec.status !== "Coming Soon") {
                                                    if (sec.title === "Test Generator") navigate("/TestGenerator");
                                                    else if (sec.title === "User Management") setShowUserModal(true);
                                                    else if (sec.title === "Job Applications") navigate("/jobApplication")
                                                }
                                            }}
                                        >
                                            {sec.status === "Coming Soon" ? "   Coming Soon" : "Manage"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="font-semibold text-gray-900 mb-2">Recent Job Applications</h3>
                        </div>
                        <div className="px-6 py-10 text-center text-gray-500">No applications yet</div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="font-semibold text-gray-900 mb-2">Interview Management</h3>
                        </div>
                        <div className="px-6 py-10 text-center text-gray-500">No interviews scheduled</div>
                    </div>
                </div>
                {showUserModal && (
  <UserManagementModal onClose={() => setShowUserModal(false)} />
)}

            </div>
        </>
    );
};

export default Dashboard;
