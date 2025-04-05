import React from "react";
import { Sparkles } from "lucide-react";
import Blackhole from "../assets/blackhole.webm";

const Hero = () => {
  return (
    <div className="relative w-full py-20 md:py-32 overflow-hidden bg-[#0d0f1a]">
      {/* Subtle glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2c] to-[#0d0f1a]"></div>

      {/* Black hole animation */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={Blackhole} type="video/mp4" />
      </video>

      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-[#0d0f1a]/20"></div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-14">
          {/* AI Badge */}
          <div className="mb-10">
            <button className="bg-[#1A1F2C]/80 backdrop-blur-md text-gray-300 rounded-full py-2 px-4 flex items-center gap-2 shadow-md shadow-purple-500/50 hover:shadow-purple-400 transition">
              <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300">Take notes using AI</span>
            </button>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 max-w-5xl drop-shadow-lg glow-text">
            Get Placed with Finally Placed
            <span className="text-purple-400">.</span>
            <span className="text-purple-400 animate-pulse">.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12">
            Finally Placed is a one stop solution for all your placement needs.
          </p>

          {/* App preview */}
          <div className="w-full max-w-4xl mx-auto mt-60">
            <div className=" app-frame rounded-2xl overflow-hidden bg-[#1A1F2C]/90 shadow-xl shadow-blue-500/30">
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
                      Daily notes
                    </div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">April 2023</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-7 h-[300px] md:h-[400px]">
                {/* Sidebar */}
                <div className="hidden md:block md:col-span-2 border-r border-gray-800 p-4">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-3 text-gray-300 p-2 rounded-lg bg-purple-500/10 shadow-md shadow-purple-500/30">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          d="M12 5v14M5 12h14"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Daily notes</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400 p-2 rounded-lg hover:text-purple-300 transition">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>All notes</span>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="col-span-1 md:col-span-5 p-4 relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-purple-500/30 blur-[80px] animate-pulse"></div>
                  <div className="relative z-10">
                    {/* Note content */}
                    <div className="border-l-2 border-purple-500 pl-4 mb-6">
                      <h2 className="text-white text-lg font-semibold mb-2">
                        Sun, April 2nd, 2023
                      </h2>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="mr-2 text-purple-400">•</span>
                          <div>
                            Today I started using{" "}
                            <span className="text-purple-400">Finally Placed</span>!
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-purple-400">•</span>
                          <div>What is Finally Placed</div>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-purple-400">•</span>
                          <div>
                            <span className="text-purple-400">Finally Placed</span> is a one stop solution for all your placement needs.
                          </div>
                        </li>
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