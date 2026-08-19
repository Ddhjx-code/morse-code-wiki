'use client';

import { useState, useCallback, useEffect } from 'react';
import { CHAR_TO_MORSE, playMorseAudio } from '@/lib/morse';

type Difficulty = 'beginner' | 'intermediate' | 'advanced';

const DIFFICULTY_SETS: Record<Difficulty, string[]> = {
  beginner: ['E', 'T', 'A', 'I', 'N', 'O', 'S'],
  intermediate: ['E', 'T', 'A', 'I', 'N', 'O', 'S', 'H', 'R', 'D', 'L', 'U', 'C', 'M'],
  advanced: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(''),
};

export default function PracticeGame() {
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const [currentChar, setCurrentChar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const pickRandom = useCallback(() => {
    const chars = DIFFICULTY_SETS[difficulty];
    const char = chars[Math.floor(Math.random() * chars.length)];
    setCurrentChar(char);
    setUserInput('');
    setFeedback(null);
    return char;
  }, [difficulty]);

  const playCurrentChar = useCallback((char?: string) => {
    const c = char || currentChar;
    if (!c) return;
    const morse = CHAR_TO_MORSE[c];
    if (!morse) return;
    setIsPlaying(true);
    playMorseAudio(morse, {
      wpm: 18,
      frequency: 700,
      onEnd: () => setIsPlaying(false),
    });
  }, [currentChar]);

  const startGame = useCallback(() => {
    setGameStarted(true);
    setScore(0);
    setTotal(0);
    const char = pickRandom();
    // Small delay then play
    setTimeout(() => playCurrentChar(char), 500);
  }, [pickRandom, playCurrentChar]);

  const handleSubmit = useCallback(() => {
    if (!userInput.trim()) return;
    const isCorrect = userInput.trim().toUpperCase() === currentChar;
    setFeedback(isCorrect ? 'correct' : 'wrong');
    setTotal(t => t + 1);
    if (isCorrect) setScore(s => s + 1);

    // Next round after delay
    setTimeout(() => {
      const char = pickRandom();
      setTimeout(() => playCurrentChar(char), 300);
    }, 1200);
  }, [userInput, currentChar, pickRandom, playCurrentChar]);

  // Handle keyboard enter
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && gameStarted && !isPlaying) {
        handleSubmit();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleSubmit, gameStarted, isPlaying]);

  if (!gameStarted) {
    return (
      <div className="text-center">
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-3">Select difficulty</label>
          <div className="flex justify-center gap-3">
            {(['beginner', 'intermediate', 'advanced'] as Difficulty[]).map(d => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                  difficulty === d
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {difficulty === 'beginner' && '7 most common letters: E T A I N O S'}
            {difficulty === 'intermediate' && '14 common letters: E T A I N O S H R D L U C M'}
            {difficulty === 'advanced' && 'Full alphabet A-Z + numbers 0-9'}
          </p>
        </div>
        <button
          onClick={startGame}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg transition-colors"
        >
          Start Practice
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto text-center">
      {/* Score */}
      <div className="flex justify-between items-center mb-8 text-sm">
        <span className="text-gray-400">
          Score: <span className="text-white font-bold">{score}/{total}</span>
          {total > 0 && (
            <span className="ml-2 text-gray-500">({Math.round(score / total * 100)}%)</span>
          )}
        </span>
        <span className="text-gray-500 capitalize">{difficulty}</span>
      </div>

      {/* Play Button */}
      <div className="mb-8">
        <button
          onClick={() => playCurrentChar()}
          disabled={isPlaying}
          className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl transition-all ${
            isPlaying
              ? 'bg-blue-600 animate-pulse'
              : 'bg-gray-800 hover:bg-gray-700 border-2 border-gray-700'
          }`}
        >
          {isPlaying ? '🔊' : '▶'}
        </button>
        <p className="text-xs text-gray-500 mt-2">
          {isPlaying ? 'Listening...' : 'Click to replay'}
        </p>
      </div>

      {/* Input */}
      <div className="mb-6">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value.slice(0, 1))}
          placeholder="?"
          maxLength={1}
          className={`w-20 h-20 text-center text-4xl font-bold rounded-xl border-2 bg-gray-900 focus:outline-none transition-colors ${
            feedback === 'correct'
              ? 'border-green-500 text-green-400'
              : feedback === 'wrong'
              ? 'border-red-500 text-red-400'
              : 'border-gray-700 text-white focus:border-blue-500'
          }`}
          autoFocus
        />
        {feedback === 'wrong' && (
          <p className="text-red-400 text-sm mt-2">
            It was <span className="font-bold">{currentChar}</span> ({CHAR_TO_MORSE[currentChar]})
          </p>
        )}
        {feedback === 'correct' && (
          <p className="text-green-400 text-sm mt-2">Correct!</p>
        )}
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={!userInput.trim() || isPlaying}
        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-lg font-medium transition-colors"
      >
        Check (Enter)
      </button>

      {/* Reset */}
      <button
        onClick={() => setGameStarted(false)}
        className="block mx-auto mt-4 text-sm text-gray-500 hover:text-gray-300 transition-colors"
      >
        Change difficulty
      </button>
    </div>
  );
}
