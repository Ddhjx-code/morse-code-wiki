import type { Metadata } from 'next';
import Link from 'next/link';
import HelloAudio from './HelloAudio';
import AdBanner from '@/components/AdBanner';

export const metadata: Metadata = {
  title: 'Hello in Morse Code - Pattern, Sound & Examples',
  description:
    'Hello in Morse code is .... . .-.. .-.. ---. Learn the letter-by-letter pattern, listen to the audio, and see how to say common greetings in Morse code.',
  keywords:
    'hello in morse code, morse code hello, how to say hello in morse code, morse code greetings, hi in morse code',
};

const BREAKDOWN = [
  { letter: 'H', code: '····' },
  { letter: 'E', code: '·' },
  { letter: 'L', code: '·−··' },
  { letter: 'L', code: '·−··' },
  { letter: 'O', code: '−−−' },
];

const GREETINGS = [
  { text: 'HELLO', morse: '···· · ·−·· ·−·· −−−' },
  { text: 'HI', morse: '···· ··' },
  { text: 'HELLO WORLD', morse: '···· · ·−·· ·−·· −−− / ·−− −−− ·−· ·−·· −··' },
  { text: 'GOOD MORNING', morse: '−−· −−− −−− −·· / −− −−− ·−· −· ·· −· −−·' },
  { text: 'GOOD NIGHT', morse: '−−· −−− −−− −·· / −· ·· −−· ···· −' },
  { text: 'THANK YOU', morse: '− ···· ·− −· −−· / −·−− −−− ··−' },
  { text: 'WELCOME', morse: '·−− · ·−·· −·−· −−− −− ·' },
  { text: 'GOODBYE', morse: '−−· −−− −−− −·· −··· −·−− ·' },
];

export default function HelloPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Hello in Morse Code
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        &ldquo;Hello&rdquo; is one of the most common words people translate into Morse code.
        Here is exactly how to write it, say it, and tap it.
      </p>

      <section className="mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">HELLO</p>
          <p className="text-3xl md:text-4xl font-mono text-green-400 tracking-[0.2em] mb-6">
            ···· / · / ·−·· / ·−·· / −−−
          </p>
          <HelloAudio morse=".... . .-.. .-.. ---" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Letter-by-Letter Breakdown</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-800/50">
                <th className="text-left py-3 px-4 text-gray-300">Letter</th>
                <th className="text-left py-3 px-4 text-gray-300">Morse Code</th>
                <th className="text-left py-3 px-4 text-gray-300">Rhythm</th>
              </tr>
            </thead>
            <tbody>
              {BREAKDOWN.map((row, i) => (
                <tr key={i} className="border-b border-gray-800 last:border-0">
                  <td className="py-3 px-4 text-white font-bold">{row.letter}</td>
                  <td className="py-3 px-4 font-mono text-green-400 tracking-wider">{row.code}</td>
                  <td className="py-3 px-4 text-gray-400">
                    {row.letter === 'H' && 'four quick dots'}
                    {row.letter === 'E' && 'a single dot'}
                    {row.letter === 'L' && 'dot, dash, dot, dot'}
                    {row.letter === 'O' && 'three long dashes'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mt-3">
          Note that the two L letters are identical — HELLO contains a double L, so its code repeats twice.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">How to Tap &ldquo;Hello&rdquo;</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            Morse code works with any on/off signal — tapping, blinking, or flashes of light. To tap &ldquo;HELLO&rdquo;:
          </p>
          <ol className="text-gray-400 space-y-2 text-sm">
            <li><span className="text-white font-mono">tap tap tap tap</span> — H (····)</li>
            <li><span className="text-gray-500">pause</span></li>
            <li><span className="text-white font-mono">tap</span> — E (·)</li>
            <li><span className="text-gray-500">pause</span></li>
            <li><span className="text-white font-mono">tap HOLD tap tap</span> — L (·−··)</li>
            <li><span className="text-gray-500">pause</span></li>
            <li><span className="text-white font-mono">tap HOLD tap tap</span> — L (·−··)</li>
            <li><span className="text-gray-500">pause</span></li>
            <li><span className="text-white font-mono">HOLD HOLD HOLD</span> — O (−−−)</li>
          </ol>
          <p className="text-gray-500 text-sm mt-4">
            Keep a short gap between letters and a longer gap between words so the listener can separate them.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Common Greetings in Morse Code</h2>
        <div className="space-y-3">
          {GREETINGS.map(({ text, morse }) => (
            <div
              key={text}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <span className="font-semibold text-white">{text}</span>
              <span className="font-mono text-green-400 text-sm tracking-wider">{morse}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Translate Any Text
          </Link>
          <Link href="/alphabet" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors">
            Full Alphabet →
          </Link>
        </div>
      </section>
      <AdBanner />
    </div>
  );
}
