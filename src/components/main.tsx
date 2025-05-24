import React from 'react';
function main() {
    
  return (
    <div>
       {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <p className="text-gray-600">Here’s a quick overview of your activity.</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800">Users</h3>
            <p className="text-2xl font-bold text-blue-600">1,254</p>
          </div>
          <div className="bg-white p-4 shadow rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800">Revenue</h3>
            <p className="text-2xl font-bold text-green-600">$7,890</p>
          </div>
          <div className="bg-white p-4 shadow rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800">Orders</h3>
            <p className="text-2xl font-bold text-purple-600">342</p>
          </div>
        </div>
      </main>
    </div>
    
  )
}

export default main
