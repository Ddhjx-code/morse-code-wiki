'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import { morseToSignals, morseToText, playMorseAudio, textToMorse } from '@/lib/morse';

type Direction = 'encode' | 'decode';

/**
 * Normalise pasted Morse into the canonical ".... . .-.. .-.. --- / .-- --- .-. .-.. -.." form.
 *
 * Real-world Morse arrives with whatever separators the source used: middle dots
 * and en dashes from Word, pipes from forum posts, slashes without spaces, line
 * breaks every few characters. The shared decoder only understands one space
 * between characters and " / " between words, so without this step a paste that
 * looks correct on screen decodes to nonsense. Normalising here rather than
 * asking the user to fix their text is the whole point of a converter.
 */
export function normalizeMorse(raw: string): string {
  const cleaned = raw
    .replace(/[·•∙・]/g, '.')
    .replace(/[−–—]/g, '-')
    .replace(/\|/g, ' / ')
    .replace(/\r\n?/g, '\n');

  return cleaned
    .split('\n')
    .map((line) =>
      line
        .trim()
        .split(/\s*\/\s*|\s{2,}|\t/)
        .map((word) => word.trim().split(/\s+/).filter(Boolean).join(' '))
        .filter(Boolean)
        .join(' / ')
    )
    .filter(Boolean)
    .join(' / ');
}

function durationSeconds(morse: string, wpm: number): number {
  if (!morse) return 0;
  return morseToSignals(morse, wpm).reduce((sum, s) => sum + s.duration, 0) / 1000;
}

interface MorseConverterProps {
  initialDirection?: Direction;
}

export default function MorseConverter({ initialDirection = 'encode' }: MorseConverterProps) {
  const [direction, setDirection] = useState<Direction>(initialDirection);
  const [input, setInput] = useState('');
  const [wpm, setWpm] = useState(20);
  const [tone, setTone] = useState(700);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const playerRef = useRef<{ stop: () => void } | null>(null);

  const morse = useMemo(
    () => (direction === 'encode' ? textToMorse(input) : normalizeMorse(input)),
    [direction, input]
  );
  const output = useMemo(
    () => (direction === 'encode' ? morse : morseToText(morse)),
    [direction, morse]
  );

  const seconds = useMemo(() => durationSeconds(morse, wpm), [morse, wpm]);

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
      frequency: tone,
      onEnd: () => setIsPlaying(false),
    });
  }, [isPlaying, morse, tone, wpm]);

  const handleCopy = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [output]);

  const handleSwap = useCallback(() => {
    playerRef.current?.stop();
    setIsPlaying(false);
    setDirection((d) => (d === 'encode' ? 'decode' : 'encode'));
    setInput(output);
  }, [output]);

  const inputLabel = direction === 'encode' ? 'Your text' : 'Your Morse code';
  const outputLabel = direction === 'encode' ? 'Morse code' : 'Plain text';

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <button
          onClick={() => setDirection('encode')}
          aria-pressed={direction === 'encode'}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            direction === 'encode'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Text → Morse
        </button>
        <button
          onClick={() => setDirection('decode')}
          aria-pressed={direction === 'decode'}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            direction === 'decode'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Morse → Text
        </button>
        <button
          onClick={handleSwap}
          disabled={!output}
          className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-40 transition-colors"
        >
          Swap ⇄
        </button>
        <button
          onClick={() => {
            playerRef.current?.stop();
            setIsPlaying(false);
            setInput('');
          }}
          disabled={!input}
          className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-40 transition-colors"
        >
          Clear
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="converter-input" className="block text-xs uppercase tracking-wide text-gray-500 mb-1.5">
            {inputLabel}
          </label>
          <textarea
            id="converter-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={7}
            spellCheck={false}
            placeholder={
              direction === 'encode'
                ? 'Type or paste English — SOS, HELLO WORLD, anything'
                : 'Paste dots and dashes — .... . .-.. .-.. --- / .-- --- .-. .-.. -..'
            }
            className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white font-mono text-sm leading-relaxed focus:outline-none focus:border-blue-600 resize-y"
          />
          <p className="text-xs text-gray-500 mt-1">
            {input.length} characters in
            {direction === 'decode' && input.trim() && ' · separators normalised automatically'}
          </p>
        </div>

        <div>
          <label htmlFor="converter-output" className="block text-xs uppercase tracking-wide text-gray-500 mb-1.5">
            {outputLabel}
          </label>
          <textarea
            id="converter-output"
            value={output}
            readOnly
            rows={7}
            className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-green-400 font-mono text-sm leading-relaxed resize-y"
            placeholder="Result appears here as you type"
          />
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs text-gray-500">
              {output ? `${output.length} characters out` : '\u00a0'}
            </p>
            <button
              onClick={handleCopy}
              disabled={!output}
              className="text-xs px-2.5 py-1 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-40 transition-colors"
            >
              {copied ? 'Copied' : 'Copy result'}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-5 border-t border-gray-800 grid sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="wpm" className="flex items-center justify-between text-xs uppercase tracking-wide text-gray-500 mb-1.5">
            <span>Speed</span>
            <span className="text-gray-300 normal-case tracking-normal">{wpm} WPM</span>
          </label>
          <input
            id="wpm"
            type="range"
            min={5}
            max={30}
            step={1}
            value={wpm}
            onChange={(e) => setWpm(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>
        <div>
          <label htmlFor="tone" className="flex items-center justify-between text-xs uppercase tracking-wide text-gray-500 mb-1.5">
            <span>Tone</span>
            <span className="text-gray-300 normal-case tracking-normal">{tone} Hz</span>
          </label>
          <input
            id="tone"
            type="range"
            min={400}
            max={1000}
            step={20}
            value={tone}
            onChange={(e) => setTone(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>
        <div>
          <span className="block text-xs uppercase tracking-wide text-gray-500 mb-1.5">Playback</span>
          <button
            onClick={handlePlay}
            disabled={!morse}
            className="w-full px-3 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-40 transition-colors"
          >
            {isPlaying ? '■ Stop' : '▶ Play as audio'}
          </button>
          <p className="text-xs text-gray-500 mt-1 h-4">
            {seconds > 0 ? `about ${seconds.toFixed(1)}s at ${wpm} WPM` : '\u00a0'}
          </p>
        </div>
      </div>
    </div>
  );
}
