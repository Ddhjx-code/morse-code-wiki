import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import { CHAR_TO_MORSE } from '@/lib/morse';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  path: '/international-morse-code-chart',
  title: 'International Morse Code Chart - ITU Standard Reference',
  description:
    'Complete International Morse Code chart per the ITU standard: letters A-Z, numbers 0-9, punctuation, and procedural signals. Includes timing rules and how International Morse differs from American Morse.',
  keywords:
    'international morse code chart, international morse code, ITU morse code, morse code chart, standard morse code, morse code alphabet chart',
});

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const NUMBERS = '0123456789'.split('');

const PUNCTUATION: Array<[string, string, string]> = [
  ['.', 'Period', '.-.-.-'],
  [',', 'Comma', '--..--'],
  ['?', 'Question mark', '..--..'],
  ["'", 'Apostrophe', '.----.'],
  ['!', 'Exclamation', '-.-.--'],
  ['/', 'Slash', '-..-.'],
  ['(', 'Open paren', '-.--.'],
  [')', 'Close paren', '-.--.-'],
  ['&', 'Ampersand', '.-...'],
  [':', 'Colon', '---...'],
  [';', 'Semicolon', '-.-.-.'],
  ['=', 'Equals', '-...-'],
  ['+', 'Plus', '.-.-.'],
  ['-', 'Hyphen', '-....-'],
  ['_', 'Underscore', '..--.-'],
  ['"', 'Quote', '.-..-.'],
  ['$', 'Dollar', '...-..-'],
  ['@', 'At sign', '.--.-.'],
];

const PROSIGNS: Array<[string, string, string]> = [
  ['AR', 'End of message', '.-.-.'],
  ['AS', 'Wait', '.-...'],
  ['BT', 'New paragraph', '-...-'],
  ['KA', 'Start of message', '-.-.-'],
  ['KN', 'Invite specific station to transmit', '-.--.'],
  ['SK', 'End of contact', '...-.-'],
  ['SOS', 'Distress', '...---...'],
  ['HH', 'Correction / error', '........'],
];

function formatMorse(code: string): string {
  return code.replace(/\./g, '·').replace(/-/g, '−');
}

