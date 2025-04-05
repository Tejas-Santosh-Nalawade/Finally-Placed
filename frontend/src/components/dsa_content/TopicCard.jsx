import React from 'react';
import { ChevronRight, BookOpen, Code } from 'lucide-react';


export const TopicCard = ({ topic, onClick }) => {
  const completedLectures = topic.lectures.filter(l => l.completed).length;
  const completedAssignments = topic.assignments.filter(a => a.completed).length;
  
  return (
    <div 
      onClick={onClick}
      className="bg-zinc-900 rounded-lg p-6 cursor-pointer hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-zinc-700"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
        <ChevronRight className="text-gray-400" />
      </div>
      <p className="text-gray-400 mt-2">{topic.description}</p>
      <div className="flex gap-4 mt-4">
        <div className="flex items-center gap-2 text-gray-400">
          <BookOpen size={18} />
          <span>{completedLectures}/{topic.lectures.length} lectures</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Code size={18} />
          <span>{completedAssignments}/{topic.assignments.length} assignments</span>
        </div>
      </div>
    </div>
  );
};