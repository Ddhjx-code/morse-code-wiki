import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import RelatedPages from '@/components/RelatedPages';
import { CHAR_TO_MORSE } from '@/lib/morse';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  path: '/morse-code-chart-pdf',
  title: 'Morse Code Chart PDF - Free Printable Download',
  description:
    'Download a free Morse code chart PDF. Print the full A-Z, 0-9 and punctuation reference at A4 or Letter size, with printing tips for a clean black-and-white copy.',
  keywords:
    'morse code chart pdf, morse code pdf, printable morse code chart, morse code chart download, free morse code chart, morse code reference pdf',
});

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const NUMBERS = '0123456789'.split('');

const PUNCTUATION: Array<[string, string]> = [
  ['.', '.-.-.-'],
  [',', '--..--'],
  ['?', '..--..'],
  ['!', '-.-.--'],
  ['/', '-..-.'],
  ['@', '.--.-.'],
];

function formatMorse(code: string): string {
  return code.replace(/\./g, '·').replace(/-/g, '−');
}

export default function MorseCodeChartPdfPage() {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Morse Code Chart PDF</h1>
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
        A clean, printer-friendly Morse code chart you can save as a PDF in two clicks — no signup,
        no email, no watermarked download button.
      </p>

      {/* How to get the PDF */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">How to Save This Chart as a PDF</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              step: '1',
              title: 'Open the print dialog',
              body: 'Press ⌘+P on macOS or Ctrl+P on Windows / Linux.',
            },
            {
              step: '2',
              title: 'Choose "Save as PDF"',
              body: 'Set the destination to "Save as PDF" (Chrome, Edge, Firefox). On macOS you can also use "PDF ▸ Save as PDF".',
            },
            {
              step: '3',
              title: 'Print the chart',
              body: 'Scroll to the chart below and confirm it fits one page. Then save — that is your PDF.',
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="bg-gray-900 border border-gray-800 rounded-lg p-5 print:hidden">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold">
                  {step}
                </span>
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-4 print:hidden">
          Everything below is marked to print cleanly — the dark UI chrome and ad slots are
          automatically hidden when you print, so the PDF contains only the chart.
        </p>
      </section>

      {/* Printable chart */}
      <section className="mb-12">
        <div className="bg-white text-black rounded-lg p-8 print:p-0 print:rounded-none">
          <div className="text-center mb-8 print:mb-6">
            <h2 className="text-3xl font-bold print:text-2xl">Morse Code Chart</h2>
            <p className="text-gray-600 mt-1 text-sm">Letters · Numbers · Punctuation — morsecodenow.com</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Letters</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 print:grid-cols-6">
              {LETTERS.map(letter => (
                <div key={letter} className="flex items-center gap-2 py-1.5 px-2 border border-gray-200 rounded">
                  <span className="text-lg font-bold w-5">{letter}</span>
                  <span className="font-mono text-sm tracking-wider">
                    {formatMorse(CHAR_TO_MORSE[letter])}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Numbers</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 print:grid-cols-5">
              {NUMBERS.map(num => (
                <div key={num} className="flex items-center gap-2 py-1.5 px-2 border border-gray-200 rounded">
                  <span className="text-lg font-bold w-5">{num}</span>
                  <span className="font-mono text-sm tracking-wider">
                    {formatMorse(CHAR_TO_MORSE[num])}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Common Punctuation</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 print:grid-cols-3">
              {PUNCTUATION.map(([char, code]) => (
                <div key={char} className="flex items-center gap-2 py-1.5 px-2 border border-gray-200 rounded">
                  <span className="text-lg font-bold w-5">{char}</span>
                  <span className="font-mono text-sm tracking-wider">{formatMorse(code)}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 border-b-2 border-black pb-1">Timing Rules</h3>
            <div className="text-sm space-y-1">
              <p>• Dot (·) = 1 unit &nbsp;|&nbsp; Dash (−) = 3 units</p>
              <p>• Same character, between elements = 1 unit</p>
              <p>• Between characters = 3 units</p>
              <p>• Between words = 7 units</p>
            </div>
          </div>
        </div>
      </section>

      {/* Printing tips */}
      <section className="mb-12 print:hidden">
        <h2 className="text-2xl font-bold text-white mb-4">Printing Tips</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Paper size',
              a: 'The chart is laid out to fit A4 and US Letter without scaling. If your printer defaults to "Fit to page", turn it off so the grid lines stay crisp.',
            },
            {
              q: 'Black and white',
              a: 'The chart uses a white background with black text, so it prints cleanly on a mono laser printer. Disable "background graphics" if your browser offers the option — the chart does not need it.',
            },
            {
              q: 'Which parts print',
              a: 'Ad slots, navigation and the explanatory text are hidden when printing. Only the chart itself appears in the PDF.',
            },
            {
              q: 'Want it on one page?',
              a: 'Choose landscape orientation and set margins to "Minimum" — the full letters and numbers tables then fit a single sheet.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <h3 className="font-semibold text-white mb-1">{q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="text-center print:hidden">
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
            Morse Code Chart →
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Try the Translator →
          </Link>
        </div>
      </section>

      <RelatedPages currentPath="/morse-code-chart-pdf" />
      <AdBanner />
    </div>
  );
}
