import type { Metadata } from 'next';
import { CHAR_TO_MORSE } from '@/lib/morse';
import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import RelatedPages from '@/components/RelatedPages';

export const metadata: Metadata = {
  alternates: { canonical: '/chart' },
  title: 'Morse Code Chart - Printable PDF Reference Sheet',
  description:
    'Free printable Morse code chart with letters A-Z, numbers 0-9, and common symbols. Download as PDF or print directly from your browser. Includes binary tree decoder.',
  keywords:
    'morse code chart, morse code chart printable, morse code pdf, morse code reference, morse code tree, morse code printable free',
};

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const NUMBERS = '0123456789'.split('');

export default function ChartPage() {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Morse Code Chart
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
        A clean, printable Morse code reference chart. Use your browser&apos;s print function
        (Ctrl+P / Cmd+P) to print this page or save as PDF.
      </p>

      {/* Print Instructions */}
      <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mb-8 text-center print:hidden">
        <p className="text-blue-300 text-sm">
          💡 <strong>To save as PDF:</strong> Press <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-xs">Ctrl+P</kbd> (Windows)
          or <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-xs">⌘+P</kbd> (Mac) and select &quot;Save as PDF&quot; as the destination.
        </p>
      </div>

      {/* Printable Chart Area */}
      <div className="bg-white text-black rounded-lg p-8 print:p-0 print:rounded-none print:shadow-none">
        {/* Chart Header */}
        <div className="text-center mb-8 print:mb-6">
          <h2 className="text-3xl font-bold print:text-2xl">International Morse Code</h2>
          <p className="text-gray-600 mt-1 text-sm">Complete reference chart — morsecodenow.com</p>
        </div>

        {/* Letters Table */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Letters</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 print:grid-cols-6">
            {LETTERS.map(letter => (
              <div key={letter} className="flex items-center gap-2 py-1.5 px-2 border border-gray-200 rounded">
                <span className="text-lg font-bold w-5">{letter}</span>
                <span className="font-mono text-sm tracking-wider">{formatMorse(CHAR_TO_MORSE[letter])}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Numbers Table */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Numbers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 print:grid-cols-5">
            {NUMBERS.map(num => (
              <div key={num} className="flex items-center gap-2 py-1.5 px-2 border border-gray-200 rounded">
                <span className="text-lg font-bold w-5">{num}</span>
                <span className="font-mono text-sm tracking-wider">{formatMorse(CHAR_TO_MORSE[num])}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Punctuation */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Punctuation</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 print:grid-cols-3">
            {[
              ['.', 'Period', '.-.-.-'],
              [',', 'Comma', '--..--'],
              ['?', 'Question', '..--..'],
              ['!', 'Exclamation', '-.-.--'],
              ['/', 'Slash', '-..-.'],
              ['@', 'At', '.--.-.'],
            ].map(([char, name, code]) => (
              <div key={char} className="flex items-center gap-2 py-1.5 px-2 border border-gray-200 rounded">
                <span className="text-lg font-bold w-5">{char}</span>
                <span className="text-xs text-gray-500">{name}</span>
                <span className="font-mono text-sm tracking-wider ml-auto">{formatMorse(code)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timing Guide */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Timing</h3>
          <div className="text-sm space-y-1">
            <p>• Dot (·) = 1 unit &nbsp;|&nbsp; Dash (−) = 3 units</p>
            <p>• Between elements of same letter = 1 unit gap</p>
            <p>• Between letters = 3 unit gap</p>
            <p>• Between words = 7 unit gap</p>
          </div>
        </div>

        {/* Common Words */}
        <div>
          <h3 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Common Phrases</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm print:grid-cols-2">
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span>SOS</span>
              <span className="font-mono">··· −−− ···</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span>HELLO</span>
              <span className="font-mono">···· · ·−·· ·−·· −−−</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span>I LOVE YOU</span>
              <span className="font-mono">·· / ·−·· −−− ···− · / −·−− −−− ··−</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span>HELP</span>
              <span className="font-mono">···· · ·−·· ·−−·</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span>YES</span>
              <span className="font-mono">−·−− · ···</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span>NO</span>
              <span className="font-mono">−· −−−</span>
            </div>
          </div>
        </div>
      </div>

      {/* Binary Tree Decoder (screen only) */}
      <section className="mt-12 print:hidden">
        <h2 className="text-2xl font-bold text-white mb-6">Morse Code Binary Tree</h2>
        <p className="text-gray-400 mb-6">
          The Morse code tree is a visual method to decode Morse signals. Starting from the top,
          move <strong>left for a dot (·)</strong> and <strong>right for a dash (−)</strong> to find each letter.
        </p>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 overflow-x-auto">
          <pre className="text-xs sm:text-sm font-mono text-green-400 leading-relaxed whitespace-pre">
{`                        START
                       /     \\
                  ·  /         \\  −
                   E             T
                 /   \\         /   \\
               ·/     \\−     ·/     \\−
               I       A     N       M
              / \\     / \\   / \\     / \\
             S   U   R   W D   K   G   O
            /\\  /\\  /\\  /  /\\  /\\  /\\  /\\
           H V  F    L  P  B X  C Y  Z Q`}
          </pre>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-12 print:hidden text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/alphabet"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Full Alphabet Details →
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Try the Translator →
          </Link>
          <Link
            href="/practice"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Practice Online →
          </Link>
        </div>
      </section>
      <RelatedPages currentPath="/chart" />
      <AdBanner />
    </div>
  );
}

/** Format morse code with proper dot/dash unicode characters */
function formatMorse(code: string): string {
  return code.replace(/\./g, '·').replace(/-/g, '−');
}
