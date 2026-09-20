import Link from 'next/link';

const DESTINATIONS = [
  { href: '/', label: 'Morse Code Translator', desc: 'Convert text to Morse and back' },
  { href: '/alphabet', label: 'Alphabet', desc: 'All 26 letters with memory tips' },
  { href: '/chart', label: 'Printable Chart', desc: 'Letters, numbers and punctuation' },
  { href: '/international-morse-code-chart', label: 'International Chart', desc: 'ITU standard reference' },
  { href: '/morse-code-translator-to-english', label: 'Morse to English', desc: 'Decode dots and dashes' },
  { href: '/learn', label: 'How to Learn', desc: 'Beginner guide' },
];

export default function NotFound() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold text-blue-400 mb-3">Error 404</p>
        <h1 className="text-4xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          This page does not exist. It may have moved, or the link may be mistyped — try one of
          these instead.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {DESTINATIONS.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="block bg-gray-900 border border-gray-800 rounded-lg p-5 hover:border-gray-600 transition-colors"
          >
            <div className="font-semibold text-white mb-1">{item.label}</div>
            <div className="text-sm text-gray-400">{item.desc}</div>
          </Link>
        ))}
      </div>

      <p className="text-center text-gray-400 mt-10">
        Or go back to the{' '}
        <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
          Morse code translator
        </Link>
        .
      </p>
    </div>
  );
}