export default function InternationalMorseCodeChartPage() {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        International Morse Code Chart
      </h1>
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
        The complete International Morse Code chart as standardised by the ITU. This is the code
        used worldwide for radio, aviation, maritime, and amateur operation — and the one most
        people mean when they say &quot;Morse code&quot;.
      </p>

      {/* What it is */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">What Is International Morse Code?</h2>
        <div className="text-gray-300 space-y-3 leading-relaxed">
          <p>
            International Morse Code is the standardised dot-and-dash telegraph code maintained by
            the International Telecommunication Union (ITU), specified in recommendation{' '}
            <strong className="text-white">ITU-R M.1677</strong>. It is the successor to the
            original Morse code developed for landline telegraphy in the 1840s, with the
            international variant standardised in <strong className="text-white">1865</strong>.
          </p>
          <p>
            The essential design principle: <strong className="text-white">the more common a
            letter is in English, the shorter its code</strong>. The single most frequent letter,
            E, is a single dot; the rarest letters get four-element codes. This is why Morse
            remains usable at speed despite a variable-length encoding.
          </p>
          <p>
            It is called <em>International</em> Morse specifically to distinguish it from{' '}
            <Link href="/american-morse-code-chart" className="text-blue-400 hover:text-blue-300 underline">
              American Morse Code
            </Link>
            , a different and incompatible code used on US landline and railroad circuits.
          </p>
        </div>
      </section>

      {/* Printable chart */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Full Chart (Printable)</h2>
        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mb-6 text-center print:hidden">
          <p className="text-blue-300 text-sm">
            💡 <strong>To save as PDF:</strong> press{' '}
            <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-xs">Ctrl+P</kbd> (Windows) or{' '}
            <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-xs">⌘+P</kbd> (Mac), then choose
            &quot;Save as PDF&quot;.
          </p>
        </div>

        <div className="bg-white text-black rounded-lg p-8 print:p-0 print:rounded-none">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">International Morse Code</h3>
            <p className="text-gray-600 mt-1 text-sm">ITU-R M.1677 standard — morsecodenow.com</p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Letters</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 print:grid-cols-6">
              {LETTERS.map(letter => (
                <div key={letter} className="flex items-center gap-2 py-1.5 px-2 border border-gray-200 rounded">
                  <span className="text-lg font-bold w-5">{letter}</span>
                  <span className="font-mono text-sm tracking-wider">{formatMorse(CHAR_TO_MORSE[letter])}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Numbers</h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 print:grid-cols-5">
              {NUMBERS.map(num => (
                <div key={num} className="flex items-center gap-2 py-1.5 px-2 border border-gray-200 rounded">
                  <span className="text-lg font-bold w-5">{num}</span>
                  <span className="font-mono text-sm tracking-wider">{formatMorse(CHAR_TO_MORSE[num])}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Punctuation</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 print:grid-cols-2">
              {PUNCTUATION.map(([char, name, code]) => (
                <div key={char} className="flex items-center gap-2 py-1.5 px-2 border border-gray-200 rounded">
                  <span className="text-lg font-bold w-5">{char}</span>
                  <span className="text-xs text-gray-500 flex-1">{name}</span>
                  <span className="font-mono text-sm tracking-wider">{formatMorse(code)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">
              Procedural Signals (Prosigns)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 print:grid-cols-2">
              {PROSIGNS.map(([name, meaning, code]) => (
                <div key={name} className="flex items-center gap-2 py-1.5 px-2 border border-gray-200 rounded">
                  <span className="font-bold w-12">{name}</span>
                  <span className="text-xs text-gray-500 flex-1">{meaning}</span>
                  <span className="font-mono text-sm tracking-wider">{formatMorse(code)}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Timing</h4>
            <div className="text-sm space-y-1">
              <p>• Dot (·) = 1 unit &nbsp;|&nbsp; Dash (−) = 3 units</p>
              <p>• Gap between elements of the same character = 1 unit</p>
              <p>• Gap between characters = 3 units</p>
              <p>• Gap between words = 7 units</p>
              <p className="pt-2 text-gray-600">
                • Word speed is measured using the standard word <strong>PARIS</strong> (50 units)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International vs American */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          International Morse vs American Morse
        </h2>
        <p className="text-gray-400 mb-6">
          These are two genuinely different codes, not dialects. A message sent in one is not
          readable in the other. The most visible differences:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">International Morse</th>
                <th className="px-4 py-3">American Morse</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ['Standard', 'ITU-R M.1677', 'Historical US landline practice'],
                ['Primary use', 'Radio, aviation, maritime', 'Railroad & landline telegraph'],
                ['Element lengths', 'Fixed: dot=1, dash=3', 'Variable — dashes differ by letter'],
                ['Internal spacing', 'Uniform 1 unit', 'Some letters contain long internal gaps'],
                ['Letter C', '−·−·', '·· ·· (two dots, space, two dots)'],
                ['Letter O', '−−−', '· · (dot, space, dot)'],
                ['Status today', 'In active worldwide use', 'Essentially obsolete'],
              ].map(([feature, intl, american]) => (
                <tr key={feature} className="border-t border-gray-800">
                  <td className="px-4 py-3 font-medium text-white">{feature}</td>
                  <td className="px-4 py-3">{intl}</td>
                  <td className="px-4 py-3">{american}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 mt-4">
          See the dedicated{' '}
          <Link href="/american-morse-code-chart" className="text-blue-400 hover:text-blue-300 underline">
            American Morse Code chart
          </Link>{' '}
          for the full table of its differences.
        </p>
      </section>

      {/* Related */}
      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/chart"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Printable Chart →
          </Link>
          <Link
            href="/alphabet"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Alphabet Details →
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Try the Translator →
          </Link>
        </div>
      </section>

      <AdBanner />
    </div>
  );
}
