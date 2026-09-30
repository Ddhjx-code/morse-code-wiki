import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import RelatedPages from '@/components/RelatedPages';
import MorseTranslator from '@/components/MorseTranslator';
import { buildMetadata } from '@/lib/metadata';
import { CHAR_TO_MORSE, textToMorse } from '@/lib/morse';

export const metadata = buildMetadata({
  path: '/text-to-morse-code',
  title: 'Text to Morse Code - Convert Any Text Instantly',
  description:
    'Convert text to Morse code letter by letter, with the separator rules that make the output readable, the full list of punctuation this tool supports, and worked examples you can check against the international table.',
  keywords:
    'text to morse code, convert text to morse code, text to morse code translator, write in morse code, morse code converter, text into morse',
});

const WORDS = ['SOS', 'HELLO', 'PHANTOM', 'AMATEUR RADIO', 'MORSE CODE'];

const LETTERS_1 = Object.entries(CHAR_TO_MORSE).filter(
  ([, code]) => code.length === 1,
);
const PUNCTUATION = Object.entries(CHAR_TO_MORSE).filter(([char]) =>
  !/[A-Z0-9]/.test(char),
);

function pretty(code: string): string {
  return code.replace(/\./g, '·').replace(/-/g, '−');
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you write text in Morse code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Replace each letter, digit or supported punctuation mark with its international Morse pattern, put one space between the patterns of consecutive characters, and put a slash surrounded by spaces between words. HELLO becomes .... · .-.. .-.. --- with the single gaps already in place.',
      },
    },
    {
      '@type': 'Question',
      name: 'What separates letters from words in Morse code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timing separates them, not symbols. Inside a character the gap is one dot-length. Between characters it is three dot-lengths. Between words it is seven. In text form that becomes one space between characters and a " / " between words.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this converter handle punctuation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, twenty punctuation marks are mapped: . , ? \' ! / ( ) & : ; = + - _ " $ @ and the accented-accent forms used by the international table. Anything outside that table is dropped rather than guessed at, so an apostrophe in a name will appear as the Morse apostrophe while an em dash will vanish.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my Morse output decode back wrong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost always because the character gaps were lost. Morse is a variable-length code, so a run of dots and dashes with no gaps has many valid readings. Restore the single spaces between characters and the word slashes and it resolves uniquely.',
      },
    },
  ],
};

