import React from "react";
import { Sparkles, Mic, Eye, User, Brain } from "lucide-react";
import Blackhole from "../assets/blackhole.webm";

const Hero = () => {
  return (
    <div className="relative w-full py-20 md:py-32 overflow-hidden bg-[#0d0f1a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2c] to-[#0d0f1a]" />
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={Blackhole} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#0d0f1a]/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="mb-10">
            <button className="bg-[#1A1F2C]/80 backdrop-blur-md text-gray-300 rounded-full py-2 px-4 flex items-center gap-2 shadow-md shadow-purple-500/50 hover:shadow-purple-400 transition">
              <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300">Take notes using AI</span>
            </button>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 max-w-5xl drop-shadow-lg glow-text">
            Get Placed with Finally Placed
            <span className="text-purple-400">.</span>
            <span className="text-purple-400 animate-pulse">.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12">
            Finally Placed is a one stop solution for all your placement needs.
          </p>

          <div className="w-full max-w-5xl mx-auto mt-60">
            <div className="app-frame rounded-2xl overflow-hidden bg-[#1A1F2C]/90 shadow-xl shadow-blue-500/30">
              <div className="border-b border-gray-800 p-4 flex justify-between items-center">
                <div className="flex space-x-3">
                  <div className="h-9 w-9 rounded-lg bg-purple-500/20 flex items-center justify-center shadow-md shadow-purple-500/50">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9b87f5"
                      className="w-5 h-5"
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-sm font-medium text-white">
                      Interview in Progress
                    </div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">Live Feedback</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-7 h-[350px] md:h-[420px]">
                <div className="hidden md:block md:col-span-2 border-r border-gray-800 p-4 space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300 p-2 rounded-lg bg-purple-500/10 shadow shadow-purple-500/30">
                    <Mic className="w-4 h-4" />
                    <span>Speech Clarity</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 p-2 rounded-lg bg-purple-500/10 shadow shadow-purple-500/30">
                    <Eye className="w-4 h-4" />
                    <span>Eye Contact</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 p-2 rounded-lg bg-purple-500/10 shadow shadow-purple-500/30">
                    <User className="w-4 h-4" />
                    <span>Posture</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 p-2 rounded-lg bg-purple-500/10 shadow shadow-purple-500/30">
                    <Brain className="w-4 h-4" />
                    <span>Confidence</span>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-5 p-6 relative flex items-center justify-center">
                  <div className="w-full h-full rounded-xl bg-[#0d0f1a]/80 border border-purple-500 shadow-lg shadow-purple-500/20 flex flex-col">
                    <div className="flex items-center justify-between bg-[#1a1f2c] px-4 py-2 border-b border-purple-600">
                      <div className="text-white font-semibold text-sm">Mock Interview - Google Meet UI</div>
                      <div className="flex items-center gap-2">
                        <button className="text-sm text-gray-200 bg-[#2a2f45] px-2 py-1 rounded-lg">Mute</button>
                        <button className="text-sm text-gray-200 bg-[#2a2f45] px-2 py-1 rounded-lg">End</button>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-[300px] h-[200px] md:w-[420px] md:h-[260px] bg-black rounded-lg border-2 border-purple-500 shadow-inner shadow-purple-500/30 flex items-center justify-center text-white text-sm">
                        Your Video Feed
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-[#1a1f2c] border-t border-purple-600">
                      <h2 className="text-white text-lg font-semibold mb-2">Real-time AI Feedback</h2>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Monitoring voice modulation and pace</li>
                        <li>• Detecting use of filler words like "uh", "um"</li>
                        <li>• Analyzing eye contact with the camera</li>
                        <li>• Posture alignment and movement detection</li>
                        <li>• Evaluating confidence through expression and voice</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
