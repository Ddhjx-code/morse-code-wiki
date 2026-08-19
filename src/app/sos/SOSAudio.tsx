'use client';

import { useState, useRef } from 'react';
import { playMorseAudio } from '@/lib/morse';

// SOS as a prosign (no letter spacing)
const SOS_MORSE = '... --- ...';

export default function SOSAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<{ stop: () => void } | null>(null);

  const handlePlay = () => {
    if (isPlaying) {
      playerRef.current?.stop();
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
    playerRef.current = playMorseAudio(SOS_MORSE, {
      wpm: 15,
      frequency: 800,
      onEnd: () => setIsPlaying(false),
    });
  };

  return (
    <button
      onClick={handlePlay}
      className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
        isPlaying
          ? 'bg-red-600 hover:bg-red-700 text-white'
          : 'bg-red-700 hover:bg-red-800 text-white'
      }`}
    >
      {isPlaying ? '⏹ Stop' : '▶ Hear SOS Signal'}
    </button>
  );
}
