import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import RelatedPages from '@/components/RelatedPages';
import MorseTranslator from '@/components/MorseTranslator';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  path: '/morse-code-translator-to-english',
  title: 'Morse Code to English Translator - Instant Decode',
  description:
    'Translate Morse code to English instantly. Paste dots and dashes to decode them into readable text, with an explanation of character gaps, word gaps, and why a decode can fail.',
  keywords:
    'morse code to english, morse code translator to english, convert morse code to english, decode morse code, morse code to text, morse code decoder',
});

const EXAMPLES: Array<[string, string, string]> = [
  ['SOS', '... --- ...', 'Distress signal'],
  ['HELLO', '.... . .-.. .-.. ---', 'Common greeting'],
  ['HELP', '.... . .-.. .--.', 'Request for assistance'],
  ['YES', '-.-- . ...', 'Affirmative'],
  ['NO', '-. ---', 'Negative'],
  ['OK', '--- -.-', 'Acknowledgement'],
  ['CQ', '-.-. --.-', 'Calling any station'],
];

function formatMorse(code: string): string {
  return code.replace(/\./g, '·').replace(/-/g, '−');
}

export default function MorseCodeToEnglishPage() {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Morse Code to English Translator
      </h1>
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-8">
        Paste Morse code below and it decodes to English as you type. This page opens in the
        Morse&nbsp;→&nbsp;English direction, so the top box takes dots and dashes and the bottom box
        shows the decoded text.
      </p>

      <section className="mb-12">
        <MorseTranslator initialMode="morseToText" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">How the Decoding Works</h2>
        <div className="text-gray-300 space-y-3 leading-relaxed">
          <p>
            Morse code is a variable-length code, so decoding is not a simple character-by-character
            substitution. Gaps carry as much meaning as the dots and dashes themselves:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className="text-white">Dot (·) and dash (−)</strong> — the two signal elements. A
              dash is three times as long as a dot.
            </li>
            <li>
              <strong className="text-white">Gap of 1 unit</strong> — separates elements{' '}
              <em>inside</em> a single character. This is how <span className="font-mono">.-</span>{' '}
              stays distinct from <span className="font-mono">.-.</span>.
            </li>
            <li>
              <strong className="text-white">Gap of 3 units</strong> — separates characters. This is
              what tells the decoder one letter has ended and the next begun.
            </li>
            <li>
              <strong className="text-white">Gap of 7 units</strong> — separates words.
            </li>
          </ul>
          <p>
            When you paste a block of text, the decoder infers these boundaries from the spacing
            you provide. Use a single space between characters and three spaces (or a slash{' '}
            <span className="font-mono">/</span>) between words for the most reliable result.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Common Morse Code to English Examples</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-3">English</th>
                <th className="px-4 py-3">Morse code</th>
                <th className="px-4 py-3">Meaning / use</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {EXAMPLES.map(([english, morse, note]) => (
                <tr key={english} className="border-t border-gray-800">
                  <td className="px-4 py-3 font-medium text-white">{english}</td>
                  <td className="px-4 py-3 font-mono tracking-wider">{formatMorse(morse)}</td>
                  <td className="px-4 py-3 text-gray-400">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 mt-4">
          The single most recognised one is{' '}
          <Link href="/sos" className="text-blue-400 hover:text-blue-300 underline">
            SOS
          </Link>{' '}
          — three dots, three dashes, three dots — which is sent as one continuous signal with no
          gaps between the letters.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Why a Decode Sometimes Fails</h2>
        <div className="space-y-4">
          {[
            {
              q: 'The output is gibberish',
              a: 'Almost always a spacing problem. If characters are run together with no gaps, the decoder cannot know where one letter ends. Insert a single space between each character.',
            },
            {
              q: 'Words are merged into one long string',
              a: 'Word gaps were lost. Separate words with three spaces or a "/" so the decoder can tell them apart.',
            },
            {
              q: 'Some characters decode to nothing',
              a: 'You may be inputting an unsupported punctuation mark, or mixing the American and International tables. The two codes assign different patterns to C, O, R, Y and Z — see the American Morse chart if your source is a historical railroad document.',
            },
            {
              q: 'Dashes look like dots',
              a: 'If the source used a very short dash, or was transcribed by ear, the length distinction can blur. Dashes should be three times the length of a dot.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <h3 className="font-semibold text-white mb-1">{q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/alphabet"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Full Alphabet →
          </Link>
          <Link
            href="/american-morse-code-chart"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            American Morse Chart →
          </Link>
          <Link
            href="/audio"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Morse Audio Translator →
          </Link>
        </div>
      </section>

      <RelatedPages currentPath="/morse-code-translator-to-english" />
      <AdBanner />
    </div>
  );
}
