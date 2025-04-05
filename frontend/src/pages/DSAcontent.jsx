import React, { useState } from 'react';
import { BookOpen, Code } from 'lucide-react';
import dsaTopics from '../data/dsaContent.js'; // Assuming this is the path to your data file
import { TopicCard } from '../components/dsa_content/TopicCard';
import { VideoPlayer } from '../components/dsa_content/VideoPlayer';
import { AssignmentList } from '../components/dsa_content/AssignmentList';

function DSAContent() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [activeTab, setActiveTab] = useState('lectures');

  const handleLectureComplete = (lectureId) => {
    // In a real app, this would persist to a backend
    console.log(`Lecture ${lectureId} completed`);
  };

  const handleAssignmentToggle = (assignmentId) => {
    // In a real app, this would persist to a backend
    console.log(`Assignment ${assignmentId} toggled`);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          DSA Learning Path
        </h1>

        {selectedTopic ? (
          <div>
            <button
              onClick={() => setSelectedTopic(null)}
              className="text-gray-400 hover:text-gray-200 mb-6"
            >
              ← Back to Topics
            </button>

            <h2 className="text-2xl font-semibold mb-6">{selectedTopic.title}</h2>

            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setActiveTab('lectures')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'lectures'
                    ? 'bg-purple-600 text-white'
                    : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800'
                }`}
              >
                <BookOpen size={20} />
                Lectures
              </button>
              <button
                onClick={() => setActiveTab('assignments')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'assignments'
                    ? 'bg-purple-600 text-white'
                    : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800'
                }`}
              >
                <Code size={20} />
                Assignments
              </button>
            </div>

            {activeTab === 'lectures' ? (
              <div className="grid gap-6">
                {selectedTopic.lectures.map((lecture) => (
                  <VideoPlayer
                    key={lecture.id}
                    lecture={lecture}
                    onComplete={() => handleLectureComplete(lecture.id)}
                  />
                ))}
              </div>
            ) : (
              <AssignmentList
                assignments={selectedTopic.assignments}
                onToggleComplete={handleAssignmentToggle}
              />
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dsaTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                onClick={() => setSelectedTopic(topic)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DSAContent;
