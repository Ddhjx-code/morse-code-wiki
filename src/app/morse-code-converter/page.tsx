import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import RelatedPages from '@/components/RelatedPages';
import MorseConverter from '@/components/MorseConverter';
import { buildMetadata } from '@/lib/metadata';
import { CHAR_TO_MORSE } from '@/lib/morse';

export const metadata = buildMetadata({
  path: '/morse-code-converter',
  title: 'Morse Code Converter - Convert Text to Morse and Back',
  description:
    'A Morse code converter that works both ways, with adjustable speed and tone. Paste text to get dots and dashes, or paste code to get English - messy separators are cleaned up automatically.',
  keywords:
    'morse code converter, morse code decoder, morse code decipher, morse code maker, morse code converter to english, convert morse code to text, morse code encoder',
});

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How do I use a Morse code converter?',
    a: 'Choose a direction, then type or paste. Text to Morse converts letters, digits and punctuation into dots and dashes with one space between characters and " / " between words. Morse to Text reads that same convention back into capital letters.',
  },
  {
    q: 'Can I paste Morse code with no spaces?',
    a: 'Partially. This converter repairs bullets, en dashes, pipes and line breaks, and it treats two or more spaces as a word gap. It cannot split a run of dots and dashes that has no gaps at all, because the boundaries were never recorded - the same character string can be several different letters.',
  },
  {
    q: 'What is the difference between a converter, a translator and a decoder?',
    a: 'They all do the same arithmetic. Converter and translator usually mean both directions, decoder means Morse to text only, and generator or maker means text to Morse only. The tools on this site differ in which direction opens by default, not in what they can produce.',
  },
  {
    q: 'What does the WPM setting change?',
    a: 'The length of one timing unit. At 20 words per minute a unit is 60 milliseconds: a dot is one unit, a dash is three, the gap inside a character is one, the gap between characters is three and the gap between words is seven. Lower WPM stretches every element proportionally, which is why beginners start around 5 to 8.',
  },
  {
    q: 'Does it convert accents and emoji?',
    a: 'No. The International Morse table on this site covers 26 letters, 10 digits and the punctuation marks listed on the punctuation page. Accented letters, emoji and non-Latin scripts have no entry and are dropped rather than guessed at.',
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

const TERMS: Array<[string, string, string]> = [
  ['Converter', 'Both directions', 'The general-purpose name; this page'],
  ['Translator', 'Both directions', 'Same as converter, used more for human translation'],
  ['Decoder', 'Morse → text only', 'What you want when you have dots and dashes to read'],
  ['Encoder', 'Text → Morse only', 'The technical name for the generating direction'],
  ['Generator / maker', 'Text → Morse only', 'Usually adds audio or download options'],
];

const EXAMPLES: Array<[string, string, string]> = [
  ['SOS', '... --- ...', 'The one signal sent without letter gaps'],
  ['HELLO', '.... . .-.. .-.. ---', 'Five letters, four spaces'],
  ['HELLO WORLD', '.... . .-.. .-.. --- / .-- --- .-. .-.. -..', 'Note the slash for the word gap'],
  ['TEST', '- . ... -', 'Two dots-dash pairs'],
  ['73', '--... ...--', 'Ham radio sign-off'],
  ['CQ', '-.-. --.-', 'Calling any station'],
];

const LIMITS: Array<[string, string]> = [
  [
    'Prosigns have no letters',
    'SOS sent over the air is one continuous ...---... with no gaps. A converter has to guess where the letters are, and guessing produces a different word. Add the gaps back (... --- ...) to read it as three letters.',
  ],
  [
    'Timing is not in the text',
    'A converter reads the characters you give it, not the rhythm someone tapped. If the source message relied on unusual spacing, that information is lost the moment it becomes plain text.',
  ],
  [
    'American Morse is a different code',
    'It disagrees with International Morse on eleven of the twenty-six letters, and it puts internal gaps inside some characters. Converting a railroad document through an International table will produce nonsense that looks like a decode.',
  ],
  [
    'Nothing decodes out of context',
    'Morse has no case, no punctuation inference and no word boundaries beyond the ones written. Two plausible decodes can both be valid; the converter cannot pick the intended one.',
  ],
];

const SYMBOL_COUNT = Object.keys(CHAR_TO_MORSE).length;

export default function MorseCodeConverterPage() {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="text-4xl font-bold text-white text-center mb-4">Morse Code Converter</h1>
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-8">
        One box, both directions. Type English to get dots and dashes, or paste dots and dashes to get
        English back. Pasted code is cleaned up first, so bullets, en dashes, pipes and stray line
        breaks do not turn your message into gibberish.
      </p>

      <section className="mb-12">
        <MorseConverter initialDirection="encode" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">How to Convert, in Three Steps</h2>
        <ol className="text-gray-300 space-y-3 list-decimal list-inside leading-relaxed">
          <li>
            <strong className="text-white">Pick a direction.</strong> Text → Morse opens by default.
            Switch to Morse → Text if you already have code; Swap flips the direction and carries the
            current result across, so you can round-trip a message and check it survived.
          </li>
          <li>
            <strong className="text-white">Type or paste.</strong> The result updates as you type -
            there is no convert button, because there is nothing to batch.
          </li>
          <li>
            <strong className="text-white">Copy or listen.</strong> Copy result puts the output on your
            clipboard. Play as audio reads the Morse out loud at the speed and tone you selected, which
            is the fastest way to check a message before you send it.
          </li>
        </ol>
        <p className="text-gray-400 mt-4 leading-relaxed">
          The converter handles {SYMBOL_COUNT} symbols: the 26 letters, the 10 digits, and the
          punctuation marks that actually exist in the ITU table. Anything outside that set is dropped
          rather than approximated - a silent drop is easier to spot than a wrong character.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Converter, Translator, Decoder, Generator: Which Do You Need?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The four words get used interchangeably in search results, and the tools behind them are
          usually the same code. The difference is which direction opens by default:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">Term</th>
                <th className="px-4 py-3 text-left">Direction</th>
                <th className="px-4 py-3 text-left">When to use it</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {TERMS.map(([term, dir, note]) => (
                <tr key={term} className="border-t border-gray-800">
                  <td className="px-4 py-2 font-medium text-white">{term}</td>
                  <td className="px-4 py-2 font-mono text-xs">{dir}</td>
                  <td className="px-4 py-2 text-gray-400">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 mt-4">
          Dedicated pages for the single-direction cases:{' '}
          <Link href="/text-to-morse-code" className="text-blue-400 hover:text-blue-300 underline">
            text to Morse
          </Link>{' '}
          and{' '}
          <Link href="/morse-code-translator-to-english" className="text-blue-400 hover:text-blue-300 underline">
            Morse to English
          </Link>
          . The tool here is the same engine with both buttons on the same screen.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Why Pasted Morse Fails - and What This Converter Does About It</h2>
        <div className="text-gray-300 space-y-3 leading-relaxed">
          <p>
            Almost every &ldquo;the converter returns garbage&rdquo; complaint is a separator problem,
            not a decoding problem. Morse is a variable-length code, so a gap is data: it is the only
            thing that says where one letter ends. When the gap is lost or doubled, the letters change.
          </p>
          <p>Real messages arrive with separators that were never part of the standard:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className="text-white">Word processors</strong> replace <span className="font-mono">.</span>{' '}
              with <span className="font-mono">·</span> and <span className="font-mono">-</span> with{' '}
              <span className="font-mono">—</span> under smart-punctuation. Both are converted back here.
            </li>
            <li>
              <strong className="text-white">Forums and chats</strong> often use a pipe{' '}
              <span className="font-mono">|</span> for the word gap, which no decoder understands.
            </li>
            <li>
              <strong className="text-white">Copy-paste from a PDF</strong> inserts a line break mid-word,
              which reads as a word gap in a naive decoder and splits one word into two.
            </li>
            <li>
              <strong className="text-white">Double spaces</strong> where a single space was meant are
              read as word boundaries by this tool, because a human typing Morse usually means a wider
              gap when they leave a wider gap.
            </li>
          </ul>
          <p>
            The converter normalises all of that into one space between characters and{' '}
            <span className="font-mono">/</span> between words before decoding. What it cannot fix is a
            message with no gaps at all - <span className="font-mono">........</span> could be{' '}
            <span className="font-mono">HH</span>, <span className="font-mono">IEI</span> or a dozen
            other readings, and no tool can recover information that was never sent.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">What the Speed and Tone Settings Change</h2>
        <div className="text-gray-300 space-y-3 leading-relaxed">
          <p>
            Morse timing is measured in units, and one unit is <span className="font-mono">1200 ÷ WPM</span>{' '}
            milliseconds. At the default 20 WPM that is 60 ms, so a dot lasts 60 ms, a dash 180 ms, the
            gap inside a character 60 ms, between characters 180 ms and between words 420 ms. Move the
            slider and every one of those stretches or shrinks together.
          </p>
          <p>
            20 WPM is the usual default because it is the speed most practice material and proficiency
            tests assume. Beginners should not start there. At 5 WPM a unit is 240 ms, which leaves room
            to hear the difference between a dot and a dash; the convention among trainers is to learn
            characters at a moderate speed and slow the <em>spacing</em> instead, which is what Farnsworth
            timing does. This converter does not implement Farnsworth spacing - it slows everything
            together - so it is a listening aid rather than a training course. For that, see the{' '}
            <Link href="/practice" className="text-blue-400 hover:text-blue-300 underline">
              practice page
            </Link>{' '}
            or the{' '}
            <Link href="/learn" className="text-blue-400 hover:text-blue-300 underline">
              beginner guide
            </Link>
            .
          </p>
          <p>
            Tone matters less than speed, but it is not decorative: 700 Hz is the common default, and
            anything in the 400-1000 Hz band is fine. The practical reason to change it is background
            noise - a higher tone cuts through a room better, a lower one is less fatiguing over a long
            session.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Ready-Made Conversions</h2>
        <p className="text-gray-400 mb-4">
          Every line below uses the exact separators this tool produces, so it can be pasted straight
          into the box.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">Plain text</th>
                <th className="px-4 py-3 text-left">Morse code</th>
                <th className="px-4 py-3 text-left">Note</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {EXAMPLES.map(([text, code, note]) => (
                <tr key={text} className="border-t border-gray-800">
                  <td className="px-4 py-2 font-medium text-white">{text}</td>
                  <td className="px-4 py-2 font-mono text-xs tracking-wider select-all">{code}</td>
                  <td className="px-4 py-2 text-gray-400">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">What No Converter Can Do</h2>
        <div className="space-y-4">
          {LIMITS.map(([title, body]) => (
            <div key={title} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <h3 className="font-semibold text-white mb-1">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Converter Questions</h2>
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
            href="/chart"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Printable Chart →
          </Link>
          <Link
            href="/audio"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Audio Translator →
          </Link>
          <Link
            href="/morse-code-punctuation"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Punctuation →
          </Link>
        </div>
      </section>

      <RelatedPages currentPath="/morse-code-converter" />
      <AdBanner />
    </div>
  );
}
