'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { playMorseAudio } from '@/lib/morse';

interface MorseAudioButtonProps {
  morse: string;
  label?: string;
}

export default function MorseAudioButton({ morse, label = 'Play sound' }: MorseAudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<{ stop: () => void } | null>(null);

  useEffect(() => {
    return () => {
      playerRef.current?.stop();
      playerRef.current = null;
    };
  }, []);

  const handleClick = useCallback(() => {
    if (isPlaying) {
      playerRef.current?.stop();
      playerRef.current = null;
      setIsPlaying(false);
      return;
    }

    if (!morse) return;

    playerRef.current = playMorseAudio(morse, {
      onEnd: () => {
        playerRef.current = null;
        setIsPlaying(false);
      },
    });
    setIsPlaying(true);
  }, [isPlaying, morse]);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isPlaying ? `Stop ${label}` : label}
      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
    >
      <span aria-hidden="true">{isPlaying ? '■' : '▶'}</span>
      <span>{isPlaying ? 'Stop' : label}</span>
    </button>
  );
}
