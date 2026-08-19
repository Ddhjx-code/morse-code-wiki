import type { Metadata } from 'next';
import TattooGenerator from './TattooGenerator';

export const metadata: Metadata = {
  title: 'Morse Code Tattoo Generator - Design Your Custom Tattoo',
  description:
    'Free Morse code tattoo generator. Convert any text into a visual dot-and-dash design ready for your tattoo artist. Choose from multiple styles: linear, bracelet, vertical.',
  keywords:
    'morse code tattoo generator, morse code tattoo, morse code tattoo design, morse code tattoo ideas, morse code tattoo i love you',
};

export default function TattooGeneratorPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Morse Code Tattoo Generator
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Convert any word or phrase into a visual Morse code design perfect for tattoos.
        Choose a style, customize the look, and save your design.
      </p>

      <TattooGenerator />

      {/* Popular Tattoo Ideas */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-6">Popular Morse Code Tattoo Ideas</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { phrase: 'I Love You', meaning: 'Classic romantic choice for couples' },
            { phrase: 'Breathe', meaning: 'Reminder for mindfulness and calm' },
            { phrase: 'Be Brave', meaning: 'Encouragement through tough times' },
            { phrase: 'Family', meaning: 'Bond with loved ones' },
            { phrase: 'Strength', meaning: 'Personal empowerment' },
            { phrase: 'Freedom', meaning: 'Independence and liberation' },
            { phrase: 'Hope', meaning: 'Optimism in difficult moments' },
            { phrase: 'Forever', meaning: 'Eternal love or commitment' },
          ].map(({ phrase, meaning }) => (
            <div key={phrase} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <p className="font-semibold text-white">{phrase}</p>
              <p className="text-sm text-gray-500">{meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placement Guide */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Best Placement for Morse Code Tattoos</h2>
        <div className="prose prose-invert prose-gray max-w-none">
          <ul className="text-gray-400 space-y-2">
            <li><strong className="text-white">Wrist (inner)</strong> — Most popular. Visible to you, easy to hide. Works best for short phrases.</li>
            <li><strong className="text-white">Collarbone</strong> — Elegant horizontal line. Great for medium-length phrases.</li>
            <li><strong className="text-white">Forearm</strong> — More space for longer messages. Can be horizontal or vertical.</li>
            <li><strong className="text-white">Ribs</strong> — Hidden and personal. Good for longer quotes.</li>
            <li><strong className="text-white">Finger</strong> — Minimalist. Best for very short words (3-5 letters max).</li>
            <li><strong className="text-white">Behind ear</strong> — Subtle and small. Perfect for single words.</li>
          </ul>
        </div>
      </section>

      {/* Tips */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Tips for Your Tattoo Artist</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul className="text-gray-300 space-y-3 text-sm">
            <li>✓ Print or screenshot your generated design to bring to the studio</li>
            <li>✓ Make sure dots are clearly round and dashes are clearly elongated</li>
            <li>✓ Leave enough spacing between characters so they don&apos;t blur over time</li>
            <li>✓ Consider line thickness — thinner lines age differently than thicker ones</li>
            <li>✓ Double-check the translation before getting inked! Use our translator to verify</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