export default function TextToMorseCodePage() {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Text to Morse Code
      </h1>
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-8">
        Type or paste plain text and it converts to Morse code as you write, in the direction the
        name promises: this page opens in <strong className="text-white">text → Morse</strong>. The
        reverse job, dots and dashes back into English, is on the{' '}
        <Link
          href="/morse-code-translator-to-english"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          Morse code to English
        </Link>{' '}
        page.
      </p>

      <section className="mb-12">
        <MorseTranslator initialMode="textToMorse" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          The Output Format, and Why the Spaces Matter
        </h2>
        <div className="text-gray-300 space-y-3 leading-relaxed">
          <p>
            A Morse transcript is only unambiguous if the gaps survive the trip to text. This
            converter uses the convention most radio logging software expects:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Characters inside one word are separated by a{' '}
              <strong className="text-white">single space</strong>.
            </li>
            <li>
              Words are separated by <span className="font-mono text-white"> / </span> (slash with a
              space either side).
            </li>
            <li>
              Dots are written <span className="font-mono text-white">.</span> and dashes{' '}
              <span className="font-mono text-white">-</span>, so the output is plain ASCII that
              pastes into any other tool. The tables on this page show the same patterns in the
              printed <span className="font-mono text-white">·</span> and{' '}
              <span className="font-mono text-white">−</span> form, because that is how they appear
              in books and on charts.
            </li>
          </ul>
          <p>
            Those two gap sizes are not a house style. In real signalling a dot lasts one unit, a
            dash three, the intra-character gap one, the gap between characters three and the gap
            between words seven. Collapse the three-unit gap into one and{' '}
            <span className="font-mono">.-</span> followed by{' '}
            <span className="font-mono">-.</span> stops being <span className="font-mono">AD</span>{' '}
            and becomes something else entirely.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Worked Conversions</h2>
        <p className="text-gray-400 mb-4">
          Generated from the international table this tool actually uses, not transcribed by hand.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-3">Text</th>
                <th className="px-4 py-3">Morse code</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {WORDS.map(w => (
                <tr key={w} className="border-t border-gray-800">
                  <td className="px-4 py-3 font-medium text-white whitespace-nowrap">{w}</td>
                  <td className="px-4 py-3 font-mono tracking-wider">{textToMorse(w)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          Characters With No Signal Element of Their Own
        </h2>
        <p className="text-gray-400 mb-4">
          Two characters are a single element, which is why they are the fastest to send and the
          first letters taught in the Koch method:{' '}
          {LETTERS_1.map(([c, m]) => (
            <span key={c} className="font-mono text-white">
              {c}={pretty(m)}{' '}
            </span>
          ))}
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Digits</h3>
            <ul className="text-gray-300 space-y-1 font-mono text-sm">
              {Object.entries(CHAR_TO_MORSE)
                .filter(([c]) => /^[0-9]$/.test(c))
                .map(([c, m]) => (
                  <li key={c}>
                    {c} — {pretty(m)}
                  </li>
                ))}
            </ul>
            <p className="text-gray-500 text-sm mt-3">
              Every digit is five elements. That regularity is the easiest part of the table to
              memorise; see{' '}
              <Link href="/numbers" className="text-blue-400 hover:text-blue-300 underline">
                Morse code numbers
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Punctuation this converter accepts
            </h3>
            <ul className="text-gray-300 space-y-1 font-mono text-sm columns-2">
              {PUNCTUATION.map(([c, m]) => (
                <li key={c}>
                  {c} — {pretty(m)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-amber-950/40 border border-amber-900 rounded-lg p-4">
          <p className="text-amber-200 text-sm leading-relaxed">
            <strong>Behaviour worth knowing:</strong> a character that is not in the table above is
            dropped from the output rather than approximated. An em dash (—), a curly quote (’), or
            any non-Latin letter disappears silently, because guessing at a code that has no
            international pattern would put a wrong signal on the air. If your text contains those,
            swap them for the plain forms listed here first.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Common Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do I write my name in Morse code?',
              a: 'Type it into the box above. Names are handled the same as any word, letter by letter. If the name carries an accent or a hyphen, note that the hyphen has its own pattern (-....-) while an accented letter does not appear in the international table and will be dropped.',
            },
            {
              q: 'Can I copy the result?',
              a: 'Yes. The copy button puts the ASCII form - dots as full stops, dashes as hyphens, one space between characters and " / " between words - on your clipboard. That is the format other tools and logging software expect. If you want the dotted · and − rendering for a bracelet or tattoo, use the tattoo page, which draws that version for you.',
            },
            {
              q: 'Is Morse code still used?',
              a: 'The distress call it replaced has not been used on ships since 1999, but the code survives on amateur radio bands, in aviation navigation identifiers (VOR and ILS stations transmit their three-letter names in Morse), and as an accessibility method when voice or a screen is not available.',
            },
            {
              q: 'What is the difference between Morse code and SOS?',
              a: 'SOS is one specific message, not an alphabet. It is sent as ···---··· in a single unbroken run so it cannot be mistaken for the letters S, O, S spaced apart. Details on the SOS page.',
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
            href="/"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Morse Code Translator →
          </Link>
          <Link
            href="/alphabet"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Full Alphabet A-Z →
          </Link>
          <Link
            href="/audio"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Hear It as Audio →
          </Link>
        </div>
      </section>

      <RelatedPages currentPath="/text-to-morse-code" />
      <AdBanner />
    </div>
  );
}
