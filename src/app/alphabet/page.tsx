import type { Metadata } from 'next';
import { CHAR_TO_MORSE } from '@/lib/morse';
import Link from 'next/link';
import AdBanner from '@/components/AdBanner';

export const metadata: Metadata = {
  title: 'Morse Code Alphabet - Complete A-Z Chart with Numbers & Symbols',
  description:
    'Complete Morse code alphabet chart showing all 26 letters A to Z, numbers 0-9, and punctuation marks. Includes memory tips and audio for each character.',
  keywords:
    'morse code alphabet, morse code letters, morse code a to z, morse code chart, morse code numbers, international morse code',
};

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const NUMBERS = '0123456789'.split('');
const PUNCTUATION: [string, string][] = [
  ['.', 'Period'],
  [',', 'Comma'],
  ['?', 'Question'],
  ['!', 'Exclamation'],
  ['/', 'Slash'],
  ['(', 'Open paren'],
  [')', 'Close paren'],
  ['&', 'Ampersand'],
  [':', 'Colon'],
  [';', 'Semicolon'],
  ['=', 'Equals'],
  ['+', 'Plus'],
  ['-', 'Hyphen'],
  ['_', 'Underscore'],
  ['"', 'Quote'],
  ['@', 'At sign'],
];

// Mnemonics to help remember Morse code
const MNEMONICS: Record<string, string> = {
  A: 'a-PART',
  B: 'BOOT-to-the-head',
  C: 'CO-ca-CO-la',
  D: 'DOG-did-it',
  E: 'eh',
  F: 'for-a-FI-re',
  G: 'GOD-SAVE-the',
  H: 'ha-ha-ha-ha',
  I: 'i-bid',
  J: 'for-JOHN\'s-SAKE-PLEASE',
  K: 'KAN-ga-ROO',
  L: 'to-LIVE-a-lot',
  M: 'MORE-CODE',
  N: 'NA-vy',
  O: 'O-VER-FLOW',
  P: 'a-POW-ER-ful',
  Q: 'GOD-SAVE-the-QUEEN',
  R: 'ro-TA-tion',
  S: 'si-si-si',
  T: 'TALL',
  U: 'u-ni-FORM',
  V: 'vic-to-ri-A',
  W: 'a-WHITE-WHALE',
  X: 'EX-tra-DI-tion',
  Y: 'WHY-did-you-GO',
  Z: 'ZOO-KEEP-er-is',
};

export default function AlphabetPage() {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Morse Code Alphabet
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        The complete International Morse Code alphabet with all 26 letters, numbers 0-9,
        and common punctuation marks. Each character is represented by a unique combination of dots (·) and dashes (−).
      </p>

      {/* Letters A-Z */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Letters A-Z</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {LETTERS.map(letter => (
            <div
              key={letter}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-2xl font-bold text-white">{letter}</span>
                <span className="text-lg font-mono text-green-400 tracking-wider">
                  {CHAR_TO_MORSE[letter]}
                </span>
              </div>
              {MNEMONICS[letter] && (
                <p className="text-xs text-gray-500 mt-1 italic">{MNEMONICS[letter]}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Numbers 0-9 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Numbers 0-9</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {NUMBERS.map(num => (
            <div
              key={num}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-white">{num}</span>
                <span className="text-lg font-mono text-green-400 tracking-wider">
                  {CHAR_TO_MORSE[num]}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
          <p className="text-sm text-gray-400">
            <strong className="text-white">Pattern tip:</strong> Numbers 1-5 start with dots and add dashes.
            Numbers 6-0 start with dashes and add dots. For example: 1 = ·−−−− and 6 = −····
          </p>
        </div>
      </section>

      {/* Punctuation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Punctuation & Symbols</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {PUNCTUATION.map(([char, name]) => (
            <div
              key={char}
              className="bg-gray-900 border border-gray-800 rounded-lg p-3 flex items-center justify-between hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-white w-6 text-center">{char}</span>
                <span className="text-sm text-gray-400">{name}</span>
              </div>
              <span className="font-mono text-green-400 tracking-wider text-sm">
                {CHAR_TO_MORSE[char]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Timing Rules */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Morse Code Timing Rules</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-mono text-lg">·</span>
              <span><strong>Dot</strong> — 1 time unit duration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-mono text-lg">−</span>
              <span><strong>Dash</strong> — 3 time units (3× a dot)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 font-mono text-lg">⎵</span>
              <span><strong>Intra-character gap</strong> — 1 unit (between dots/dashes of the same letter)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 font-mono text-lg">⎵⎵⎵</span>
              <span><strong>Inter-letter gap</strong> — 3 units (between different letters)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 font-mono text-lg">⎵⎵⎵⎵⎵⎵⎵</span>
              <span><strong>Word gap</strong> — 7 units (between words)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Memory Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">How to Memorize the Morse Code Alphabet</h2>
        <div className="prose prose-invert prose-gray max-w-none">
          <p className="text-gray-400">
            The most effective way to learn Morse code is through <strong>sound-based methods</strong> rather than visual
            memorization. Here are three proven approaches:
          </p>
          <ol className="text-gray-400 space-y-3 mt-4">
            <li>
              <strong className="text-white">Koch Method</strong> — Start with just 2 characters at full speed. Add one new character
              only when you reach 90% accuracy. This builds instinctive recognition without visual crutches.
            </li>
            <li>
              <strong className="text-white">Farnsworth Method</strong> — Characters are sent at full speed (e.g., 20 WPM) but with
              extra spacing between them. As you improve, the spacing decreases.
            </li>
            <li>
              <strong className="text-white">Word Association</strong> — Use rhythmic mnemonics where stressed syllables represent
              dashes and unstressed syllables represent dots. For example: A = a-PART (·−), M = MORE-CODE (−−).
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <p className="text-gray-400 mb-4">Ready to practice?</p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/practice"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Start Practicing
          </Link>
          <Link
            href="/chart"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
          >
            Printable Chart →
          </Link>
        </div>
      </section>
      <AdBanner />
    </div>
  );
}
