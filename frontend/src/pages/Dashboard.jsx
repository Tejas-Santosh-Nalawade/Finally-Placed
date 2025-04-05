import React from "react";

export default function Dashboard() {

  return (
    <div className="min-h-screen bg-[#f9fafb] p-6 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800">👋 Welcome, Pravin!</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Resume Score" value="82%" />
        <StatCard title="Interviews Given" value="5" />
        <StatCard title="Past Interview Score" value="74%" />
        <StatCard title="Courses Completed" value="3" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AI Interview */}
        <div className="bg-white p-6 rounded-xl shadow-md col-span-2">
          <h2 className="text-xl font-semibold mb-2">🤖 AI Interview</h2>
          <p className="text-gray-600">Your last score: <span className="font-bold text-purple-600">74%</span></p>
          <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Start Mock Interview
          </button>
        </div>

        {/* Calendar */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">🗓️ Calendar</h2>
          <p className="text-gray-500">Mini calendar or upcoming deadlines will appear here.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Course Recommendations */}
        <div className="bg-white p-6 rounded-xl shadow-md col-span-2">
          <h2 className="text-xl font-semibold mb-4">📚 Course Recommendations</h2>
          <ul className="space-y-3">
            {["DSA Mastery", "System Design Basics", "Resume Writing Workshop", "Mock Interview Bootcamp"].map((course, i) => (
              <li key={i} className="flex items-center justify-between border-b pb-2">
                <span>{course}</span>
                <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Enroll
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Todo List */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">✅ Todo</h2>
          <ul className="space-y-2 text-gray-700">
            <li>📄 Update Resume</li>
            <li>🎯 Practice 2 DSA problems</li>
            <li>🎙️ Attempt Mock Interview</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow text-center">
      <h3 className="text-md text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-purple-700">{value}</p>
    </div>
  );
}