
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-green-100 ">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li><a href="#" className="block text-gray-700 hover:text-blue-600">Overview</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-blue-600">Reports</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-blue-600">Settings</a></li>
          </ul>
        </nav>
      </aside>
      </div>
  );
};

export default Dashboard;
