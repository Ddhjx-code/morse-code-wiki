'use client';

import { useState, useRef } from 'react';
import { playMorseAudio } from '@/lib/morse';

const I_LOVE_YOU_MORSE = '.. / .-.. --- ...- . / -.-- --- ..-';

export default function ILoveYouAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<{ stop: () => void } | null>(null);

  const handlePlay = () => {
    if (isPlaying) {
      playerRef.current?.stop();
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
    playerRef.current = playMorseAudio(I_LOVE_YOU_MORSE, {
      wpm: 15,
      frequency: 700,
      onEnd: () => setIsPlaying(false),
    });
  };

  return (
    <button
      onClick={handlePlay}
      className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
        isPlaying
          ? 'bg-red-600 hover:bg-red-700 text-white'
          : 'bg-blue-600 hover:bg-blue-700 text-white'
      }`}
    >
      {isPlaying ? '⏹ Stop' : '▶ Listen to "I Love You"'}
    </button>
  );
}
