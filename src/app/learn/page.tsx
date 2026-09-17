import type { Metadata } from 'next';
import Link from 'next/link';
import AdBanner from '@/components/AdBanner';

export const metadata: Metadata = {
  title: 'How to Learn Morse Code - Complete Beginner Guide',
  description:
    'Learn Morse code step by step. Complete beginner guide covering the Koch method, Farnsworth technique, practice schedule, memory tricks, and common mistakes to avoid.',
  keywords:
    'how to learn morse code, morse code beginner guide, learn morse code, morse code practice, morse code tips, Koch method, Farnsworth method',
};

export default function LearnPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        How to Learn Morse Code
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        A complete step-by-step guide for beginners. Learn Morse code the right way — by ear,
        not by counting dots and dashes. Most people achieve basic proficiency in 2-4 weeks
        with daily practice.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Step 1: Learn by Sound, Not by Sight</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            The single most important rule: <strong className="text-white">never learn Morse code by counting dots and dashes visually.</strong>
            Each character has a unique rhythm that your brain can recognize instantly — just like you recognize
            spoken words without spelling them out letter by letter.
          </p>
          <div className="bg-gray-800 rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-400">
              <strong className="text-red-400">❌ Wrong approach:</strong> See &quot;.-&quot; → count &quot;one dot, one dash&quot; → look up table → &quot;A&quot;
            </p>
            <p className="text-sm text-gray-400 mt-2">
              <strong className="text-green-400">✅ Right approach:</strong> Hear &quot;di-dah&quot; → instantly know &quot;A&quot; (no translation step)
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Step 2: Use the Koch Method</h2>
        <div className="prose prose-invert prose-gray max-w-none">
          <p className="text-gray-400">
            The <strong className="text-white">Koch method</strong> (developed by German psychologist Ludwig Koch in 1935) is the most effective
            way to learn Morse code:
          </p>
          <ol className="text-gray-400 space-y-3 mt-4">
            <li>
              <strong className="text-white">Start with 2 characters only</strong> (typically K and M) at full target speed (e.g., 20 WPM)
            </li>
            <li>Practice until you achieve <strong className="text-white">90% accuracy</strong> with those 2 characters
            </li>
            <li>Add <strong className="text-white">one new character</strong> to the set
            </li>
            <li>Practice until 90% accuracy again, then add another
            </li>
            <li>Repeat until you know the full alphabet
            </li>
          </ol>
          <p className="text-gray-400 mt-4">
            The key insight: always practice at <em>full speed</em>. Never slow down individual characters.
            Instead, increase the spacing between characters (see Farnsworth method below).
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Step 3: Farnsworth Spacing</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            The <strong className="text-white">Farnsworth method</strong> separates two speeds:
          </p>
          <ul className="text-gray-400 space-y-2">
            <li><strong className="text-white">Character speed</strong> (e.g., 20 WPM) — how fast dots and dashes are sent within each letter</li>
            <li><strong className="text-white">Overall speed</strong> (e.g., 10 WPM) — how fast characters are spaced apart</li>
          </ul>
          <p className="text-gray-400 mt-4">
            This gives you extra thinking time between letters while training your ear at the real speed
            you&apos;ll eventually need. As you improve, gradually reduce the spacing until both speeds match.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Step 4: Daily Practice Schedule</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 text-gray-300">Week</th>
                <th className="text-left py-2 text-gray-300">Characters</th>
                <th className="text-left py-2 text-gray-300">Daily Time</th>
                <th className="text-left py-2 text-gray-300">Goal</th>
              </tr>
            </thead>
            <tbody className="text-gray-400">
              <tr className="border-b border-gray-800">
                <td className="py-2">Week 1</td>
                <td className="py-2">E, T, A, I, N, O, S (7 letters)</td>
                <td className="py-2">15 min/day</td>
                <td className="py-2">90% accuracy on all 7</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2">Week 2</td>
                <td className="py-2">+ H, R, D, L, U, C, M (14 letters)</td>
                <td className="py-2">15 min/day</td>
                <td className="py-2">90% accuracy on all 14</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2">Week 3</td>
                <td className="py-2">Full alphabet A-Z</td>
                <td className="py-2">15 min/day</td>
                <td className="py-2">90% accuracy on 26 letters</td>
              </tr>
              <tr>
                <td className="py-2">Week 4+</td>
                <td className="py-2">Numbers + common words</td>
                <td className="py-2">20 min/day</td>
                <td className="py-2">Decode short messages</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Step 5: Memory Tricks</h2>
        <div className="prose prose-invert prose-gray max-w-none">
          <p className="text-gray-400">
            Use <strong className="text-white">rhythmic mnemonics</strong> where stressed syllables = dashes and unstressed = dots:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            <div className="bg-gray-900 rounded-lg p-3 text-sm">
              <span className="text-white font-bold">E</span> = <span className="text-green-400">·</span> → &quot;eh&quot;
            </div>
            <div className="bg-gray-900 rounded-lg p-3 text-sm">
              <span className="text-white font-bold">T</span> = <span className="text-green-400">−</span> → &quot;TALL&quot;
            </div>
            <div className="bg-gray-900 rounded-lg p-3 text-sm">
              <span className="text-white font-bold">A</span> = <span className="text-green-400">·−</span> → &quot;a-PART&quot;
            </div>
            <div className="bg-gray-900 rounded-lg p-3 text-sm">
              <span className="text-white font-bold">I</span> = <span className="text-green-400">··</span> → &quot;i-bid&quot;
            </div>
            <div className="bg-gray-900 rounded-lg p-3 text-sm">
              <span className="text-white font-bold">M</span> = <span className="text-green-400">−−</span> → &quot;MORE-CODE&quot;
            </div>
            <div className="bg-gray-900 rounded-lg p-3 text-sm">
              <span className="text-white font-bold">S</span> = <span className="text-green-400">···</span> → &quot;si-si-si&quot;
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Common Mistakes to Avoid</h2>
        <div className="space-y-3">
          <div className="bg-gray-900 border border-red-900/30 rounded-lg p-4">
            <p className="text-red-400 font-semibold text-sm">❌ Learning from visual charts first</p>
            <p className="text-gray-400 text-sm mt-1">This creates a translation bottleneck. You&apos;ll always need to look up the chart instead of recognizing sounds.</p>
          </div>
          <div className="bg-gray-900 border border-red-900/30 rounded-lg p-4">
            <p className="text-red-400 font-semibold text-sm">❌ Practicing at slow speeds</p>
            <p className="text-gray-400 text-sm mt-1">Slow character speed creates habits you&apos;ll have to unlearn. Always use full speed + extra spacing instead.</p>
          </div>
          <div className="bg-gray-900 border border-red-900/30 rounded-lg p-4">
            <p className="text-red-400 font-semibold text-sm">❌ Marathon sessions once a week</p>
            <p className="text-gray-400 text-sm mt-1">15 minutes daily beats 2 hours weekly. Your brain needs repetition over time to build automatic recognition.</p>
          </div>
          <div className="bg-gray-900 border border-red-900/30 rounded-lg p-4">
            <p className="text-red-400 font-semibold text-sm">❌ Adding too many characters at once</p>
            <p className="text-gray-400 text-sm mt-1">One new character at a time. Adding 5 letters at once overwhelms your pattern recognition.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Recommended Resources</h2>
        <div className="prose prose-invert prose-gray max-w-none">
          <ul className="text-gray-400 space-y-2">
            <li><Link href="/practice" className="text-blue-400 hover:underline">Our Practice Tool</Link> — audio-based quiz with progressive difficulty</li>
            <li><Link href="/audio" className="text-blue-400 hover:underline">Audio Translator</Link> — play any text as Morse code sound</li>
            <li><a href="https://morsecode.world/international/translator.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">MorseCode.World</a> — comprehensive Morse code reference (external)</li>
            <li><a href="https://en.wikipedia.org/wiki/Morse_code" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Wikipedia: Morse Code</a> — history and technical details (external)</li>
          </ul>
        </div>
      </section>

      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/practice" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Start Practicing Now
          </Link>
          <Link href="/alphabet" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors">
            Alphabet Reference →
          </Link>
        </div>
      </section>
      <AdBanner />
    </div>
  );
}
