import React, { useEffect, useState } from "react";
import { Sparkles, Mic, Eye, User, Brain } from "lucide-react";
import Blackhole from "../assets/blackhole.webm";

const Interviewee = "https://images.unsplash.com/photo-1607746882042-944635dfe10e";

const Hero = () => {
  const [feedback, setFeedback] = useState({
    speech: "Analyzing...",
    eye: "Analyzing...",
    posture: "Analyzing...",
    confidence: "Analyzing..."
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedback({
        speech: "Clear and steady",
        eye: "Good eye contact",
        posture: "Straight posture",
        confidence: "Confident tone"
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full py-20 md:py-32 overflow-hidden bg-[#0d0f1a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2c] to-[#0d0f1a]" />
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        autoPlay
        loop
        muted
      >
        <source src={Blackhole} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#0d0f1a]/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="mb-10">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-full py-2 px-4 flex items-center gap-2 shadow-lg hover:scale-105 transition">
              <Sparkles className="h-4 w-4 animate-bounce" />
              <span>Land into your dream job</span>
            </button>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 max-w-5xl drop-shadow-xl tracking-tight">
            Get Placed with <span className="text-purple-500">Finally Placed</span>
            <span className="text-purple-300 animate-pulse">...</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12">
            Finally Placed is a one stop solution for all your placement needs.
          </p>

          <div className="w-full max-w-5xl mx-auto mt-40">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A1F2C]/90 to-[#0d0f1a]/90 shadow-2xl">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/4 relative">
                  <div className="bg-black h-[300px] md:h-[420px] relative">
                    <div className="absolute top-4 left-4 text-white text-sm font-semibold">
                      Richard Gomez <span className="block text-xs text-gray-400">Talent</span>
                    </div>
                    <div className="absolute top-4 right-4 text-white text-xs bg-red-600 px-3 py-1 rounded-full animate-pulse">Recording</div>
                    <div className="flex justify-center items-center h-full">
                      <img
                        src={Interviewee}
                        alt="Interviewee"
                        className="w-40 h-40 object-cover rounded-full border-4 border-purple-600 shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-[#1a1f2c]/80 px-8 py-3 rounded-full shadow-xl border border-purple-500">
                    <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition">
                      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    <button className="bg-red-600 text-white p-3 rounded-full hover:bg-red-500 transition">
                      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728" />
                      </svg>
                    </button>
                    <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition">
                      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="w-full md:w-1/4 bg-[#11131c]/80 border-l border-purple-800 p-4 space-y-4">
                  <div className="text-purple-300 font-semibold text-sm mb-2">Live AI Feedback</div>
                  <div className="text-gray-200 text-sm bg-purple-900/20 p-3 rounded-lg border border-purple-700 shadow-md">
                    <Mic className="inline w-4 h-4 mr-2" />Speech: <span className="text-green-400 font-medium">{feedback.speech}</span>
                  </div>
                  <div className="text-gray-200 text-sm bg-purple-900/20 p-3 rounded-lg border border-purple-700 shadow-md">
                    <Eye className="inline w-4 h-4 mr-2" />Eye Contact: <span className="text-green-400 font-medium">{feedback.eye}</span>
                  </div>
                  <div className="text-gray-200 text-sm bg-purple-900/20 p-3 rounded-lg border border-purple-700 shadow-md">
                    <User className="inline w-4 h-4 mr-2" />Posture: <span className="text-green-400 font-medium">{feedback.posture}</span>
                  </div>
                  <div className="text-gray-200 text-sm bg-purple-900/20 p-3 rounded-lg border border-purple-700 shadow-md">
                    <Brain className="inline w-4 h-4 mr-2" />Confidence: <span className="text-green-400 font-medium">{feedback.confidence}</span>
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
