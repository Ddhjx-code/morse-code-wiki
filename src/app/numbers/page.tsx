import type { Metadata } from 'next';
import Link from 'next/link';
import { CHAR_TO_MORSE, textToMorse } from '@/lib/morse';
import AdBanner from '@/components/AdBanner';
import RelatedPages from '@/components/RelatedPages';

export const metadata: Metadata = {
  alternates: { canonical: '/numbers' },
  title: 'Morse Code Numbers 0-9 - Chart, Pattern Rule & Phone Number Examples',
  description:
    'Morse code numbers 0-9 with the five-signal pattern rule, how to read a digit back from its code, how to send a phone number or a repeated digit like 4444, and whether number codes differ around the world.',
  keywords:
    'morse code numbers, morse code numbers 0-9, number morse code, convert mobile number into morse code, 4444 morse code, morse code for 143, morse code numbers is it the same worldwide',
};

export default function NumbersPage() {
  const NUMBERS = '0123456789'.split('');
  const digits = (value: string) => pretty(textToMorse(value));

  const EXAMPLES = ['2026', '143', '007', '911', '100', '4444', '555 0142'];
  const REVERSE = [...NUMBERS].sort((a, b) => CHAR_TO_MORSE[a].localeCompare(CHAR_TO_MORSE[b]));

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Morse Code Numbers
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Numbers in Morse code follow a simple, elegant pattern — once you learn it, you will never
        need to look up a chart again.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Complete Number Chart (0-9)</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {NUMBERS.map((num) => (
            <div
              key={num}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-white">{num}</span>
                <span className="text-lg font-mono text-green-400 tracking-wider">
                  {pretty(CHAR_TO_MORSE[num])}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-4">
          Every one of the ten digits is exactly five signals long. That single fact is what makes
          numbers the easiest part of Morse to learn, and it is also what lets you read a digit back
          without a chart.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The Pattern Rule (Easy to Memorize)</h2>
        <div className="space-y-4">
          {MEMORY_RULES.map(({ range, rule, example }) => (
            <div key={range} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <p className="text-white font-bold mb-1">Numbers {range}</p>
              <p className="text-gray-300 text-sm mb-2">{rule}</p>
              <p className="font-mono text-green-400 text-sm">{example}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
          <p className="text-sm text-gray-400">
            <strong className="text-white">Why it works:</strong> Numbers 1-5 start with dots and gain
            one dash each step. Numbers 6-0 are the mirror image — they start with dashes and gain one
            dot each step. Once you remember that <strong className="text-white">5 = ·····</strong> and{' '}
            <strong className="text-white">0 = −−−−−</strong>, the rest follows automatically.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Reading a digit back from its code</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The reverse direction is where most people get stuck, and it needs no memorisation at all.
          Count the signals first: if there are not five of them, you are looking at a letter, not a
          digit. If there are five, see which element comes first. A group that{' '}
          <em>starts with dots</em> is simply the number of those dots, so three dots and two dashes is
          3. A group that <em>starts with dashes</em> is five plus the number of dashes, so one dash
          and four dots is 6, and two dashes and three dots is 7. Five dashes is the one special case:
          5 + 5 wraps around and that group is 0.
        </p>
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-800/50">
                <th className="text-left py-3 px-4 text-gray-300">Code you received</th>
                <th className="text-left py-3 px-4 text-gray-300">Digit</th>
                <th className="text-left py-3 px-4 text-gray-300">Why</th>
              </tr>
            </thead>
            <tbody>
              {REVERSE.map((d) => (
                <tr key={d} className="border-b border-gray-800 last:border-0">
                  <td className="py-2 px-4 font-mono text-green-400 tracking-wider">
                    {pretty(CHAR_TO_MORSE[d])}
                  </td>
                  <td className="py-2 px-4 text-white font-bold">{d}</td>
                  <td className="py-2 px-4 text-gray-400">{explain(d)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-sm mt-4">
          So a lone <span className="font-mono">−····</span> is not &quot;some letter&quot; — one dash
          followed by four dots is the digit <strong className="text-white">6</strong>, which is exactly
          the pattern people most often mis-read. Likewise <span className="font-mono">··−−−</span> is 2
          and <span className="font-mono">−−−−−</span> is 0.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Multi-digit numbers, phone numbers and repeats
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Digits are sent one after another with the ordinary letter gap between them — there is no
          special separator for digit boundaries, because the fixed five-signal length already tells
          the receiver where one digit ends. To write it out, put a single space between digits and a
          slash with spaces around it between groups, which is how the translator on this site formats
          a number you paste in.
        </p>
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-800/50">
                <th className="text-left py-3 px-4 text-gray-300">Number</th>
                <th className="text-left py-3 px-4 text-gray-300">Morse code</th>
              </tr>
            </thead>
            <tbody>
              {EXAMPLES.map((value) => (
                <tr key={value} className="border-b border-gray-800 last:border-0">
                  <td className="py-3 px-4 text-white font-bold whitespace-nowrap">{value}</td>
                  <td className="py-3 px-4 font-mono text-green-400 tracking-wider">
                    {digits(value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-sm mt-4">
          A mobile number such as 555 0142 is therefore{' '}
          <span className="font-mono text-green-400">{digits('555 0142')}</span> — the three-digit
          group and the four-digit group separated by the word gap. Repeated digits are no exception:{' '}
          <span className="font-mono text-green-400">{digits('4444')}</span> is simply the pattern for
          4 four times, and because each copy is five elements long, four identical patterns in a row
          are easy to count rather than mis-hear.
        </p>
        <p className="text-gray-500 text-sm mt-3">
          Numbers are usually the first thing beginners can copy reliably by ear, for exactly this
          reason: every digit takes the same time to send, so the rhythm never changes.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Are Morse number codes the same worldwide?
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Yes. The ten patterns above are the International Morse digits, which the ITU standardises
          and which amateur radio, maritime and aviation operators use everywhere. A station in Japan
          and a station in Brazil send and read the same five-signal digits, so a phone number or a
          grid locator crosses languages unchanged. The one exception you may meet is{' '}
          <Link
            href="/american-morse-code-chart"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            American Morse
          </Link>
          , the 19th-century United States railroad code, which assigns different patterns to a number
          of characters — it is of historical interest only and is not what a modern chart or translator
          produces. If you are learning for radio, or engraving a number into jewellery, the
          International digits are the ones you want.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
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
          <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Translate Numbers Now
          </Link>
          <Link href="/alphabet" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors">
            Letters A-Z →
          </Link>
          <Link href="/audio" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors">
            Hear The Digits →
          </Link>
        </div>
      </section>
      <RelatedPages currentPath="/numbers" />
      <AdBanner />
    </div>
  );
}

function pretty(code: string): string {
  return code.replace(/\./g, '·').replace(/-/g, '−');
}

function explain(digit: string): string {
  const code = CHAR_TO_MORSE[digit];
  const dots = code.split('').filter((c) => c === '.').length;
  if (code.startsWith('.')) {
    return `${dots} dot${dots === 1 ? '' : 's'} leading = ${digit}`;
  }
  const dashes = code.length - dots;
  return `${dashes} dash${dashes === 1 ? '' : 'es'} leading = 5 + ${dashes} = ${digit}`;
}

const MEMORY_RULES = [
  { range: '1 – 5', rule: 'Start with dots and add dashes', example: '1 = ·−−−−  →  5 = ·····' },
  { range: '6 – 0', rule: 'Start with dashes and add dots', example: '6 = −····  →  0 = −−−−−' },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How do you write numbers 1-10 in Morse code?',
    a: '1 = ·−−−−, 2 = ··−−−, 3 = ···−−, 4 = ····−, 5 = ·····, 6 = −····, 7 = −−···, 8 = −−−··, 9 = −−−−·, and 0 = −−−−−. There is no separate pattern for 10 — it is written as two digits: 1 (·−−−−) followed by 0 (−−−−−).',
  },
  {
    q: 'Is there a separate Morse code for numbers and letters?',
    a: 'No — numbers and letters use the same system, just different sequences. There is no ambiguity because no letter shares the exact same code as a number: letters are one to four signals long, while numbers are always five signals long.',
  },
  {
    q: 'What is 143 in Morse code?',
    a: '143 in Morse code is ·−−−− ····− ···−−. Note that "143" is separately known as a numeric code for "I Love You" (1 letter + 4 letters + 3 letters), but that is a different code system, not Morse.',
  },
  {
    q: 'How do I convert a mobile number into Morse code?',
    a: `Write the number as plain digits and put it through the translator — every digit on this page maps one to one, so 555 0142 becomes ${pretty(textToMorse('555 0142'))}. Keep the slash between the two groups so the receiver can tell where the area code ends, and do not try to abbreviate the long digits: each one is five signals whether you need the space or not.`,
  },
  {
    q: 'What is the difference between the sending side and the receiving side?',
    a: 'The sending side chooses the characters and produces the dots and dashes, either as sound, light or taps. The receiving side only has to recognise five-signal groups and map them back to digits, which is easier than it sounds because all ten digits take exactly the same time to send. In written form both sides use the same notation, so a message typed here can be copied straight onto paper and read back.',
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
