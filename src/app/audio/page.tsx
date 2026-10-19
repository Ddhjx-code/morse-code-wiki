import type { Metadata } from 'next';
import AudioTranslator from './AudioTranslator';
import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import RelatedPages from '@/components/RelatedPages';

export const metadata: Metadata = {
  alternates: { canonical: '/audio' },
  title: 'Morse Code Audio - Listen, Adjust Speed and Pitch, Decode by Ear',
  description:
    'Morse code audio translator with a speed slider from 5 to 35 WPM and pitch from 400 to 1000 Hz. Hear text as real dot-and-dash timing, learn to decode by ear, and find out where Morse transmissions still live on the air.',
  keywords:
    'morse code audio translator, listen to morse code transmissions, morse code encoder with clicker, morse code sound, morse code audio to text, morse code audio generator',
};

const SPEED_MIN = 5;
const SPEED_MAX = 35;
const SPEED_DEFAULT = 20;
const PITCH_MIN = 400;
const PITCH_MAX = 1000;
const PITCH_DEFAULT = 700;
const PITCH_STEP = 50;

const unitMs = (wpm: number) => Math.round(1200 / wpm);

const SPEEDS = [SPEED_MIN, 10, SPEED_DEFAULT, 30, SPEED_MAX];

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How do I listen to Morse code?',
    a: `Type any text into the box above and press play. The tool sounds it out as a ${PITCH_DEFAULT} Hz tone using the standard dot, dash and gap timings, and you can drag the speed slider anywhere between ${SPEED_MIN} and ${SPEED_MAX} WPM until the rhythm is slow enough to follow. Start well below your comfort point and move up as the patterns start to sound like letters rather than clicks.`,
  },
  {
    q: 'Are there real Morse code transmissions I can listen to?',
    a: 'Yes. Amateur radio operators still send voice-free Morse on the HF, VHF and UHF amateur bands, which is where most live Morse you will stumble across comes from. Aviation is the other one: VOR and ILS ground beacons identify themselves by broadcasting their three-letter name in Morse, so a pilot or scanner listener hears the station identifier as a repeating Morse note rather than a spoken word. Both are worth listening to once you can copy a few letters, because real transmissions are faster and noisier than any practice tool.',
  },
  {
    q: 'What is a Morse code clicker?',
    a: 'A clicker, or practice oscillator, is a small box that turns a key or paddle into an audible tone so you can hear what you are sending without transmitting. It responds to your hand in real time, which is what makes it a keying trainer. This page is the opposite direction: it plays a message you have already written, so you practise receiving rather than sending. Both are useful, and most people want to be able to do each of them.',
  },
  {
    q: 'What speed should I start at?',
    a: `Slow enough that you can tell a dot from a dash without counting, which for most people is around ${SPEED_MIN} to 10 WPM on the slider. Speed here is measured against the reference word PARIS, which works out to fifty dot-lengths once you include the space that follows a word, so at ${SPEED_DEFAULT} WPM a dot lasts ${unitMs(SPEED_DEFAULT)} ms while at 10 WPM it lasts ${unitMs(10)} ms.`,
  },
  {
    q: 'Does the pitch of the tone matter?',
    a: `Only for comfort. The slider covers ${PITCH_MIN} to ${PITCH_MAX} Hz in ${PITCH_STEP} Hz steps and defaults to ${PITCH_DEFAULT} Hz, which is the tone every other page on this site uses. Nothing in Morse timing changes with pitch, so pick whichever frequency is easiest for you to hear over a long session and leave it.`,
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

export default function AudioPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Morse Code Audio Translator
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Listen to any text as Morse code audio. Drag the speed from {SPEED_MIN} to {SPEED_MAX} WPM and
        the pitch from {PITCH_MIN} to {PITCH_MAX} Hz until the rhythm is comfortable, then practise
        taking it by ear.
      </p>

      <AudioTranslator />

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-6">What the audio is actually doing</h2>
        <p className="text-gray-400 mb-4">
          A Morse transmission is one continuous tone switched on and off. Nothing about the pitch
          carries meaning — only the lengths do, and they are all multiples of a single unit:
        </p>
        <ul className="text-gray-400 space-y-2">
          <li>
            <strong className="text-white">Dot (·)</strong> — tone on for 1 unit
          </li>
          <li>
            <strong className="text-white">Dash (−)</strong> — tone on for 3 units
          </li>
          <li>
            <strong className="text-white">Inside a character</strong> — 1 unit of silence between
            elements
          </li>
          <li>
            <strong className="text-white">Between characters</strong> — 3 units of silence
          </li>
          <li>
            <strong className="text-white">Between words</strong> — 7 units of silence
          </li>
        </ul>
        <p className="text-gray-400 mt-4">
          The unit itself comes from the speed. Morse is measured in words per minute against the
          reference word PARIS, and PARIS costs fifty dot-lengths once you count the seven-unit space
          that follows it. Fifty words a minute at fifty units each is 2500 units, so one unit is
          60000 ms divided by that — which simplifies to <strong className="text-white">1200 ÷
          WPM</strong>. That is the formula the player above uses, and it is why the numbers below are
          exact rather than approximate.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">Speed</th>
                <th className="px-4 py-3 text-left">Dot</th>
                <th className="px-4 py-3 text-left">Dash</th>
                <th className="px-4 py-3 text-left">Letter gap</th>
                <th className="px-4 py-3 text-left">Word gap</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {SPEEDS.map((w) => (
                <tr key={w} className="border-t border-gray-800">
                  <td className="px-4 py-2 text-white">
                    {w} WPM{w === SPEED_DEFAULT ? ' (default)' : ''}
                  </td>
                  <td className="px-4 py-2 font-mono">{unitMs(w)} ms</td>
                  <td className="px-4 py-2 font-mono">{unitMs(w) * 3} ms</td>
                  <td className="px-4 py-2 font-mono">{unitMs(w) * 3} ms</td>
                  <td className="px-4 py-2 font-mono">{unitMs(w) * 7} ms</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mt-3">
          At {SPEED_DEFAULT} WPM a five-letter word takes about{' '}
          {(unitMs(SPEED_DEFAULT) * 50) / 1000} seconds, which is roughly how fast it has to be for
          the rhythm to start sounding like letters instead of separate clicks.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Where to find real Morse on the air</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Amateur radio</h3>
            <p className="text-sm text-gray-400">
              Continuous-wave sending is still licensed and actively used on the amateur bands. It is
              the largest source of live Morse you can simply tune into, and unlike this tool it comes
              with fading, interference and operators sending at whatever speed they like.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Aviation beacons</h3>
            <p className="text-sm text-gray-400">
              VOR and ILS ground stations identify themselves by sending their three-letter name in
              Morse, over and over, underneath the navigation signal. It is one of the few places a
              beginner can hear real Morse that never changes, which makes it easy to practise on.
            </p>
          </div>
        </div>
        <p className="text-gray-400 mt-4">
          If you want to hear it from your own key rather than from a recording, that is a{' '}
          <strong className="text-white">practice oscillator</strong>, often called a clicker: a box
          that turns the contacts of a key into a tone so you can hear what you are sending without
          going on air. This page plays messages at you; a clicker answers when you send. The{' '}
          <Link href="/practice" className="text-blue-400 hover:text-blue-300 underline">
            practice page
          </Link>{' '}
          covers the receiving side of that trade.
        </p>
        <p className="text-gray-400 mt-3">
          For where to find live Morse rather than a recording - scheduled practice stations,
          internet-connected receivers you can tune from a browser, and the aviation beacons that
          still send their identifiers in code - see{" "}
          <Link
            href="/listen-to-morse-code-transmissions"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            how to listen to real Morse code transmissions
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Learning to copy by ear</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Rhythm, not counting</h3>
            <p className="text-sm text-gray-400">
              Counting dots and dashes works only until about ten words a minute. Past that, operators
              recognise a character the way you recognise a spoken word — by the shape of its sound.
              That is what the audio above is for: hear each letter enough times that the pattern
              becomes one object rather than a sum of parts.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Start with the easy five</h3>
            <p className="text-sm text-gray-400">
              The digits are the best first thing to copy by ear, because all ten are exactly five
              signals long and take the same time to send. Once you can hear where a digit ends,
              letters become easy by comparison. The{' '}
              <Link href="/numbers" className="text-blue-400 hover:text-blue-300 underline">
                number chart
              </Link>{' '}
              shows the pattern rule.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Farnsworth, if the letters blur</h3>
            <p className="text-sm text-gray-400">
              Farnsworth means sending the characters themselves at a real speed but leaving extra
              silence between them, so each letter keeps the rhythm you will eventually need while you
              get thinking time between them. This player has no separate gap control, so the practical
              version here is to learn at a low WPM setting and then move the slider up in small steps.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Pitch is personal</h3>
            <p className="text-sm text-gray-400">
              Nothing in Morse timing depends on frequency, so the {PITCH_MIN}–{PITCH_MAX} Hz slider is
              purely about what is comfortable to hear for twenty minutes without fatigue. The rest of
              the site plays at {PITCH_DEFAULT} Hz; change it here only if that pitch is hard for you
              to pick out.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Audio questions</h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <details key={f.q} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <summary className="font-medium text-white cursor-pointer">{f.q}</summary>
              <p className="text-gray-400 text-sm mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/practice" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Practice Decoding →
          </Link>
          <Link href="/alphabet" className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors">
            Alphabet Reference →
          </Link>
          <Link href="/" className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors">
            Text Translator →
          </Link>
        </div>
      </section>
      <RelatedPages currentPath="/audio" />
      <AdBanner />
    </div>
  );
}
