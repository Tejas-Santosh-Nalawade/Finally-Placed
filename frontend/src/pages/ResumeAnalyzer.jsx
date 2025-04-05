import React from "react";
import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { FaFileAlt, FaChartLine } from "react-icons/fa";

const resumeData = {
  name: "John",
  role: "Frontend Developer",
  atsScore: 86, // out of 100
  insights: [
    { skill: "React", score: 90 },
    { skill: "JavaScript", score: 85 },
    { skill: "CSS", score: 80 },
    { skill: "Testing", score: 75 },
    { skill: "Communication", score: 70 },
  ],
};

const ResumeAnalyzer = () => {
  return (
    <div className="min-h-screen bg-[#0a0812] text-white flex flex-col items-center justify-center px-6 py-10">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        Resume Analysis Dashboard
      </motion.h1>

      {/* ATS Score */}
      <motion.div
        className="bg-gradient-to-br from-[#1c1a2e] to-[#101017] rounded-3xl p-6 shadow-xl border border-[#2b2b40] w-full max-w-md text-center mb-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-center mb-4 text-pink-500 text-2xl">
          <FaFileAlt />
        </div>
        <h2 className="text-xl font-semibold mb-2">{resumeData.name}</h2>
        <p className="text-gray-400 mb-4">{resumeData.role}</p>
        <div className="text-6xl font-bold text-pink-500">{resumeData.atsScore}%</div>
        <p className="mt-2 text-sm text-gray-400">ATS Compatibility Score</p>
      </motion.div>

      {/* Radar Chart Analysis */}
      <motion.div
        className="w-full max-w-4xl bg-[#1e1b2e] rounded-2xl p-6 border border-[#2d2d44] shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-2 mb-4 text-pink-400 text-xl">
          <FaChartLine />
          <span>Skill Analysis</span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={resumeData.insights}>
            <PolarGrid stroke="#444" />
            <PolarAngleAxis dataKey="skill" stroke="#aaa" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#333" />
            <Radar name="Skill" dataKey="score" stroke="#ec4899" fill="#ec4899" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default ResumeAnalyzer;
