import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import MorseAudioButton from '@/components/MorseAudioButton';
import { CHAR_TO_MORSE, textToMorse } from '@/lib/morse';
import type { MorseWord } from '@/data/morse-words';

interface MorseWordPageProps {
  word: MorseWord;
  extraLinks?: Array<{ href: string; label: string }>;
}

interface RelatedTarget {
  href: string;
  label: string;
}

const EXTRA_TARGETS: Record<string, RelatedTarget> = {
  sos: { href: '/sos', label: 'SOS in Morse Code' },
  'i-love-you': { href: '/i-love-you', label: 'I Love You in Morse Code' },
  hello: { href: '/hello', label: 'Hello in Morse Code' },
};

function formatMorse(code: string): string {
  return code.replace(/\./g, '·').replace(/-/g, '−');
}

export default function MorseWordPage({ word, extraLinks = [] }: MorseWordPageProps) {
  const morse = textToMorse(word.display);
  const letters = word.display.split('');

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-300">Translator</Link>
        <span className="mx-2">/</span>
        <Link href="/alphabet" className="hover:text-gray-300">Alphabet</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">{word.display}</span>
      </nav>

      <h1 className="text-4xl font-bold text-white text-center mb-4">
        {word.display} in Morse Code
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">{word.summary}</p>

      <section className="mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-white tracking-widest mb-4">
            {word.display}
          </div>
          <div className="text-xl sm:text-3xl font-mono text-blue-400 tracking-widest break-all mb-6">
            {formatMorse(morse)}
          </div>
          <MorseAudioButton morse={morse} label={`Hear ${word.display}`} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Letter by Letter</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-3">Letter</th>
                <th className="px-4 py-3">Morse</th>
                <th className="px-4 py-3">Spoken</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {letters.map((letter, index) => {
                const code = CHAR_TO_MORSE[letter];
                const spoken = code
                  .split('')
                  .map(el => (el === '.' ? 'dit' : 'dah'))
                  .join('-');
                return (
                  <tr key={`${letter}-${index}`} className="border-t border-gray-800">
                    <td className="px-4 py-3 font-bold text-white">{letter}</td>
                    <td className="px-4 py-3 font-mono tracking-wider">{formatMorse(code)}</td>
                    <td className="px-4 py-3 text-gray-400">{spoken}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 mt-4">
          Between each letter, leave a gap of three units. Between words, leave seven.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Reading the Pattern</h2>
        <p className="text-gray-300 leading-relaxed">{word.origin}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          What People Use {word.display} For
        </h2>
        <ul className="space-y-3">
          {word.uses.map(use => (
            <li key={use} className="flex gap-3 text-gray-300 leading-relaxed">
              <span className="text-blue-400 shrink-0" aria-hidden="true">—</span>
              <span>{use}</span>
            </li>
          ))}
        </ul>
      </section>

      {(word.relatedKeys.length > 0 || extraLinks.length > 0) && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Related Phrases</h2>
          <div className="flex flex-wrap gap-2">
            {word.relatedKeys.map(key => {
              const target = EXTRA_TARGETS[key];
              const href = target ? target.href : `/${key}-in-morse-code`;
              const label = target ? target.label : `${key.toUpperCase()} in Morse Code`;
              return (
                <Link
                  key={key}
                  href={href}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-white transition-colors"
                >
                  {label}
                </Link>
              );
            })}
            {extraLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/i-love-you"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            I Love You in Morse →
          </Link>
          <Link
            href="/tattoo-generator"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Tattoo Generator →
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
