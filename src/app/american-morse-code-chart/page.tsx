import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  path: '/american-morse-code-chart',
  title: 'American Morse Code Chart - Landline & Railroad Code',
  description:
    'Complete American Morse Code chart used on US landline and railroad telegraph circuits. See how American Morse differs from International Morse, with the full letter and number table.',
  keywords:
    'american morse code chart, american morse code, railroad morse code, landline morse code, morse code chart, american vs international morse code',
});

/**
 * American Morse Code (a.k.a. Railroad Morse / Landline Morse).
 *
 * Key differences from International Morse:
 *  - Element lengths are NOT fixed: dashes have two different lengths
 *    ("−" = short dash, "——" = long dash).
 *  - Several characters contain an internal space: C, O, R, Y, Z.
 *  - Letters L, O and the digit 0 use the long dash.
 *
 * The strings below use "." for a dot, "-" for a short dash, "—" for a long
 * dash, and a literal space for an internal gap. We render a visible "·" gap
 * marker so the internal spacing is not lost visually.
 */
const AMERICAN_LETTERS: Array<[string, string]> = [
  ['A', '.-'],
  ['B', '-...'],
  ['C', '.. .'],
  ['D', '-..'],
  ['E', '.'],
  ['F', '.-.'],
  ['G', '--.'],
  ['H', '....'],
  ['I', '..'],
  ['J', '-.-.'],
  ['K', '-.-'],
  ['L', '—'],
  ['M', '--'],
  ['N', '-.'],
  ['O', '. .'],
  ['P', '.....'],
  ['Q', '..-.'],
  ['R', '. ..'],
  ['S', '...'],
  ['T', '-'],
  ['U', '..-'],
  ['V', '...-'],
  ['W', '.--'],
  ['X', '.-..'],
  ['Y', '.. ..'],
  ['Z', '... .'],
];

const AMERICAN_NUMBERS: Array<[string, string]> = [
  ['1', '.--.'],
  ['2', '..-..'],
  ['3', '...-.'],
  ['4', '....-'],
  ['5', '---'],
  ['6', '......'],
  ['7', '--..'],
  ['8', '-....'],
  ['9', '-..-'],
  ['0', '—'],
];

/** Render a code string, making internal gaps visible and enlarging long dashes. */
function renderCode(code: string): string {
  return code
    .replace(/—/g, '———')
    .replace(/\./g, '·')
    .replace(/-/g, '−')
    .replace(/ /g, ' · ');
}

export default function AmericanMorseCodeChartPage() {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">American Morse Code Chart</h1>
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
        American Morse Code — also called <strong className="text-gray-200">Railroad Morse</strong>{' '}
        or <strong className="text-gray-200">Landline Morse</strong> — is the original Morse code
        developed for US wire telegraphy. It is <em>not</em> the same code as the international
        standard, and the two are mutually unreadable.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">What Makes American Morse Different?</h2>
        <div className="text-gray-300 space-y-3 leading-relaxed">
          <p>
            International Morse Code was deliberately simplified so it could be sent by a single
            mechanical key over radio. American Morse preserves the quirks of the original 1840s
            landline system, and those quirks are what trip people up:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <strong className="text-white">Dashes have two different lengths.</strong> There is a
              short dash (−) and a distinctly longer dash (———). In International Morse every dash
              is identical.
            </li>
            <li>
              <strong className="text-white">Some characters contain an internal gap.</strong>{' '}
              C, O, R, Y and Z each contain a space <em>inside</em> the character. In International
              Morse a gap inside a character never happens.
            </li>
            <li>
              <strong className="text-white">L and 0 are a single long dash.</strong> The letter L
              and the digit 0 are represented by one long dash — the two are distinguished only by
              context.
            </li>
          </ul>
          <p>
            These extra distinctions are exactly why American Morse was impractical for radio, and
            why the International variant displaced it almost everywhere.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">American Morse Code Chart</h2>
        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mb-6 text-center print:hidden">
          <p className="text-blue-300 text-sm">
            💡 A visible <span className="font-mono">·</span> marks an internal gap.{' '}
            <span className="font-mono">———</span> is the long dash. Press{' '}
            <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-xs">⌘+P</kbd> to save as PDF.
          </p>
        </div>

        <div className="bg-white text-black rounded-lg p-8 print:p-0 print:rounded-none">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">American Morse Code</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Railroad / landline telegraph code — morsecodenow.com
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Letters</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 print:grid-cols-4">
              {AMERICAN_LETTERS.map(([letter, code]) => (
                <div key={letter} className="flex items-center gap-2 py-1.5 px-2 border border-gray-200 rounded">
                  <span className="text-lg font-bold w-5">{letter}</span>
                  <span className="font-mono text-sm tracking-wider">{renderCode(code)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Numbers</h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 print:grid-cols-5">
              {AMERICAN_NUMBERS.map(([num, code]) => (
                <div key={num} className="flex items-center gap-2 py-1.5 px-2 border border-gray-200 rounded">
                  <span className="text-lg font-bold w-5">{num}</span>
                  <span className="font-mono text-sm tracking-wider">{renderCode(code)}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">
              Side-by-Side Differences
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left">Char</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">American Morse</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">International Morse</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['C', '.. .', '-.-.'],
                    ['O', '. .', '---'],
                    ['R', '. ..', '.-.'],
                    ['Y', '.. ..', '-.--'],
                    ['Z', '... .', '--..'],
                    ['L', '———', '.-..'],
                    ['0', '———', '-----'],
                    ['5', '---', '.....'],
                  ].map(([char, american, intl]) => (
                    <tr key={char}>
                      <td className="border border-gray-300 px-3 py-2 font-bold">{char}</td>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">{american}</td>
                      <td className="border border-gray-300 px-3 py-2 font-mono text-xs">{intl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Where You Still See It</h2>
        <div className="text-gray-300 space-y-3 leading-relaxed">
          <p>
            American Morse is obsolete for practical communication, but it survives in three places:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className="text-white">Historical railroad preservation</strong> — railroad
              museums and heritage lines still demonstrate it.
            </li>
            <li>
              <strong className="text-white">Landline telegraphy enthusiasts</strong> — hobbyists
              running restored wire circuits, where the code was designed to be read from a
              sounder rather than a radio tone.
            </li>
            <li>
              <strong className="text-white">Puzzle and puzzle-hunt design</strong> — because C, O,
              R, Y and Z differ from the international forms, a puzzle can use American Morse to
              catch solvers who assume International.
            </li>
          </ul>
        </div>
      </section>

      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/international-morse-code-chart"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            International Morse Chart →
          </Link>
          <Link
            href="/chart"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Printable Chart →
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
