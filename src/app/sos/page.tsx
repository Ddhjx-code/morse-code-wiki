import type { Metadata } from 'next';
import Link from 'next/link';
import SOSAudio from './SOSAudio';
import AdBanner from '@/components/AdBanner';

export const metadata: Metadata = {
  title: 'SOS in Morse Code - Signal Pattern, Sound & How to Use',
  description:
    'SOS in Morse code is ··· ——— ··· (3 dots, 3 dashes, 3 dots). Learn the signal pattern, hear the audio, and know how to use it with flashlight, tapping, or sound in emergencies.',
  keywords:
    'sos morse code, sos signal, morse code sos, sos morse code sound, sos flashlight, how to signal sos',
};

export default function SOSPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        SOS in Morse Code
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        SOS is the most recognized distress signal in the world.
        In Morse code, it&apos;s transmitted as a continuous sequence of three dots, three dashes, and three dots — with no spaces.
      </p>

      {/* Main Signal Display */}
      <section className="mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">SOS Distress Signal</p>
          <p className="text-4xl md:text-5xl font-mono text-red-400 tracking-[0.3em] mb-4">
            · · · − − − · · ·
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Three short · Three long · Three short — sent as one continuous sequence
          </p>
          <SOSAudio />
        </div>
      </section>

      {/* How to Signal */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">How to Signal SOS</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">🔦 Flashlight</h3>
            <p className="text-sm text-gray-400">
              Flash 3 short bursts, then 3 long bursts, then 3 short bursts. Pause and repeat.
              Point the light toward where you expect rescuers to be.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">👋 Tapping</h3>
            <p className="text-sm text-gray-400">
              Tap 3 quick times, 3 slow times, 3 quick times. Use on a wall, pipe, or any surface.
              Rescuers listening for survivors will recognize the pattern.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">📢 Sound</h3>
            <p className="text-sm text-gray-400">
              Blow a whistle or horn: 3 short blasts, 3 long blasts, 3 short blasts.
              Any device that makes sound can be used.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">🪞 Mirror</h3>
            <p className="text-sm text-gray-400">
              Reflect sunlight in the SOS pattern toward aircraft or distant observers.
              Even a phone screen can work as a signaling mirror.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">📱 Phone</h3>
            <p className="text-sm text-gray-400">
              Many phones have an SOS feature. On iPhone, press the side button 5 times rapidly.
              On Android, press the power button 5+ times.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">👁️ Blinking</h3>
            <p className="text-sm text-gray-400">
              If you cannot speak or move freely, blink SOS: 3 quick blinks, 3 slow blinks, 3 quick blinks.
              Medical professionals may recognize this.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">History of SOS</h2>
        <div className="prose prose-invert prose-gray max-w-none">
          <p className="text-gray-400">
            Contrary to popular belief, <strong className="text-white">SOS does not stand for &ldquo;Save Our Souls&rdquo;
            or &ldquo;Save Our Ship.&rdquo;</strong> It was chosen purely because of its distinctive Morse code pattern
            — easy to transmit, easy to recognize, and hard to confuse with other signals.
          </p>
          <ul className="text-gray-400 space-y-2 mt-4">
            <li><strong className="text-white">1905</strong> — Germany proposed SOS (· · · − − − · · ·) at the Radio Telegraphic Convention</li>
            <li><strong className="text-white">1906</strong> — Adopted as the international distress signal</li>
            <li><strong className="text-white">1908</strong> — Officially took effect on July 1st</li>
            <li><strong className="text-white">1912</strong> — Famously used by the Titanic (though they also used the older CQD signal)</li>
            <li><strong className="text-white">1999</strong> — Maritime Morse code officially retired, replaced by GMDSS satellite system</li>
          </ul>
          <p className="text-gray-400 mt-4">
            Despite being &ldquo;retired&rdquo; as an official maritime signal, SOS remains universally understood
            and is still taught as a survival skill worldwide.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-gray-900 border border-gray-800 rounded-lg p-4 group">
            <summary className="font-medium text-white cursor-pointer">Does 3 blinks mean SOS?</summary>
            <p className="text-gray-400 text-sm mt-2">
              No. SOS is 3 short + 3 long + 3 short. Three blinks alone could be interpreted as the letter S (···),
              but the full SOS requires the three-long portion in the middle.
            </p>
          </details>
          <details className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <summary className="font-medium text-white cursor-pointer">What replaced SOS?</summary>
            <p className="text-gray-400 text-sm mt-2">
              The Global Maritime Distress and Safety System (GMDSS), operational since 1999, uses satellite
              communication and digital selective calling. However, SOS remains universally recognized for non-maritime emergencies.
            </p>
          </details>
          <details className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <summary className="font-medium text-white cursor-pointer">Why is SOS sent without spaces?</summary>
            <p className="text-gray-400 text-sm mt-2">
              In standard Morse code, SOS is written as a single &ldquo;prosign&rdquo; (procedural signal) without letter
              spacing. This makes it faster to send and creates a unique rhythm that&apos;s instantly recognizable — it can&apos;t be confused with the individual letters S, O, S.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Try the Translator
          </Link>
          <Link
            href="/alphabet"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
          >
            Full Alphabet →
          </Link>
        </div>
      </section>
      <AdBanner />
    </div>
  );
}
