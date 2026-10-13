import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import RelatedPages from '@/components/RelatedPages';
import MorseTranslator from '@/components/MorseTranslator';
import { buildMetadata } from '@/lib/metadata';
import { textToMorse, CHAR_TO_MORSE } from '@/lib/morse';

const LETTER_N = Object.keys(CHAR_TO_MORSE).filter((c) => /[A-Z]/.test(c)).length;
const DIGIT_N = Object.keys(CHAR_TO_MORSE).filter((c) => /[0-9]/.test(c)).length;
const PUNCT_N = Object.keys(CHAR_TO_MORSE).filter(
  (c) => !/[A-Z0-9]/.test(c),
).length;

export const metadata = buildMetadata({
  path: '/morse-code-generator',
  title: 'Morse Code Generator - Free, Online, Copy and Paste',
  description:
    'Free online Morse code generator. Type any text and get International Morse code instantly, ready to copy, paste, or play as audio. No signup and no download required.',
  keywords:
    'morse code generator, morse code generator online, text to morse code generator, morse code generator copy and paste, international morse code generator, morse code generator free, morse code maker',
});

const COPY_BLOCKS = [
  'SOS',
  'HELP',
  'HELLO',
  'I LOVE YOU',
  'KEVIN',
  'ELENA',
  'HAPPY BIRTHDAY',
  '143',
];

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How do I generate Morse code from text?',
    a: 'Type or paste your text into the box at the top of this page. Each character is converted to its International Morse pattern as you write, letters separated by one space and words separated by " / ". Press Play Audio to hear the result, or Copy to take the plain text version with you.',
  },
  {
    q: 'Can I copy and paste the generated Morse code?',
    a: 'Yes. The output is plain ASCII - dots written as full stops, dashes as hyphens - so it pastes into a document, an email, an engraving order form or a radio log without reformatting. The ready-made blocks further down this page cover the phrases people generate most often.',
  },
  {
    q: 'Is this Morse code generator free?',
    a: 'It is free, with no account, no watermark and no length limit beyond what you can paste. The conversion runs entirely in your browser, so nothing you type is uploaded or stored anywhere.',
  },
  {
    q: 'What is the difference between a Morse code generator and a translator?',
    a: 'A generator works in one direction, text into Morse. A translator goes both ways, so you can also paste Morse and get the text back. The tool on this page does both - it starts in generator mode, and switching the direction control turns it into a translator.',
  },
  {
    q: 'Does the generator handle numbers and punctuation?',
    a: `Yes - ${LETTER_N} letters, ${DIGIT_N} digits and ${PUNCT_N} punctuation and currency marks, which is the full International table. Digits are always five elements long, which is why 143 or a phone number reads cleanly. Emoji and accented letters have no standard pattern and are dropped rather than approximated.`,
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

const USE_CASES: Array<{ title: string; body: string }> = [
  {
    title: 'Jewellery and engraving',
    body: 'Generate the exact code for a name, date, or short phrase, then hand the dots and dashes to an engraver. Check the output character by character — a single wrong element changes the letter.',
  },
  {
    title: 'Tattoo design',
    body: 'Produce the code for a phrase, then take it into the tattoo generator to lay it out as a linear, bracelet, or vertical design before your appointment.',
  },
  {
    title: 'Puzzle and game design',
    body: 'Encode clues or answers for escape rooms and puzzle hunts. Copy the output straight into your document with the spacing preserved.',
  },
  {
    title: 'Learning and practice',
    body: 'Type a word, read the code, then send it by hand and check yourself. Playing the audio back at speed is a fast way to test whether you can copy by ear.',
  },
];

export default function MorseCodeGeneratorPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="text-4xl font-bold text-white text-center mb-4">Morse Code Generator</h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
        This is a free online Morse code generator — no signup and no download. Type or paste any
        text below and it converts to International Morse Code as you go. Copy the
        result, or play it back as audio to hear the rhythm.
      </p>

      <section className="mb-12">
        <MorseTranslator initialMode="textToMorse" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">How the Encoding Works</h2>
        <div className="text-gray-300 space-y-3 leading-relaxed">
          <p>
            The generator maps each character to its International Morse Code pattern, then joins
            them with the standard separators:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className="text-white">Between characters</strong> — a single space. This tells
              the receiver one character has ended and the next begun.
            </li>
            <li>
              <strong className="text-white">Between words</strong> — a slash with a space either
              side, <span className="font-mono">/</span>. In transmitted Morse the word gap is seven
              dot-lengths, three times the gap between letters, and the slash is how that wider
              silence is written down without ambiguity.
            </li>
            <li>
              <strong className="text-white">Inside a character</strong> — no space. Dots and dashes
              run together, and their order alone identifies the letter.
            </li>
          </ul>
          <p>
            That spacing is not cosmetic. If you strip it out,{' '}
            <span className="font-mono">.−</span> (A) becomes indistinguishable from{' '}
            <span className="font-mono">.−.</span> (R) plus something else. Keep the separators
            intact when you copy the output.
          </p>
          <p>
            Unsupported characters — emoji, accented letters, and anything outside the standard
            table — are dropped rather than guessed, so the output stays decodable.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          Morse code generator copy and paste
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          If you only need one of the usual phrases, here is generated output ready to select and
          copy. Keep the spaces and slashes exactly as they are — they are what make the result
          readable back into letters.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {COPY_BLOCKS.map((item) => (
            <div key={item} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="text-white font-medium text-sm">{item}</div>
              <div className="font-mono text-green-400 text-sm mt-1 select-all break-words">
                {textToMorse(item)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">What People Generate</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {USE_CASES.map(({ title, body }) => (
            <div key={title} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          International Morse, not American Morse
        </h2>
        <p className="text-gray-300 leading-relaxed">
          This generator produces International Morse Code, the version standardised for radio and
          still used in aviation and amateur radio today. American Morse — the older telegraph code
          you meet in railroad history and Civil War re-enactments — gives several letters
          different patterns and does not share this punctuation table, so the two are not
          interchangeable. The site keeps a separate{' '}
          <Link
            href="/american-morse-code-chart"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            American Morse code chart
          </Link>{' '}
          and an{' '}
          <Link
            href="/international-morse-code-chart"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            International Morse code chart
          </Link>{' '}
          if you need to compare them side by side.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Generator questions</h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <div key={f.q} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <h3 className="font-semibold text-white mb-2">{f.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Going the Other Way</h2>
        <p className="text-gray-300 leading-relaxed">
          If you already have Morse code and need the English back, use the{' '}
          <Link
            href="/morse-code-translator-to-english"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Morse code to English translator
          </Link>{' '}
          — it runs in the opposite direction and handles the gap parsing for you.
        </p>
      </section>

      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/morse-code-translator-to-english"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Morse → English →
          </Link>
          <Link
            href="/audio"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Audio Translator →
          </Link>
          <Link
            href="/tattoo-generator"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Tattoo Generator →
          </Link>
        </div>
      </section>

      <RelatedPages currentPath="/morse-code-generator" />
      <AdBanner />
    </div>
  );
}
