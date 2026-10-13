import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import RelatedPages from '@/components/RelatedPages';
import MorseTranslator from '@/components/MorseTranslator';
import { buildMetadata } from '@/lib/metadata';
import { CHAR_TO_MORSE, morseToText } from '@/lib/morse';

export const metadata = buildMetadata({
  path: '/morse-code-translator-to-english',
  title: 'Morse Code to English Translator - Paste and Decode',
  description:
    'Translate Morse code to English instantly. Paste dots and dashes to decode them into text, with the exact separator rules this decoder uses, worked examples, and how to fix a paste that comes out merged or empty.',
  keywords:
    'morse code to english, morse code translator to english, convert morse code to english, decode morse code, morse code into english, morse code decoder',
});

const LETTER_N = Object.keys(CHAR_TO_MORSE).filter((c) => /[A-Z]/.test(c)).length;
const DIGIT_N = Object.keys(CHAR_TO_MORSE).filter((c) => /[0-9]/.test(c)).length;
const PUNCT_N = Object.keys(CHAR_TO_MORSE).filter((c) => !/[A-Z0-9]/.test(c)).length;

function formatMorse(code: string): string {
  return code.replace(/\./g, '·').replace(/-/g, '−');
}

const EXAMPLES: Array<[string, string]> = [
  ['SOS', '... --- ...'],
  ['HELLO', '.... . .-.. .-.. ---'],
  ['HELP', '.... . .-.. .--.'],
  ['YES', '-.-- . ...'],
  ['NO', '-. ---'],
  ['OK', '--- -.-'],
  ['CQ', '-.-. --.-'],
  ['73', '--... ...--'],
];

const STEPS = ['....', '.', '.-..', '.-..', '---'];

