import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import RelatedPages from '@/components/RelatedPages';
import MorseAudioButton from '@/components/MorseAudioButton';
import { CHAR_TO_MORSE, textToMorse } from '@/lib/morse';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  path: '/letters-in-morse-code',
  title: 'Letters in Morse Code - Complete A-Z Reference',
  description:
    'Every letter in Morse code, A to Z, with its pattern and spoken form. Includes the length rule that makes the alphabet easier to memorise and audio for the full alphabet.',
  keywords:
    'letters in morse code, morse code letters, alphabet in morse code, morse code alphabet, all letters in morse code, morse code a to z',
});

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function formatMorse(code: string): string {
  return code.replace(/\./g, '·').replace(/-/g, '−');
}

function spoken(code: string): string {
  return code
    .split('')
    .map(el => (el === '.' ? 'dit' : 'dah'))
    .join('-');
}

const BY_LENGTH = [1, 2, 3, 4].map(len => ({
  len,
  letters: LETTERS.filter(l => CHAR_TO_MORSE[l].length === len),
}));

export default function LettersInMorseCodePage() {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Letters in Morse Code
      </h1>
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
        All 26 letters of the International Morse Code alphabet, with the pattern and spoken form
        for each one.
      </p>

      <section className="mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
          <p className="text-gray-300 mb-4">
            Hear the full alphabet sent in sequence, one letter at a time.
          </p>
          <MorseAudioButton
            morse={LETTERS.map(l => CHAR_TO_MORSE[l]).join(' ')}
            label="Hear the alphabet"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The 26 Letters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {LETTERS.map(letter => (
            <Link
              key={letter}
              href={`/${letter.toLowerCase()}-in-morse-code`}
              className="flex items-center gap-3 px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors"
            >
              <span className="text-lg font-bold text-white w-5">{letter}</span>
              <span className="font-mono text-sm text-blue-400 tracking-wider">
                {formatMorse(CHAR_TO_MORSE[letter])}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Full Reference Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-3">Letter</th>
                <th className="px-4 py-3">Morse</th>
                <th className="px-4 py-3">Spoken</th>
                <th className="px-4 py-3">Elements</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {LETTERS.map(letter => {
                const code = CHAR_TO_MORSE[letter];
                return (
                  <tr key={letter} className="border-t border-gray-800">
                    <td className="px-4 py-2 font-bold text-white">
                      <Link href={`/${letter.toLowerCase()}-in-morse-code`} className="hover:text-blue-400">
                        {letter}
                      </Link>
                    </td>
                    <td className="px-4 py-2 font-mono tracking-wider">{formatMorse(code)}</td>
                    <td className="px-4 py-2 text-gray-400">{spoken(code)}</td>
                    <td className="px-4 py-2 text-gray-500">{code.length}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          The Rule That Makes the Alphabet Learnable
        </h2>
        <div className="text-gray-300 space-y-4 leading-relaxed">
          <p>
            Morse letters are not arbitrary. The code was designed so that{' '}
            <strong className="text-white">the more common a letter is in English, the shorter its
            code</strong>. Grouping the alphabet by element count exposes the structure:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {BY_LENGTH.map(({ len, letters }) => (
              <div key={len} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <div className="text-gray-500 text-xs mb-2">
                  {len} element{len === 1 ? '' : 's'} · {letters.length} letter
                  {letters.length === 1 ? '' : 's'}
                </div>
                <div className="font-mono text-blue-400 text-sm tracking-wider">
                  {letters
                    .map(l => `${l} ${formatMorse(CHAR_TO_MORSE[l])}`)
                    .join('   ')}
                </div>
              </div>
            ))}
          </div>
          <p>
            Only E and T use a single element — they are the two most common letters in English. The
            four-element group holds the rarest letters. Learning the alphabet by length groups,
            rather than A-to-Z, is what makes the{' '}
            <Link href="/learn" className="text-blue-400 hover:text-blue-300 underline">
              Koch method
            </Link>{' '}
            work.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">A Word, Spelled Out</h2>
        <p className="text-gray-300 mb-4">
          Here is how the alphabet combines into a word — the radio alphabet word for each letter is
          shown as Morse:
        </p>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
          <div className="font-mono text-blue-400 text-sm break-all tracking-wider">
            {formatMorse(textToMorse('MORSE CODE'))}
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/alphabet"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Alphabet with Memory Tips →
          </Link>
          <Link
            href="/numbers"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Numbers in Morse →
          </Link>
          <Link
            href="/practice"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Practice →
          </Link>
        </div>
      </section>

      <RelatedPages currentPath="/letters-in-morse-code" />
      <AdBanner />
    </div>
  );
}
