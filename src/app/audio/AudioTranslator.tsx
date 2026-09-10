'use client';

import { useState, useCallback, useRef } from 'react';
import { textToMorse, playMorseAudio } from '@/lib/morse';

export default function AudioTranslator() {
  const [text, setText] = useState('SOS');
  const [wpm, setWpm] = useState(20);
  const [frequency, setFrequency] = useState(700);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<{ stop: () => void } | null>(null);

  const morse = textToMorse(text);

  const handlePlay = useCallback(() => {
    if (isPlaying) {
      playerRef.current?.stop();
      setIsPlaying(false);
      return;
    }
    if (!morse) return;
    setIsPlaying(true);
    playerRef.current = playMorseAudio(morse, {
      wpm,
      frequency,
      onEnd: () => setIsPlaying(false),
    });
  }, [isPlaying, morse, wpm, frequency]);

  const presetPhrases = ['SOS', 'HELP', 'I LOVE YOU', 'HELLO', 'THANK YOU'];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Enter text to play as Morse code audio</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type anything..."
            className="w-full h-24 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
            maxLength={200}
          />
          {morse && (
            <p className="text-xs text-gray-500 mt-2 font-mono break-all">{morse}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {presetPhrases.map(phrase => (
            <button
              key={phrase}
              onClick={() => setText(phrase)}
              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-xs transition-colors"
            >
              {phrase}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Speed: <span className="text-white font-bold">{wpm} WPM</span>
            </label>
            <input
              type="range"
              min={5}
              max={35}
              value={wpm}
              onChange={(e) => setWpm(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="flex justify-between text-xs text-gray-600">
              <span>5 (slow)</span>
              <span>20 (standard)</span>
              <span>35 (fast)</span>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Frequency: <span className="text-white font-bold">{frequency} Hz</span>
            </label>
            <input
              type="range"
              min={400}
              max={1000}
              step={50}
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="flex justify-between text-xs text-gray-600">
              <span>400 Hz</span>
              <span>700 Hz (default)</span>
              <span>1000 Hz</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePlay}
            className={`px-8 py-3 rounded-lg font-medium text-lg transition-colors ${
              isPlaying
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isPlaying ? '⏹ Stop' : '▶ Play Audio'}
          </button>
        </div>

        {isPlaying && (
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-green-400">Playing...</span>
          </div>
        )}
      </div>
    </div>
  );
}
