import React from "react";

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
          <div key={index} className="bg-[#14101d] p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
