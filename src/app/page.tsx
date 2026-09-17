import MorseTranslator from '@/components/MorseTranslator';
import AdBanner from '@/components/AdBanner';
import Link from 'next/link';

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
            href="/tattoo-generator"
            title="Tattoo Generator"
            description="Convert your name or phrase into a visual Morse code tattoo design"
            icon="◉"
          />
          <QuickCard
            href="/practice"
            title="Practice"
            description="Learn Morse code by listening and identifying letters"
            icon="♫"
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
      <section className="max-w-3xl mx-auto mt-16 prose prose-invert prose-gray">
        <h2 className="text-xl font-bold text-white">What is Morse Code?</h2>
        <p className="text-gray-400">
          Morse code is a communication method that encodes text characters as sequences of dots (·) and dashes (−).
          Developed in the 1830s by Samuel Morse and Alfred Vail, it was originally used for telegraph communications.
          Today, Morse code is still used in amateur radio, aviation, and as an accessibility tool.
        </p>
        <h2 className="text-xl font-bold text-white mt-8">How to Use This Translator</h2>
        <p className="text-gray-400">
          Simply type your text in the input box and the Morse code translation appears instantly.
          You can switch between Text → Morse and Morse → Text modes.
          Use dots (.) and dashes (-) with spaces between letters and &quot;/&quot; between words when entering Morse code.
          Click &quot;Play Audio&quot; to hear the Morse code as beeps.
        </p>
        <h2 className="text-xl font-bold text-white mt-8">Morse Code Timing Rules</h2>
        <ul className="text-gray-400">
          <li>A dot (·) lasts 1 time unit</li>
          <li>A dash (−) lasts 3 time units</li>
          <li>Gap between dots/dashes in one letter: 1 unit</li>
          <li>Gap between letters: 3 units</li>
          <li>Gap between words: 7 units</li>
        </ul>
      </section>
    </div>
  );
}

function QuickCard({ href, title, description, icon }: {
  href: string; title: string; description: string; icon: string;
}) {
  return (
    <Link
      href={href}
      className="block p-5 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-600 hover:bg-gray-800/50 transition-all group"
    >
      <div className="text-2xl mb-2 font-mono text-green-400">{icon}</div>
      <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </Link>
  );
}
