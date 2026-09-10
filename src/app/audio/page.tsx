import type { Metadata } from 'next';
import AudioTranslator from './AudioTranslator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Morse Code Audio Translator - Listen & Decode Sound',
  description:
    'Free Morse code audio translator. Convert text to Morse code audio, play it at adjustable speed, and learn to decode Morse code by ear. No download needed.',
  keywords:
    'morse code audio translator, morse code audio decoder, morse code sound, morse code audio to text, morse code audio generator',
};

export default function AudioPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Morse Code Audio Translator
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Listen to any text as Morse code audio. Adjust speed (WPM) and frequency to match
        your learning level. Practice decoding by ear — the most effective way to learn Morse code.
      </p>

      <AudioTranslator />

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-6">How Morse Code Audio Works</h2>
        <div className="prose prose-invert prose-gray max-w-none">
          <p className="text-gray-400">
            Morse code audio uses a single tone (typically 600-800 Hz) with specific timing patterns:
          </p>
          <ul className="text-gray-400 space-y-2 mt-4">
            <li><strong className="text-white">Dot (·)</strong> — Short beep, 1 unit duration</li>
            <li><strong className="text-white">Dash (−)</strong> — Long beep, 3 units duration</li>
            <li><strong className="text-white">Intra-character gap</strong> — 1 unit silence between dots/dashes in the same letter</li>
            <li><strong className="text-white">Inter-letter gap</strong> — 3 units silence between letters</li>
            <li><strong className="text-white">Inter-word gap</strong> — 7 units silence between words</li>
          </ul>
          <p className="text-gray-400 mt-4">
            The standard reference speed is <strong className="text-white">20 WPM</strong> (words per minute),
            based on the word &quot;PARIS&quot; as a timing reference. Beginners should start at 15 WPM
            and gradually increase as recognition improves.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Why Learn Morse Code by Audio?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">🎧 Sound Recognition Beats Visual</h3>
            <p className="text-sm text-gray-400">
              Counting dots and dashes visually is slow and unreliable. Experienced operators
              recognize letters by their unique rhythm — just like you recognize words by sound, not by spelling.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">⚡ Real-World Applications</h3>
            <p className="text-sm text-gray-400">
              Amateur radio operators decode Morse code by ear in real-time. Emergency signals
              (SOS) are sent as audio. Learning by sound prepares you for actual use cases.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">📈 Progressive Speed</h3>
            <p className="text-sm text-gray-400">
              Start at 10-15 WPM with extra spacing between letters. As you improve,
              increase character speed while reducing gaps. This is the Farnsworth method.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">🎵 Frequency Matters</h3>
            <p className="text-sm text-gray-400">
              Standard practice frequency is 700 Hz. Lower frequencies (400-500 Hz) are easier
              for beginners. Higher frequencies (800-1000 Hz) match real amateur radio conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/practice" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
            Practice Decoding →
          </Link>
          <Link href="/alphabet" className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors">
            Alphabet Reference →
          </Link>
          <Link href="/" className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors">
            Text Translator →
          </Link>
        </div>
      </section>
    </div>
  );
}
