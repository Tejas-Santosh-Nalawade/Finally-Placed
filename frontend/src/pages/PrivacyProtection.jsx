"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const backgroundData = [
  "fSdD2iui", "8dkFaZ4H", "gGxT3zkf", "x6t9wpR", "PuUKgx9c", "FiM5dhXzW", "WDPvDCBG",
  "QztXTafcF", "gGzot4rF", "NaOt7yWVD", "LrkBMa6gS", "OqlilAo9w", "xKxv9tHW", "QuT2rkF",
  "5kKx+FSJ", "vZw4Tf3E", "F1kaf12Ij", "1FQ2+x48", "8vepZkY", "O6k5FHz9", "mP1+suK",
  "NA6TY0wcE", "qqW6dY2", "FiM5dhXzW", "YDDves2RE", "Tf3Em", "QztXTafcF", "PuUKgx9c"
];

const glowWords = backgroundData.map((text, i) => (
  <motion.span
    key={i}
    className="text-xs text-[#6e6eff]/30 font-mono select-none px-1"
    animate={{ opacity: [0.1, 0.4, 0.1], y: [0, -2, 0] }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 3 + Math.random() * 2,
      delay: i * 0.02,
    }}
  >
    {text}
  </motion.span>
));

const particlesInit = async (main) => {
  await loadFull(main);
};

const PrivacyProtection = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0812] flex flex-col items-center justify-center text-white overflow-hidden px-6">

      {/* 3D Grid Effect */}
      <div className="absolute inset-0 z-0 perspective-[1000px] overflow-hidden">
        <div className="absolute bottom-0 w-full h-[500px] [transform-style:preserve-3d] animate-gridWave">
          <div className="w-full h-full bg-[linear-gradient(to_right,rgba(110,110,255,0.1)_1px,transparent_1px),linear-gradient(to_top,rgba(110,110,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] scale-150 blur-sm" />
        </div>
      </div>

      {/* Particle Effect */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: { value: "#0a0812" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100 } },
          },
          particles: {
            color: { value: "#6e6eff" },
            links: {
              color: "#8888ff",
              distance: 120,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1, direction: "none", outMode: "bounce" },
            number: { value: 60 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Floating glow text */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-wrap items-center justify-center text-center blur-sm z-10 pointer-events-none">
        {glowWords}
      </div>

      {/* Lock icon */}
      <motion.div
        className="text-purple-400 text-6xl mb-4 z-20"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <FaLock />
      </motion.div>

      {/* Tag */}
      <motion.div
        className="bg-purple-700/20 px-4 py-1 rounded-full text-sm text-purple-300 font-medium z-20 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Encryption
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 via-blue-400 to-indigo-400 bg-clip-text text-transparent z-20 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Hardened security
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-center text-sm md:text-lg text-gray-400 max-w-xl z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Your data is end-to-end encrypted. No one, not even us, can see your private information. Your privacy is protected by default.
      </motion.p>
    </div>
  );
};

export default PrivacyProtection;
