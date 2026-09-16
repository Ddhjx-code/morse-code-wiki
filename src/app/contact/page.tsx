import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - MorseCodeNow',
  description:
    'Contact MorseCodeNow. Send us feedback, report bugs, suggest new Morse code tools, or ask a question about Morse code.',
  keywords: 'contact morsecodenow, morse code feedback, report bug',
};

export default function ContactPage() {
  return (
    <div className="py-12 px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-6">Contact Us</h1>
      <p className="text-gray-400 text-center mb-12">
        We welcome your feedback, corrections, and suggestions.
      </p>

      <section className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8 text-center">
        <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Email</p>
        <p className="text-xl font-mono text-green-400">contact@morsecodenow.com</p>
      </section>

      <section className="prose prose-invert prose-gray max-w-none">
        <h2 className="text-xl font-bold text-white">What to Send Us</h2>
        <ul className="text-gray-400 space-y-2">
          <li><strong className="text-white">Bug reports</strong> — Something not working as expected? Tell us the page and what happened.</li>
          <li><strong className="text-white">Content corrections</strong> — Spotted an error in our alphabet chart, translations, or guides?</li>
          <li><strong className="text-white">Feature requests</strong> — Have an idea for a new tool or improvement?</li>
          <li><strong className="text-white">General questions</strong> — Anything about Morse code you would like explained.</li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-8">Response Time</h2>
        <p className="text-gray-400">
          We are a small team and read every message. We aim to reply within a few business days.
          Bug reports and content corrections are prioritized.
        </p>

        <h2 className="text-xl font-bold text-white mt-8">Before You Write</h2>
        <p className="text-gray-400">
          Many common questions are already answered on our <Link href="/learn" className="text-blue-400 hover:underline">Learn page</Link> and
          in the FAQ sections throughout the site. If you are reporting a translation issue, please include the
          exact text you entered and what you expected.
        </p>
      </section>

      <section className="mt-12 text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Back to Translator
          </Link>
          <Link href="/about" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors">
            About Us →
          </Link>
        </div>
      </section>
    </div>
  );
}
