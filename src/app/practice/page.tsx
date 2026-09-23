import type { Metadata } from 'next';
import PracticeGame from './PracticeGame';
import AdBanner from '@/components/AdBanner';
import RelatedPages from '@/components/RelatedPages';

export const metadata: Metadata = {
  alternates: { canonical: '/practice' },
  title: 'Morse Code Practice - Learn by Listening',
  description:
    'Practice Morse code online for free. Listen to audio and identify letters. Gradually increase difficulty from beginner to advanced. Track your progress.',
  keywords:
    'morse code practice, learn morse code, morse code game, morse code practice online, morse code training, morse code quiz',
};

export default function PracticePage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Morse Code Practice
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Learn Morse code by ear — the most effective method. Listen to the audio signal,
        then type the letter you hear. Start with common letters and progress to the full alphabet.
      </p>

      <PracticeGame />

      {/* Learning Tips */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-6">Tips for Learning Morse Code</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">🎧 Learn by Sound</h3>
            <p className="text-sm text-gray-400">
              Don&apos;t count dots and dashes visually. Learn to recognize each letter by its unique
              rhythm and sound, just like you recognize spoken words.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">📅 Practice Daily</h3>
            <p className="text-sm text-gray-400">
              15 minutes daily is far more effective than 2 hours once a week.
              Consistency builds muscle memory for the sound patterns.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">🎯 Start with E and T</h3>
            <p className="text-sm text-gray-400">
              Begin with the simplest letters (E = · , T = −) then add one new letter at a time.
              Only add more when you hit 90% accuracy.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">⚡ Full Speed from Day 1</h3>
            <p className="text-sm text-gray-400">
              Always practice at the character speed you want to achieve (e.g., 20 WPM).
              Slow it down with extra spacing between letters, not by stretching each character.
            </p>
          </div>
        </div>
      </section>
      <RelatedPages currentPath="/practice" />
      <AdBanner />
    </div>
  );
}
