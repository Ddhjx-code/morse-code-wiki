import type { Metadata } from 'next';
import MorseTranslator from '@/components/MorseTranslator';
import AdBanner from '@/components/AdBanner';
import Link from 'next/link';
import { CHAR_TO_MORSE } from '@/lib/morse';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// Every number on this page is derived from the live mapping table, so the copy
// cannot drift away from what the tool actually does.
const ENTRIES = Object.entries(CHAR_TO_MORSE);
const ALL_CHARS = ENTRIES.length;
const LETTER_COUNT = ENTRIES.filter(([k]) => /^[A-Z]$/.test(k)).length;
const DIGIT_COUNT = ENTRIES.filter(([k]) => /^[0-9]$/.test(k)).length;
const SYMBOL_COUNT = ALL_CHARS - LETTER_COUNT - DIGIT_COUNT;

// Standard timing: one unit = 1200 / WPM milliseconds. Default playback is 20 WPM.
const WPM = 20;
const UNIT = Math.round(1200 / WPM);

// Same strings render on the page and feed FAQPage schema, so markup cannot
// claim anything the visible content does not say.
const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is Morse code?',
    a: 'Morse code is a method of encoding text as sequences of short and long signals, called dots (.) and dashes (-). Each letter, digit and punctuation mark has its own unique pattern. It was developed in the 1830s and 1840s by Samuel Morse and Alfred Vail for the electric telegraph, and it is still in use today in amateur radio, aviation navigation beacons, maritime signalling and emergency communication.',
  },
  {
    q: 'How do you translate text to Morse code online?',
    a: 'Type or paste your text into the translator at the top of this page and the Morse equivalent appears immediately - nothing is sent to a server, the conversion runs in your browser. Press Play Audio to hear it as beeps, and use Copy to take the result with you. To go the other way, switch the translator to Morse to Text mode and paste a coded message using a single space between letters and " / " between words.',
  },
  {
    q: 'What does SOS look like in Morse code?',
    a: 'SOS is ...---... - three dots, three dashes, three dots. It is the international distress signal. Although it is written as three letters, it is transmitted as one continuous sequence with no letter spacing between the parts, and it does not stand for "Save Our Souls" or anything else; it was chosen because the pattern is unmistakable to send and to recognise.',
  },
  {
    q: 'How do you say I love you in Morse code?',
    a: 'I love you is .. / .-.. --- ...- . / -.-- --- ..- . It translates letter by letter as I = .., LOVE = .-.. --- ...- . and YOU = -.-- --- ..- . This is one of the most common phrases used in Morse code bracelets and tattoos, where the dots and dashes are engraved as jewellery motifs.',
  },
  {
    q: 'How long does a dot and a dash last?',
    a: `Duration is measured in units rather than seconds, so the same code works at any sending speed. A dot is one unit, a dash is three units, the gap inside a character is one unit, the gap between letters is three units and the gap between words is seven units. One unit equals 1200 divided by the sending speed in words per minute, so at this translator's default ${WPM} WPM a dot lasts ${UNIT} ms, a dash ${UNIT * 3} ms and the gap between words ${UNIT * 7} ms.`,
  },
  {
    q: 'Can Morse code represent punctuation and numbers?',
    a: `Yes. This translator covers the full International Morse alphabet: ${LETTER_COUNT} letters, ${DIGIT_COUNT} digits and ${SYMBOL_COUNT} punctuation and currency signs - ${ALL_CHARS} characters in total. Numbers are sent as five elements each, which is why they are easy to tell apart from letters. Characters with no standard Morse equivalent, such as emoji or accented letters, are left out of the output rather than approximated, so the result is always valid International Morse.`,
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

export default function Home() {
  return (
    <div className="py-12 px-4">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Morse Code Translator
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Convert text to Morse code and decode Morse code to text instantly.
          Listen to audio playback, copy results, and explore the complete Morse code alphabet.
        </p>
      </section>

      {/* Translator Tool */}
      <section className="mb-16">
        <MorseTranslator />
      </section>

      <AdBanner />

      {/* Quick Links */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Explore Morse Code
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickCard
            href="/alphabet"
            title="Alphabet A-Z"
            description="Complete Morse code chart for all letters and numbers"
            icon="·−"
          />
          <QuickCard
            href="/text-to-morse-code"
            title="Text to Morse"
            description="Turn any message into dots and dashes, one direction only"
            icon="→"
          />
          <QuickCard
            href="/audio"
            title="Audio Translator"
            description="Hear Morse code at any speed and learn to decode it by ear"
            icon="♫"
          />
          <QuickCard
            href="/chart"
            title="Printable Chart"
            description="Print or save the reference table for quick lookup"
            icon="▦"
          />
          <QuickCard
            href="/tattoo-generator"
            title="Tattoo Generator"
            description="Convert your name or phrase into a visual Morse code tattoo design"
            icon="◉"
          />
          <QuickCard
            href="/practice"
            title="Practice"
            description="Learn Morse code by listening and identifying letters"
            icon="⚑"
          />
          <QuickCard
            href="/sos"
            title="SOS Signal"
            description="The distress signal, how to send it and why it has no gaps"
            icon="✚"
          />
          <QuickCard
            href="/i-love-you"
            title="I Love You"
            description="How to say I Love You in Morse code for bracelets & tattoos"
            icon="♥"
          />
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-xl font-bold text-white">What is Morse Code?</h2>
        <p className="text-gray-400">
          Morse code is a communication method that encodes text characters as sequences of dots (·) and dashes (−).
          Developed in the 1830s by Samuel Morse and Alfred Vail, it was originally used for telegraph communications.
          Today, Morse code is still used in amateur radio, aviation, and as an accessibility tool.
        </p>

        <h2 className="text-xl font-bold text-white mt-8">How this Morse code translator works</h2>
        <p className="text-gray-400">
          The tool above is a two-way translator. In <strong>Text → Morse</strong> mode it splits
          your input into words, looks each character up in the International Morse table and
          joins the results into code. In <strong>Morse → Text</strong> mode it does the reverse:
          it reads your dots and dashes, matches each group against the table and rebuilds the
          original message. Both directions run entirely in your browser, so nothing you type is
          stored or transmitted, and the output updates as fast as you can write.
        </p>
        <p className="text-gray-400">
          The translator covers <strong>{LETTER_COUNT} letters, {DIGIT_COUNT} digits and{' '}
          {SYMBOL_COUNT} punctuation and currency signs</strong> — {ALL_CHARS} characters in
          total. Any character without a standard Morse equivalent, such as an emoji or a letter
          with a diacritic, is left out of the output instead of being approximated, so the
          result is always valid International Morse.
        </p>

        <h2 className="text-xl font-bold text-white mt-8">
          Writing Morse code so it can be translated back
        </h2>
        <p className="text-gray-400">
          The one thing that trips people up when decoding is spacing. Morse has no letters or
          word boundaries of its own — they are defined only by gaps. This translator uses the
          usual plain-text convention:
        </p>
        <ul className="text-gray-400 list-disc pl-6 mt-2">
          <li>One space between the dot-and-dash groups that form a single letter</li>
          <li>A slash with spaces around it (<code>{' / '}</code>) between words</li>
        </ul>
        <p className="text-gray-400 mt-2">
          So <code>SOS</code> becomes <code>... --- ...</code>, and <code>HELLO WORLD</code>{' '}
          becomes <code>.... . .-.. .-.. --- / .-- --- .-. .-.. -..</code>. If you paste Morse
          that uses a different convention — for example two spaces between words — the
          translation will run together into one long word. Split words with{' '}
          <code>/</code> and it decodes correctly.
        </p>

        <h2 className="text-xl font-bold text-white mt-8">Morse code timing rules</h2>
        <p className="text-gray-400">
          Real Morse is measured in time units, not characters, which is what lets the same code
          be sent slowly or at 30 words per minute and still be readable. A dot is one unit and
          a dash is three, with one unit of silence between the elements of a character, three
          units between letters and seven units between words. The table below shows what that
          means in milliseconds at the {WPM} WPM speed this site&apos;s audio uses by default —
          a dot is {UNIT} ms, a dash {UNIT * 3} ms, and the word gap {UNIT * 7} ms.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm text-gray-400 border border-gray-800 rounded-lg">
            <thead className="bg-gray-900 text-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Element</th>
                <th className="px-4 py-2 text-left">Units</th>
                <th className="px-4 py-2 text-left">At {WPM} WPM</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Dot (·)', '1', `${UNIT} ms`],
                ['Dash (−)', '3', `${UNIT * 3} ms`],
                ['Gap inside a character', '1', `${UNIT} ms`],
                ['Gap between letters', '3', `${UNIT * 3} ms`],
                ['Gap between words', '7', `${UNIT * 7} ms`],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-t border-gray-800">
                  <td className="px-4 py-2">{a}</td>
                  <td className="px-4 py-2">{b}</td>
                  <td className="px-4 py-2 font-mono">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 mt-3">
          You can slow this down or speed it up on the{' '}
          <Link href="/audio" className="text-blue-400 hover:text-blue-300">
            Morse code audio translator
          </Link>
          , which plays the same signals as a {700} Hz tone, and practise recognising them on the{' '}
          <Link href="/practice" className="text-blue-400 hover:text-blue-300">
            practice page
          </Link>
          .
        </p>

        <h2 className="text-xl font-bold text-white mt-8">
          Looking up individual letters and words
        </h2>
        <p className="text-gray-400">
          If you only need one symbol rather than a full translation, the reference pages are
          faster than typing it into the box. The{' '}
          <Link href="/alphabet" className="text-blue-400 hover:text-blue-300">
            Morse code alphabet
          </Link>{' '}
          lists all {LETTER_COUNT} letters and {DIGIT_COUNT} digits with audio for each, and the{' '}
          <Link href="/chart" className="text-blue-400 hover:text-blue-300">
            printable chart
          </Link>{' '}
          puts the same table on one page for reading off screen. Single characters have their own
          pages too —{' '}
          <Link href="/s-in-morse-code" className="text-blue-400 hover:text-blue-300">
            S in Morse code
          </Link>
          ,{' '}
          <Link href="/a-in-morse-code" className="text-blue-400 hover:text-blue-300">
            A
          </Link>{' '}
          and{' '}
          <Link href="/r-in-morse-code" className="text-blue-400 hover:text-blue-300">
            R
          </Link>{' '}
          explain the pattern behind each symbol and how to remember it. Common words are covered
          the same way, from{' '}
          <Link href="/hello" className="text-blue-400 hover:text-blue-300">
            hello
          </Link>{' '}
          to{' '}
          <Link href="/i-love-you" className="text-blue-400 hover:text-blue-300">
            I love you
          </Link>{' '}
          to{' '}
          <Link href="/sos" className="text-blue-400 hover:text-blue-300">
            the SOS distress signal
          </Link>
          .
        </p>
      </section>

      <section className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Morse code translator: questions &amp; answers
        </h2>
        <div className="space-y-5">
          {FAQS.map((f) => (
            <div key={f.q} className="border border-gray-800 rounded-lg p-5 bg-gray-900/40">
              <h3 className="text-base font-semibold text-white mb-2">{f.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}

function QuickCard({ href, title, description, icon }: {
  href: string; title: string; description: string; icon: string;
}) {
  return (
    <Link href={href} className="block p-5 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-600 transition-colors">
      <div className="text-2xl mb-2 text-blue-400">{icon}</div>
      <h3 className="font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </Link>
  );
}
