import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import MorseAudioButton from '@/components/MorseAudioButton';
import { textToMorse } from '@/lib/morse';
import { MORSE_UNITS, type MorseUnit } from '@/data/morse-units';

interface MorseUnitPageProps {
  unit: MorseUnit;
}

function formatMorse(code: string): string {
  return code.replace(/\./g, '·').replace(/-/g, '−');
}

function findMirror(unit: MorseUnit): MorseUnit | undefined {
  const reversed = unit.morse.split('').reverse().join('');
  return MORSE_UNITS.find(u => u.key !== unit.key && u.morse === reversed);
}

function findSameLength(unit: MorseUnit): MorseUnit[] {
  return MORSE_UNITS.filter(
    u => u.key !== unit.key && u.morse.length === unit.morse.length
  ).slice(0, 6);
}

export default function MorseUnitPage({ unit }: MorseUnitPageProps) {
  const mirror = findMirror(unit);
  const sameLength = findSameLength(unit);
  const exampleMorse = textToMorse(unit.exampleWord);
  const kind = unit.type === 'letter' ? 'Letter' : 'Number';

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-300">Translator</Link>
        <span className="mx-2">/</span>
        <Link href="/alphabet" className="hover:text-gray-300">Alphabet</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">{unit.display}</span>
      </nav>

      <h1 className="text-4xl font-bold text-white text-center mb-4">
        {unit.display} in Morse Code
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
        {kind} {unit.display} is written{' '}
        <span className="font-mono text-gray-200">{formatMorse(unit.morse)}</span> in International
        Morse Code — {unit.morse.length} signal element{unit.morse.length === 1 ? '' : 's'}, read
        aloud as &ldquo;{unit.readAs}&rdquo;.
      </p>

      <section className="mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center gap-6 mb-6 flex-wrap">
            <span className="text-7xl font-bold text-white">{unit.display}</span>
            <span className="text-gray-600 text-4xl" aria-hidden="true">→</span>
            <span className="text-4xl sm:text-5xl font-mono text-blue-400 tracking-widest">
              {formatMorse(unit.morse)}
            </span>
          </div>
          <MorseAudioButton morse={unit.morse} label={`Hear ${unit.display}`} />
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-gray-500 mb-1">Code</div>
              <div className="font-mono text-white">{formatMorse(unit.morse)}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Spoken</div>
              <div className="text-white">{unit.readAs}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Elements</div>
              <div className="text-white">{unit.morse.length}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          How to Send {unit.display} in Morse Code
        </h2>
        <div className="text-gray-300 space-y-3 leading-relaxed">
          <p>
            Send {unit.display} as{' '}
            <span className="font-mono text-gray-100">{unit.morse.split('').join(' ')}</span> — that
            is {unit.morse.length} element{unit.morse.length === 1 ? '' : 's'} in sequence. A dot is
            one unit long and a dash is three units, with a one-unit gap between the elements of the
            same character.
          </p>
          <p>
            Spoken aloud, the pattern is &ldquo;{unit.readAs}&rdquo;. Radio operators say{' '}
            <em>dit</em> for a dot and <em>dah</em> for a dash, which is why you hear the rhythm
            rather than the individual symbols.
          </p>
          {unit.morse.length > 1 && (
            <p>
              To avoid confusion with neighbouring characters, leave a gap of three units after{' '}
              {unit.display} before starting the next character. That gap is what tells the receiver
              the character has ended.
            </p>
          )}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          {unit.display} in a Word
        </h2>
        <p className="text-gray-300 mb-4">
          The radio alphabet word for {unit.display} is{' '}
          <strong className="text-white">{unit.exampleWord}</strong>, which is spelled in Morse as:
        </p>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
          <div className="font-mono text-blue-400 text-sm sm:text-base break-all tracking-wider mb-2">
            {formatMorse(exampleMorse)}
          </div>
          <div className="text-gray-500 text-xs">
            {unit.exampleWord.toUpperCase()} — {unit.exampleWord.length} characters
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Memory Tip</h2>
        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-5">
          <p className="text-blue-100 leading-relaxed">{unit.memoryTip}</p>
        </div>
      </section>

      {mirror && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Related Patterns</h2>
          <p className="text-gray-300 mb-4">
            {unit.display} ({formatMorse(unit.morse)}) is the mirror image of{' '}
            <Link
              href={`/${mirror.key.toLowerCase()}-in-morse-code`}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              {mirror.display} ({formatMorse(mirror.morse)})
            </Link>
            . Learning them as a pair makes both easier to recall.
          </p>
        </section>
      )}

      {sameLength.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Other {unit.morse.length}-Element Codes
          </h2>
          <div className="flex flex-wrap gap-2">
            {sameLength.map(u => (
              <Link
                key={u.key}
                href={`/${u.key.toLowerCase()}-in-morse-code`}
                className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-white transition-colors"
              >
                <span className="font-bold">{u.display}</span>
                <span className="font-mono text-gray-400 ml-2">{formatMorse(u.morse)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/alphabet"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Full Alphabet →
          </Link>
          <Link
            href="/learn"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            How to Learn →
          </Link>
          <Link
            href="/international-morse-code-chart"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            International Chart →
          </Link>
        </div>
      </section>

      <AdBanner />
    </div>
  );
}
