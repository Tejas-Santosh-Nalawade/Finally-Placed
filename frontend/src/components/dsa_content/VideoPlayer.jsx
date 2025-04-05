import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, Check } from 'lucide-react';

export const VideoPlayer = ({ lecture, onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasWindow, setHasWindow] = useState(false);

  // Fix for SSR (Server Side Rendering)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      onComplete();
    }
  }, [progress, onComplete]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (state) => {
    setProgress(state.played * 100);
  };

  const handleEnded = () => {
    setProgress(100);
    setIsPlaying(false);
  };

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
      <div className="aspect-video bg-zinc-950">
        {hasWindow && (
          <ReactPlayer
            url={lecture.videoUrl}
            playing={isPlaying}
            onProgress={handleProgress}
            onEnded={handleEnded}
            width="100%"
            height="100%"
            controls={false}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  showinfo: 0,
                  rel: 0,
                  iv_load_policy: 3
                }
              }
            }}
          />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-white">{lecture.title}</h3>
          {lecture.completed && (
            <Check className="text-green-400" size={20} />
          )}
        </div>
        <div className="mt-4 flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <div className="flex-1 bg-zinc-800 rounded-full h-2">
            <div 
              className="bg-purple-400 h-full rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};