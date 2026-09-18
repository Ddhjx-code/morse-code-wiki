import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import MorseTranslator from '@/components/MorseTranslator';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  path: '/morse-code-generator',
  title: 'Morse Code Generator - Convert Text to Morse Instantly',
  description:
    'Free Morse code generator. Type any text and get the Morse code instantly, ready to copy, paste, or play as audio. No signup and no download required.',
  keywords:
    'morse code generator, text to morse code, morse code converter, generate morse code, morse code encoder, morse code maker',
});

const USE_CASES: Array<{ title: string; body: string }> = [
  {
    title: 'Jewellery and engraving',
    body: 'Generate the exact code for a name, date, or short phrase, then hand the dots and dashes to an engraver. Check the output character by character — a single wrong element changes the letter.',
  },
  {
    title: 'Tattoo design',
    body: 'Produce the code for a phrase, then take it into the tattoo generator to lay it out as a linear, bracelet, or vertical design before your appointment.',
  },
  {
    title: 'Puzzle and game design',
    body: 'Encode clues or answers for escape rooms and puzzle hunts. Copy the output straight into your document with the spacing preserved.',
  },
  {
    title: 'Learning and practice',
    body: 'Type a word, read the code, then send it by hand and check yourself. Playing the audio back at speed is a fast way to test whether you can copy by ear.',
  },
];

export default function MorseCodeGeneratorPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Morse Code Generator</h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
        Type or paste any text below and it converts to International Morse Code as you go. Copy the
        result, or play it back as audio to hear the rhythm.
      </p>

      <section className="mb-12">
        <MorseTranslator initialMode="textToMorse" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">How the Encoding Works</h2>
        <div className="text-gray-300 space-y-3 leading-relaxed">
          <p>
            The generator maps each character to its International Morse Code pattern, then joins
            them with the standard separators:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className="text-white">Between characters</strong> — a single space. This tells
              the receiver one character has ended and the next begun.
            </li>
            <li>
              <strong className="text-white">Between words</strong> — three spaces, shown here as a
              slash <span className="font-mono">/</span>.
            </li>
            <li>
              <strong className="text-white">Inside a character</strong> — no space. Dots and dashes
              run together, and their order alone identifies the letter.
            </li>
          </ul>
          <p>
            That spacing is not cosmetic. If you strip it out,{' '}
            <span className="font-mono">.−</span> (A) becomes indistinguishable from{' '}
            <span className="font-mono">.−.</span> (R) plus something else. Keep the separators
            intact when you copy the output.
          </p>
          <p>
            Unsupported characters — emoji, accented letters, and anything outside the standard
            table — are dropped rather than guessed, so the output stays decodable.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">What People Generate</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {USE_CASES.map(({ title, body }) => (
            <div key={title} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Going the Other Way</h2>
        <p className="text-gray-300 leading-relaxed">
          If you already have Morse code and need the English back, use the{' '}
          <Link
            href="/morse-code-translator-to-english"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Morse code to English translator
          </Link>{' '}
          — it runs in the opposite direction and handles the gap parsing for you.
        </p>
      </section>

      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/morse-code-translator-to-english"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Morse → English →
          </Link>
          <Link
            href="/audio"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Audio Translator →
          </Link>
          <Link
            href="/tattoo-generator"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Tattoo Generator →
          </Link>
        </div>
      </section>

      <AdBanner />
    </div>
  );
}
