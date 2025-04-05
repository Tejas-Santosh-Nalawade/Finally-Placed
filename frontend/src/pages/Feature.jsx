import React from "react";
const FeaturesGrid = () => {
    const features = [
      { id: 1, title: "Built for speed", description: "Instantly sync your notes across devices" },
      { id: 2, title: "Networked notes", description: "Form a graph of ideas with backlinked notes" },
      { id: 3, title: "iOS app", description: "Capture ideas on the go, online or offline" },
      { id: 4, title: "End-to-end encryption", description: "Only you can access your notes" },
      { id: 5, title: "Calendar integration", description: "Keep track of meetings and agendas" },
      { id: 6, title: "Publishing", description: "Share anything you write with one click" },
      { id: 7, title: "Instant capture", description: "Save snippets from your browser and Kindle" },
      { id: 8, title: "Frictionless search", description: "Easily recall and index past notes and ideas" },
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default  FeaturesGrid;
// This component creates a grid of features with hover effects and responsive design.                  