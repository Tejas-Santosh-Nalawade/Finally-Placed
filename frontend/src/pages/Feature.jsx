import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "☁️",
    title: "Built for speed",
    description: "Instantly sync your notes across devices",
  },
  {
    icon: "🕸️",
    title: "Networked notes",
    description: "Form a graph of ideas with backlinked notes",
  },
  {
    icon: "📱",
    title: "iOS app",
    description: "Capture ideas on the go, online or offline",
  },
  {
    icon: "🔒",
    title: "End-to-end encryption",
    description: "Only you can access your notes",
  },
  {
    icon: "📅",
    title: "Calendar integration",
    description: "Keep track of meetings and agendas",
  },
  {
    icon: "🚀",
    title: "Publishing",
    description: "Share anything you write with one click",
  },
  {
    icon: "📥",
    title: "Instant capture",
    description: "Save snippets from your browser and Kindle",
  },
  {
    icon: "🔍",
    title: "Frictionless search",
    description: "Easily recall and index past notes and ideas",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="min-h-screen bg-[#0a0812] text-white p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-[#14101d] p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300"
            whileHover={{
              scale: 1.07,
              rotateX: 5,
              rotateY: -5,
              boxShadow: "0px 20px 50px rgba(255,255,255,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div className="text-4xl mb-4 transition-transform duration-300 hover:scale-125">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
