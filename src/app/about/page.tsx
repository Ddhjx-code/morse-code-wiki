import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: 'About MorseCodeNow - Free Morse Code Tools & Learning Resources',
  description:
    'About MorseCodeNow: a free online Morse code translator, audio player, alphabet reference, tattoo generator, and practice tool. Learn what we offer and why it is free.',
  keywords: 'about morse code, morse code tools, free morse code translator, morsecodenow',
};

export default function AboutPage() {
  return (
    <div className="py-12 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-6">About MorseCodeNow</h1>
      <p className="text-gray-400 text-center mb-12">
        Free, fast, and privacy-friendly Morse code tools for learners, hobbyists, and creators.
      </p>

      <section className="prose prose-invert prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-white">What Is MorseCodeNow?</h2>
        <p className="text-gray-400">
          MorseCodeNow is a free online toolkit for everything related to Morse code. Whether you are an
          amateur radio operator, a student learning about telegraphy, a designer creating a Morse code
          tattoo, or someone who simply wants to decode a secret message — this site gives you the tools
          to do it instantly in your browser.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">What You Can Do Here</h2>
        <ul className="text-gray-400 space-y-2">
          <li><strong className="text-white">Translate</strong> — Convert text to Morse code and Morse code back to text, with instant results as you type</li>
          <li><strong className="text-white">Listen</strong> — Play any text as Morse code audio with adjustable speed (WPM) and tone frequency</li>
          <li><strong className="text-white">Reference</strong> — Browse the complete alphabet A-Z, numbers 0-9, and punctuation marks</li>
          <li><strong className="text-white">Print</strong> — Download or print a clean Morse code chart for study or teaching</li>
          <li><strong className="text-white">Design</strong> — Generate visual Morse code designs for tattoos, bracelets, and necklaces</li>
          <li><strong className="text-white">Practice</strong> — Learn to decode Morse code by ear with our progressive difficulty quiz</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Why Is It Free?</h2>
        <p className="text-gray-400">
          Morse code is a piece of communication history that belongs to everyone. We believe learning
          tools should be accessible without paywalls or sign-ups. The site is supported by minimal,
          non-intrusive advertising, which keeps it running while remaining free for all users.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Our Approach</h2>
        <p className="text-gray-400">
          Every tool on this site works entirely in your browser. We do not require an account, we do not
          store the text you translate, and we do not sell your data. The Morse code mappings follow the
          International Morse Code standard defined by the ITU (International Telecommunication Union).
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Who Is This For?</h2>
        <ul className="text-gray-400 space-y-2">
          <li>Amateur radio (ham) operators practicing CW</li>
          <li>Students and teachers covering communication history</li>
          <li>Scouts and outdoor enthusiasts learning emergency signaling</li>
          <li>Designers and individuals creating personalized jewelry or tattoos</li>
          <li>Anyone curious about how Morse code works</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Get in Touch</h2>
        <p className="text-gray-400">
          Found a bug, spotted an error, or have a suggestion? Visit our{' '}
          <Link href="/contact" className="text-blue-400 hover:underline">contact page</Link> — we read every message.
        </p>
      </section>

      <section className="mt-12 text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Try the Translator
          </Link>
          <Link href="/learn" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors">
            Learn Morse Code →
          </Link>
        </div>
      </section>
    </div>
  );
}
