import React from 'react';
import {
  Home,
  Briefcase,
  Users,
  Building,
  BarChart2,
  Settings,
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: <Home className="w-5 h-5" /> },
  { name: 'Jobs', icon: <Briefcase className="w-5 h-5" /> },
  { name: 'Candidates', icon: <Users className="w-5 h-5" /> },
  { name: 'Companies', icon: <Building className="w-5 h-5" /> },
  { name: 'Analytics', icon: <BarChart2 className="w-5 h-5" /> },
  { name: 'Settings', icon: <Settings className="w-5 h-5" /> },
];

const Sidebar = () => {
  return (
    <div className="h-screen w-60 bg-white border border-gray-200">
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold">JobPortal Admin</h1>
      </div>
      <div className="px-6 py-2 text-xs font-semibold text-gray-500">MAIN</div>
      <ul className="space-y-1 px-4">
        {menuItems.map((item, index) => (
          <li key={index} className="text-blue-600 hover:text-blue-800 flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-50 cursor-pointer">
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
