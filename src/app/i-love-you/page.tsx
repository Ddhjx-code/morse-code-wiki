import type { Metadata } from 'next';
import Link from 'next/link';
import ILoveYouAudio from './ILoveYouAudio';
import AdBanner from '@/components/AdBanner';
import RelatedPages from '@/components/RelatedPages';

export const metadata: Metadata = {
  alternates: { canonical: '/i-love-you' },
  title: 'I Love You in Morse Code - Pattern, Sound & Uses',
  description:
    'I Love You in Morse code is ·· / ·-·· --- ···- · / -·-- --- ··-. Learn the pattern, listen to audio, and discover uses for bracelets, tattoos, and necklaces.',
  keywords:
    'morse code i love you, i love you in morse code, morse code love, morse code bracelet i love you, morse code tattoo i love you, 143 morse code',
};

const PHRASES = [
  { text: 'I LOVE YOU', morse: '·· / ·−·· −−− ···− · / −·−− −−− ··−' },
  { text: 'I LOVE YOU MORE', morse: '·· / ·−·· −−− ···− · / −·−− −−− ··− / −− −−− ·−· ·' },
  { text: 'I LOVE YOU TOO', morse: '·· / ·−·· −−− ···− · / −·−− −−− ··− / − −−− −−−' },
  { text: 'FOREVER', morse: '··−· −−− ·−· · ···− · ·−·' },
  { text: 'ALWAYS', morse: '·− ·−·· ·−− ·− −·−− ···' },
  { text: 'SOULMATE', morse: '··· −−− ··− ·−·· −− ·− − ·' },
  { text: 'MY LOVE', morse: '−− −·−− / ·−·· −−− ···− ·' },
];

export default function ILoveYouPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        I Love You in Morse Code
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        &ldquo;I Love You&rdquo; in Morse code is expressed as a beautiful sequence of dots and dashes.
        It&apos;s a popular choice for bracelets, necklaces, tattoos, and secret messages between loved ones.
      </p>

      {/* Main Display */}
      <section className="mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">I Love You</p>
          <p className="text-3xl md:text-4xl font-mono text-green-400 tracking-[0.2em] mb-6">
            ·· / ·−·· −−− ···− · / −·−− −−− ··−
          </p>
          <div className="text-sm text-gray-500 space-y-1 mb-6">
            <p><span className="text-white font-mono">··</span> = I</p>
            <p><span className="text-white font-mono">·−·· −−− ···− ·</span> = L O V E</p>
            <p><span className="text-white font-mono">−·−− −−− ··−</span> = Y O U</p>
          </div>
          <ILoveYouAudio />
        </div>
      </section>

      {/* Is 143 Morse Code? */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Is 143 Morse Code for &ldquo;I Love You&rdquo;?</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-3">
            <strong className="text-white">No.</strong> The number &ldquo;143&rdquo; is a numeric code where each digit represents
            the number of letters in each word: <strong>I</strong> (1) + <strong>Love</strong> (4) + <strong>You</strong> (3) = 143.
          </p>
          <p className="text-gray-400 text-sm">
            This is a separate communication code, not Morse code. In actual Morse code, 143 would be:
            <span className="font-mono text-green-400 ml-2">·−−−− ····− ···−−</span> — which doesn&apos;t spell anything meaningful.
          </p>
        </div>
      </section>

      {/* Related Phrases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Romantic Phrases in Morse Code</h2>
        <div className="space-y-3">
          {PHRASES.map(({ text, morse }) => (
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

      {/* Uses */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Popular Uses</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">💍 Bracelets</h3>
            <p className="text-sm text-gray-400">
              Beaded bracelets with black beads for dashes and white for dots.
              A subtle way to wear a secret message.
            </p>
            <Link href="/tattoo-generator" className="text-blue-400 text-sm mt-2 inline-block hover:underline">
              Generate design →
            </Link>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">✒️ Tattoos</h3>
            <p className="text-sm text-gray-400">
              Minimalist dots and dashes along the wrist, collarbone, or ribs.
              Popular for couples who share matching tattoos.
            </p>
            <Link href="/tattoo-generator" className="text-blue-400 text-sm mt-2 inline-block hover:underline">
              Design your tattoo →
            </Link>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">📿 Necklaces</h3>
            <p className="text-sm text-gray-400">
              Gold or silver bar necklaces with engraved Morse code.
              A meaningful gift for anniversaries or Valentine&apos;s Day.
            </p>
          </div>
        </div>
      </section>

      {/* Tapping Guide */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">How to Tap &ldquo;I Love You&rdquo;</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            You can communicate &ldquo;I Love You&rdquo; by tapping on someone&apos;s hand, blinking with a flashlight, or any rhythmic signal:
          </p>
          <ol className="text-gray-400 space-y-2 text-sm">
            <li><span className="text-white font-mono">tap tap</span> — (I: ··)</li>
            <li><span className="text-gray-500">pause</span></li>
            <li><span className="text-white font-mono">tap HOLD tap tap</span> — (L: ·−··)</li>
            <li><span className="text-white font-mono">HOLD HOLD HOLD</span> — (O: −−−)</li>
            <li><span className="text-white font-mono">tap tap tap HOLD</span> — (V: ···−)</li>
            <li><span className="text-white font-mono">tap</span> — (E: ·)</li>
            <li><span className="text-gray-500">longer pause</span></li>
            <li><span className="text-white font-mono">HOLD tap HOLD HOLD</span> — (Y: −·−−)</li>
            <li><span className="text-white font-mono">HOLD HOLD HOLD</span> — (O: −−−)</li>
            <li><span className="text-white font-mono">tap tap HOLD</span> — (U: ··−)</li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Translate Your Own Phrase
          </Link>
          <Link
            href="/tattoo-generator"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
          >
            Tattoo Generator →
          </Link>
        </div>
      </section>
      <RelatedPages currentPath="/i-love-you" />
      <AdBanner />
    </div>
  );
}
