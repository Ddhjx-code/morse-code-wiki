'use client';

import { useState, useCallback, useRef } from 'react';
import { textToMorse, morseToText, playMorseAudio } from '@/lib/morse';

export default function MorseTranslator() {
  const [text, setText] = useState('');
  const [morse, setMorse] = useState('');
  const [mode, setMode] = useState<'textToMorse' | 'morseToText'>('textToMorse');
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const playerRef = useRef<{ stop: () => void } | null>(null);

  const handleTextChange = useCallback((value: string) => {
    setText(value);
    if (mode === 'textToMorse') {
      setMorse(textToMorse(value));
    }
  }, [mode]);

  const handleMorseChange = useCallback((value: string) => {
    setMorse(value);
    if (mode === 'morseToText') {
      setText(morseToText(value));
    }
  }, [mode]);

  const switchMode = useCallback(() => {
    setMode(prev => {
      const newMode = prev === 'textToMorse' ? 'morseToText' : 'textToMorse';
      return newMode;
    });
  }, []);

  const handlePlay = useCallback(() => {
    if (isPlaying) {
      playerRef.current?.stop();
      setIsPlaying(false);
      return;
    }

    const morseCode = mode === 'textToMorse' ? morse : textToMorse(text);
    if (!morseCode) return;

    setIsPlaying(true);
    playerRef.current = playMorseAudio(morseCode, {
      wpm: 20,
      frequency: 700,
      onEnd: () => setIsPlaying(false),
    });
  }, [isPlaying, morse, text, mode]);

  const handleCopy = useCallback(async () => {
    const output = mode === 'textToMorse' ? morse : text;
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [mode, morse, text]);

  const handleClear = useCallback(() => {
    setText('');
    setMorse('');
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Mode Toggle */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className={`text-sm font-medium ${mode === 'textToMorse' ? 'text-blue-400' : 'text-gray-400'}`}>
          Text → Morse
        </span>
        <button
          onClick={switchMode}
          className="relative w-14 h-7 bg-gray-700 rounded-full transition-colors hover:bg-gray-600"
          aria-label="Switch translation direction"
        >
          <div className={`absolute top-1 w-5 h-5 bg-blue-500 rounded-full transition-transform ${
            mode === 'morseToText' ? 'translate-x-8' : 'translate-x-1'
          }`} />
        </button>
        <span className={`text-sm font-medium ${mode === 'morseToText' ? 'text-blue-400' : 'text-gray-400'}`}>
          Morse → Text
        </span>
      </div>

      {/* Input/Output Areas */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Input */}
        <div className="relative">
          <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
            {mode === 'textToMorse' ? 'Text' : 'Morse Code'}
          </label>
          <textarea
            value={mode === 'textToMorse' ? text : morse}
            onChange={(e) => mode === 'textToMorse' ? handleTextChange(e.target.value) : handleMorseChange(e.target.value)}
            placeholder={mode === 'textToMorse' ? 'Type your text here...' : 'Enter morse code (use . and -, space between letters, / between words)'}
            className="w-full h-40 p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
          />
        </div>

        {/* Output */}
        <div className="relative">
          <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
            {mode === 'textToMorse' ? 'Morse Code' : 'Text'}
          </label>
          <div className="w-full h-40 p-4 bg-gray-900 border border-gray-700 rounded-lg text-green-400 overflow-auto font-mono text-lg tracking-wider">
            {mode === 'textToMorse' ? morse : text}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          onClick={handlePlay}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            isPlaying
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isPlaying ? (
            <>
              <StopIcon /> Stop
            </>
          ) : (
            <>
              <PlayIcon /> Play Audio
            </>
          )}
        </button>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          <CopyIcon />
          {copied ? 'Copied!' : 'Copy'}
        </button>

        <button
          onClick={handleClear}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          <ClearIcon /> Clear
        </button>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
