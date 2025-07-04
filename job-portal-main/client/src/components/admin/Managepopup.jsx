import React, { useState } from "react";
import { X, Eye, MoreVertical, Download } from "lucide-react";

// Dummy user data
const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    location: "San Francisco, CA",
    role: "Job Seeker",
    status: "Active",
    joinDate: "2024-01-15",
    lastLogin: "2 hours ago",
    applications: 12,
    profileCompletion: "95%",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah.wilson@email.com",
    location: "New York, NY",
    role: "Employer",
    status: "Active",
    joinDate: "2024-01-10",
    lastLogin: "1 day ago",
    applications: 0,
    profileCompletion: "100%",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@email.com",
    location: "Austin, TX",
    role: "Job Seeker",
    status: "Inactive",
    joinDate: "2024-01-05",
    lastLogin: "1 week ago",
    applications: 8,
    profileCompletion: "80%",
  },
  {
    id: 4,
    name: "Emma Davis",
    email: "emma.davis@email.com",
    location: "Seattle, WA",
    role: "Admin",
    status: "Active",
    joinDate: "2023-12-20",
    lastLogin: "30 minutes ago",
    applications: 0,
    profileCompletion: "100%",
  },
];

const UserManagementModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [dropdownOpenId, setDropdownOpenId] = useState(null);

  const toggleDropdown = (id) => {
    setDropdownOpenId(dropdownOpenId === id ? null : id);
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "Job Seeker":
        return "bg-orange-100 text-orange-600";
      case "Employer":
        return "bg-blue-100 text-blue-600";
      case "Admin":
        return "bg-purple-100 text-purple-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusColor = (status) => {
    return status.toLowerCase() === "active"
      ? "bg-green-100 text-green-600"
      : "bg-gray-200 text-gray-600";
  };

  const roleCounts = {
    "Job Seeker": users.filter((u) => u.role === "Job Seeker").length,
    "Employer": users.filter((u) => u.role === "Employer").length,
    "Admin": users.filter((u) => u.role === "Admin").length,
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 z-50 flex justify-center items-start p-4 overflow-auto">
      <div className="bg-white rounded-lg w-full max-w-7xl shadow-lg p-6 mt-10 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl">
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-1">User Management</h2>
        <p className="text-gray-500 mb-6">Manage users, view profiles, and track activity</p>

        {/* Tabs */}
        <div className="flex justify-center gap-8 border border-gray-300 rounded-md overflow-hidden mb-6 bg-gray-50">
          {["all", "activity", "role"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full py-3 font-medium flex items-center justify-center gap-2 ${activeTab === tab
                ? "bg-white text-black shadow-sm"
                : "text-gray-500 hover:text-blue-600"
                }`}
            >
              {tab === "all" && "👥 All Users"}
              {tab === "activity" && "📅 User Activity"}
              {tab === "role" && "🛡️ Role Management"}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        {activeTab === "all" && (
          <>
            <div className="flex flex-wrap gap-4 mb-6">
              <input type="text" placeholder="Search users..." className="border border-gray-300 px-3 py-2 rounded w-full sm:w-1/3" />
              <select className="border  border-gray-300 px-3 py-2 rounded w-full sm:w-1/4">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <select className="border   border-gray-300 px-3 py-2 rounded w-full sm:w-1/4">
                <option>All Roles</option>
                <option>Admin</option>
                <option>Job Seeker</option>
                <option>Employer</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">User</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Role</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Join Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Last Login</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm">
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                        <div className="text-xs text-gray-400">{user.location}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${getRoleColor(user.role)}`}>{user.role}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(user.status)}`}>{user.status}</span>
                      </td>
                      <td className="px-6 py-4">{user.joinDate}</td>
                      <td className="px-6 py-4">{user.lastLogin}</td>
                      <td className="px-6 py-4 relative">
                        <button className="inline-flex items-center px-3 py-1 text-sm border  border-gray-300 rounded mr-2">
                          <Eye className="w-4 h-4 mr-1" /> View
                        </button>
                        <button onClick={() => toggleDropdown(user.id)} className="inline-flex items-center px-3 py-1 text-sm border  border-gray-300 rounded">
                          Upda <MoreVertical className="w-4 h-4 ml-1" />
                        </button>
                        {dropdownOpenId === user.id && (
                          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 border">
                            <ul className="text-sm text-gray-700">
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit Profile</li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Suspend</li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Activate</li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete</li>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === "activity" && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Recent User Activity</h3>
            {users.map((user) => (
              <div
                key={user.id}
                className="border border-gray-400 rounded-md px-6 py-4 bg-white shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center"
              >
                
                <div className="space-y-1">
                  <div className="font-semibold">{user.name}</div>
                  <div className="text-sm text-gray-500">Last login: {user.lastLogin}</div>
                  <div className="text-sm text-gray-500">Applications: {user.applications}</div>
                </div>

                
                <div className="space-y-1 mt-3 sm:mt-0 sm:text-right">
                  <div
                    className={`inline-block text-xs px-2 py-1 rounded-full font-medium ${getRoleColor(user.role)}`}
                  >
                    {user.role}
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="font-medium">Profile:</span> {user.profileCompletion} complete
                  </div>
                </div>
              </div>

            ))}
          </div>
        )}

        {activeTab === "role" && (
          <div>
            <div className="flex justify-between  min-h-[350px] items-center mb-4 ">
              <h3 className="text-lg font-semibold">Role Management</h3>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
                <Download className="w-4 h-4" />
                Export Users
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="border border-gray-400 rounded-md p-4">
                <div className="text-2xl font-bold text-blue-600">{roleCounts["Job Seeker"]}</div>
                <div className="text-gray-600">Job Seekers</div>
              </div>
              <div className="border border-gray-400 rounded-md p-4">
                <div className="text-2xl font-bold text-green-600">{roleCounts["Employer"]}</div>
                <div className="text-gray-600">Employers</div>
              </div>
              <div className="border border-gray-400  rounded-md p-4 ">
                <div className="text-2xl font-bold text-purple-600">{roleCounts["Admin"]}</div>
                <div className="text-gray-600">Admins</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagementModal;
