import type { Metadata } from 'next';
import Link from 'next/link';
import { CHAR_TO_MORSE } from '@/lib/morse';

export const metadata: Metadata = {
  title: 'Morse Code Numbers - Complete 0-9 Chart & Examples',
  description:
    'Morse code numbers explained: complete 0-9 chart, the pattern rule that makes them easy to memorize, and examples of how to send multi-digit numbers like 2026 and 143.',
  keywords:
    'morse code numbers, morse code numbers 1-10, morse code numbers 0-9, how to write numbers in morse code, morse code digits',
};

const NUMBERS = '0123456789'.split('');

const MEMORY_RULES = [
  { range: '1 – 5', rule: 'Start with dots and add dashes', example: '1 = ·−−−−  →  5 = ·····' },
  { range: '6 – 0', rule: 'Start with dashes and add dots', example: '6 = −····  →  0 = −−−−−' },
];

const EXAMPLES = [
  { value: '2026', morse: '··−−− −−−−− ··−−− −····' },
  { value: '143', morse: '·−−−− ····− ···−−' },
  { value: '007', morse: '−−−−− −−−−− −−···' },
  { value: '911', morse: '−−−−. ·−−−− ·−−−−' },
  { value: '100', morse: '·−−−− −−−−− −−−−−' },
];

export default function NumbersPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Morse Code Numbers
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Numbers in Morse code follow a simple, elegant pattern — once you learn it, you will never
        need to look up a chart again.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Complete Number Chart (0-9)</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {NUMBERS.map(num => (
            <div
              key={num}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-white">{num}</span>
                <span className="text-lg font-mono text-green-400 tracking-wider">
                  {CHAR_TO_MORSE[num].replace(/\./g, '·').replace(/-/g, '−')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The Pattern Rule (Easy to Memorize)</h2>
        <div className="space-y-4">
          {MEMORY_RULES.map(({ range, rule, example }) => (
            <div key={range} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <p className="text-white font-bold mb-1">Numbers {range}</p>
              <p className="text-gray-300 text-sm mb-2">{rule}</p>
              <p className="font-mono text-green-400 text-sm">{example}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
          <p className="text-sm text-gray-400">
            <strong className="text-white">Why it works:</strong> Every number is exactly five signals long.
            Numbers 1-5 start with dots and gain one dash each step. Numbers 6-0 are the mirror image —
            they start with dashes and gain one dot each step. Once you remember that <strong className="text-white">5 = ·····</strong> and
            <strong className="text-white"> 0 = −−−−−</strong>, the rest follows automatically.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Examples: Writing Multi-Digit Numbers</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-800/50">
                <th className="text-left py-3 px-4 text-gray-300">Number</th>
                <th className="text-left py-3 px-4 text-gray-300">Morse Code</th>
              </tr>
            </thead>
            <tbody>
              {EXAMPLES.map(row => (
                <tr key={row.value} className="border-b border-gray-800 last:border-0">
                  <td className="py-3 px-4 text-white font-bold">{row.value}</td>
                  <td className="py-3 px-4 font-mono text-green-400 tracking-wider">{row.morse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mt-3">
          Multi-digit numbers are sent as a continuous sequence with no extra gap between digits — the
          five-signal length of each digit makes them easy to separate by ear.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <summary className="font-medium text-white cursor-pointer">How do you write numbers 1-10 in Morse code?</summary>
            <p className="text-gray-400 text-sm mt-2">
              1 = ·−−−−, 2 = ··−−−, 3 = ···−−, 4 = ····−, 5 = ·····, 6 = −····, 7 = −−···, 8 = −−−··, 9 = −−−−·,
              10 is written as two digits: 1 (·−−−−) followed by 0 (−−−−−), giving ·−−−− −−−−−.
            </p>
          </details>
          <details className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <summary className="font-medium text-white cursor-pointer">Is there a separate Morse code for numbers and letters?</summary>
            <p className="text-gray-400 text-sm mt-2">
              No — numbers and letters use the same system, just different sequences. There is no ambiguity
              because no letter shares the exact same code as a number (letters are 1-4 signals long, while
              numbers are always 5 signals long).
            </p>
          </details>
          <details className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <summary className="font-medium text-white cursor-pointer">What is 143 in Morse code?</summary>
            <p className="text-gray-400 text-sm mt-2">
              143 in Morse code is ·−−−− ····− ···−−. Note that &ldquo;143&rdquo; is separately known as a numeric
              code for &ldquo;I Love You&rdquo; (1 letter + 4 letters + 3 letters), but that is a different code system,
              not Morse.
            </p>
          </details>
        </div>
      </section>

      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Translate Numbers Now
          </Link>
          <Link href="/alphabet" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors">
            Letters A-Z →
          </Link>
        </div>
      </section>
    </div>
  );
}