const FAILURES = [
  {
    q: 'The output is gibberish',
    a: 'Almost always a spacing problem. If characters are run together with no gaps, the decoder cannot know where one letter ends and the next begins, so it reads a different letter instead. Insert a single space between every character.',
  },
  {
    q: 'Words are merged into one long string',
    a: 'The word gap was lost. This decoder separates words with a slash that has a space on either side, written as " / ". Two or three plain spaces are not enough — they are treated as ordinary character spacing, so the whole message comes back as one word. Replace the wider gaps in your source with " / " before pasting.',
  },
  {
    q: 'The output is completely empty',
    a: 'The message was probably sent as a prosign — a run of dots and dashes with no gaps at all, which is how SOS is transmitted on the air. ...---... has no single character that matches it, so the decoder returns nothing. Put the gaps back in (... --- ...) to read it as three letters.',
  },
  {
    q: 'Some characters decode to nothing',
    a: 'You may be using a punctuation mark outside the International table, or reading a document in American Morse. The two codes disagree on eleven of the twenty-six letters — C, F, J, L, O, P, Q, R, X, Y and Z — and American Morse also puts a gap inside some characters, which is why its C is written as two groups. See the American Morse chart if your source is a historical railroad document.',
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How do I translate Morse code to English?',
    a: 'Switch the tool at the top of this page to the Morse to English direction, then paste or type your code. Letters must be separated by a single space and words by a slash with spaces around it, written as " / ". The English appears in the lower box as you type.',
  },
  {
    q: 'What separators does the decoder need?',
    a: 'One space between the dot-and-dash groups that make up separate letters, and " / " between words. Nothing else is interpreted as a boundary — a tab, a line break or a run of several spaces will not mark a word end.',
  },
  {
    q: 'Can it decode numbers and punctuation?',
    a: `Yes. The decoder covers the whole International table: ${LETTER_N} letters, ${DIGIT_N} digits and ${PUNCT_N} punctuation and currency marks. Digits are the easiest part to read back because every one of them is exactly five signals long. See the numbers page for the full digit chart.`,
  },
  {
    q: 'Why does my decoded text come out in capital letters?',
    a: 'Morse code has no concept of letter case, so there is nothing to decode a lower-case distinction from. The output is upper-cased because that is how Morse messages are conventionally written.',
  },
  {
    q: 'Is there a difference between a Morse decoder and a translator?',
    a: 'A decoder only reads code back into text. A translator does both directions. The tool on this page is a translator that opens in the decoding direction, so you can flip it and type English to get code whenever you need the other way round.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function MorseCodeToEnglishPage() {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Morse Code to English Translator
      </h1>
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-8">
        Paste Morse code below and it decodes to English as you type. This page opens in the
        Morse&nbsp;→&nbsp;English direction, so the top box takes dots and dashes and the bottom box
        shows the decoded text.
      </p>

      <section className="mb-12">
        <MorseTranslator initialMode="morseToText" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">How the Decoding Works</h2>
        <div className="text-gray-300 space-y-3 leading-relaxed">
          <p>
            Morse code is a variable-length code, so decoding is not a simple character-by-character
            substitution. Gaps carry as much meaning as the dots and dashes themselves:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className="text-white">Dot (·) and dash (−)</strong> — the two signal elements. A
              dash is three times as long as a dot.
            </li>
            <li>
              <strong className="text-white">Gap of 1 unit</strong> — separates elements{' '}
              <em>inside</em> a single character. This is how <span className="font-mono">.-</span>{' '}
              stays distinct from <span className="font-mono">.-.</span>.
            </li>
            <li>
              <strong className="text-white">Gap of 3 units</strong> — separates characters. This is
              what tells the decoder one letter has ended and the next begun.
            </li>
            <li>
              <strong className="text-white">Gap of 7 units</strong> — separates words, written here as{' '}
              <span className="font-mono">/</span>.
            </li>
          </ul>
          <p>
            When you paste a block of text, the decoder reads the boundaries you provide: a single
            space ends a character, and <span className="font-mono">&nbsp;/&nbsp;</span> ends a word.
            That is the whole rule, and matching it is the difference between a clean decode and a
            merged one.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">A decode, step by step</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Here is what the decoder does with <span className="font-mono">.... . .-.. .-.. ---</span>,
          one group at a time. Each group is looked up on its own, so a missing space shifts every
          letter after it:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">Group</th>
                <th className="px-4 py-3 text-left">Signals</th>
                <th className="px-4 py-3 text-left">Letter</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {STEPS.map((group, i) => (
                <tr key={group + i} className="border-t border-gray-800">
                  <td className="px-4 py-2 font-mono tracking-wider">{formatMorse(group)}</td>
                  <td className="px-4 py-2">{group.length}</td>
                  <td className="px-4 py-2 font-bold text-white">
                    {morseToText(group)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 mt-3">
          Those five groups with the word gap removed read as HELLO. Now drop the space between the
          first two: <span className="font-mono">....</span> and <span className="font-mono">.</span>{' '}
          fuse into <span className="font-mono">.....</span>, which is a perfectly valid signal group —
          the digit 5. The decoder cheerfully returns{' '}
          <span className="font-mono text-white">5LLO</span> and nothing warns you. That is why Morse
          messages are checked character by character rather than skimmed.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Common Morse code to English examples</h2>
        <p className="text-gray-400 mb-4">
          Every line below is ready to copy into the box above — the separators are already correct.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-3">English</th>
                <th className="px-4 py-3">Morse code</th>
                <th className="px-4 py-3">Meaning / use</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {EXAMPLES.map(([english, morse]) => (
                <tr key={english} className="border-t border-gray-800">
                  <td className="px-4 py-3 font-medium text-white">{english}</td>
                  <td className="px-4 py-3 font-mono tracking-wider select-all">
                    {formatMorse(morse)}
                  </td>
                  <td className="px-4 py-3 text-gray-400">{NOTE[english]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 mt-4">
          The single most recognised one is{' '}
          <Link href="/sos" className="text-blue-400 hover:text-blue-300 underline">
            SOS
          </Link>{' '}
          — three dots, three dashes, three dots — which is sent as one continuous signal with no
          gaps between the letters, and so needs the gaps added back before any decoder can read it.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Why a Decode Sometimes Fails</h2>
        <div className="space-y-4">
          {FAILURES.map(({ q, a }) => (
            <div key={q} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <h3 className="font-semibold text-white mb-1">{q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Questions about decoding Morse</h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <details key={f.q} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <summary className="font-medium text-white cursor-pointer">{f.q}</summary>
              <p className="text-gray-400 text-sm mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/alphabet"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Full Alphabet →
          </Link>
          <Link
            href="/numbers"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Numbers 0-9 →
          </Link>
          <Link
            href="/american-morse-code-chart"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            American Morse Chart →
          </Link>
          <Link
            href="/audio"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Morse Audio Translator →
          </Link>
        </div>
      </section>

      <RelatedPages currentPath="/morse-code-translator-to-english" />
      <AdBanner />
    </div>
  );
}

const NOTE: Record<string, string> = {
  SOS: 'Distress signal, sent without letter gaps',
  HELLO: 'Common greeting',
  HELP: 'Request for assistance',
  YES: 'Affirmative',
  NO: 'Negative',
  OK: 'Acknowledgement',
  CQ: 'Calling any station',
  '73': 'Best regards — a ham radio sign-off',
};
