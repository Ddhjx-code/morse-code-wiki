import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import RelatedPages from "@/components/RelatedPages";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...buildMetadata({
    path: "/listen-to-morse-code-transmissions",
    title: "How to Listen to Real Morse Code Transmissions Right Now",
    description:
      "You can hear live Morse code today without a licence, a radio or an antenna: W1AW code practice on set frequencies, public WebSDR and KiwiSDR receivers, and the aviation beacons that still send their identifiers in code every few seconds.",
    keywords:
      "listen to morse code transmissions, hear real morse code, morse code radio live, w1aw code practice, websdr morse code, vor identifier morse",
  }),
};

const W1AW_FREQS = [
  ["1.8025 MHz", "160 m"],
  ["3.5815 MHz", "80 m"],
  ["7.0475 MHz", "40 m"],
  ["14.0475 MHz", "20 m"],
  ["18.0775 MHz", "17 m"],
  ["21.0675 MHz", "15 m"],
  ["28.0675 MHz", "10 m"],
  ["50.350 MHz", "6 m"],
  ["147.555 MHz", "2 m"],
];

const NAVAIDS = [
  {
    name: "VOR",
    band: "108.0 – 117.95 MHz",
    ident: "Three-letter identifier, repeated every 10 seconds",
    detail:
      "The FAA Aeronautical Information Manual states that the only positive way to identify a VOR is by its Morse identifier or its recorded voice announcement. AOPA's flight-training coverage puts the tone at 1,020 Hz, sent at roughly seven words per minute.",
  },
  {
    name: "ILS localizer",
    band: "108.10 – 111.95 MHz, 40 channels",
    ident: "Four groups: the letter I, then the three-letter name",
    detail:
      "The AIM specifies International Morse with a three-letter identifier preceded by the letter I, so Denver's appears as I-DIA. In the US that leading I is what marks a frequency as a localizer.",
  },
  {
    name: "NDB",
    band: "190 – 535 kHz (ICAO allows up to 1750 kHz)",
    ident: "Continuous three-letter identification",
    detail:
      "NDBs transmit an unmodulated carrier keyed with either a 400 or 1020 Hz tone, and the AIM notes that every radio beacon except compass locators sends a continuous three-letter identification in code, except while voice is being transmitted.",
  },
  {
    name: "TACAN",
    band: "1025 – 1150 MHz",
    ident: "Three-letter identifier about every 35 seconds",
    detail:
      "The military aircrew manual gives a longer interval than the VOR, which matters if you are listening and think the signal has stopped.",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Do I need a licence or a radio to listen to Morse code?',
    a: 'No. Receiving is legal for anyone in most countries, and you do not need your own receiver: public internet-connected radios let you tune shortwave from a browser. The two directories most people start from are the WebSDR list at websdr.org and the KiwiSDR public map, which together cover several hundred receivers between 0 and 30 MHz.',
  },
  {
    q: 'What is the easiest real Morse transmission to copy as a beginner?',
    a: 'Aviation beacon identifiers. A VOR sends the same three letters every ten seconds, slowly and relentlessly, and the letters are printed on aeronautical charts so you can check yourself. Because the content never changes, you can concentrate purely on recognising the sounds - which is the skill that does not transfer from reading dots on a screen.',
  },
  {
    q: 'How do I know what W1AW is transmitting?',
    a: 'The practice text is taken from QST, the ARRL membership journal, and the station announces the issue and page number at the start of each session and again when the speed changes. ARRL publishes the daily source listing, and the MP3 archive comes with the matching plain text, so you can copy a run and then check it word for word.',
  },
  {
    q: 'Why did a navigation aid stop sending its identifier?',
    a: 'Usually that is the point. The FAA AIM explains that during maintenance a facility may remove its identification entirely, or broadcast a TEST code instead, precisely so that pilots know the signal is not to be trusted. If you are listening to a beacon and the letters disappear, you have heard the same warning a pilot relies on.',
  },
  {
    q: 'Is Morse code still actually used, or is this historical?',
    a: 'Amateur radio operators still work the HF bands in continuous wave, and the aviation identifiers above are live infrastructure rather than a museum piece. The maritime distress system Morse replaced was retired in 1999, but the amateur and aeronautical uses are current.',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ListenToMorsePage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h1 className="text-4xl font-bold text-white text-center mb-4">
        How to Listen to Real Morse Code Transmissions
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        There is Morse code in the air right now - practice transmissions from New England,
        conversations on the shortwave bands, and identifiers from the navigation beacons beside
        every airport. None of them need you to own a radio, hold a licence, or put up an antenna.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          The one built for learners: W1AW code practice
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          W1AW is the ARRL's station at its headquarters in Newington, Connecticut, and its whole
          purpose is to send Morse at you for practice. It runs scheduled sessions every weekday at
          fixed times, on nine frequencies from 160 metres up to 2 metres, and it tells you exactly
          what it is sending.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          That last part is what makes it better than any trainer app. The practice text is lifted
          from <strong className="text-white">QST magazine</strong>, and the station announces the
          issue and page number at the start of each run and again when the speed changes. ARRL
          publishes the day-by-day source list, and the{" "}
          <a
            href="https://www.arrl.org/code-practice-files"
            rel="noopener nofollow"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            MP3 archive
          </a>{" "}
          comes with the matching plain text - so you can copy a minute of real transmission and then
          check it word for word instead of guessing whether you got it right.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">Session</th>
                <th className="px-4 py-3 text-left">Speeds sent</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-t border-gray-800">
                <td className="px-4 py-2">Slow Code</td>
                <td className="px-4 py-2">5, 7.5, 10, 13 and 15 wpm</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="px-4 py-2">Fast Code</td>
                <td className="px-4 py-2">35, 30, 25, 20, 15, 13 and 10 wpm</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="px-4 py-2">Code bulletins</td>
                <td className="px-4 py-2">18 wpm</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="px-4 py-2">Qualifying Run (monthly)</td>
                <td className="px-4 py-2">10 – 40 wpm; you can mail your copy to ARRL for grading</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Each session steps through the speeds in order, so a single sitting gives you a ladder to
          climb. In the MP3 archive, runs at 15 wpm and below are sent with Farnsworth spacing -
          characters at full speed, extra silence between them - and 18 wpm upward is standard timing.
          The archive tone is 750 Hz.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          The transmitting frequencies, from the{" "}
          <a
            href="https://www.arrl.org/w1aw-operating-schedule"
            rel="noopener nofollow"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            current operating schedule
          </a>
          :
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {W1AW_FREQS.map(([freq, band]) => (
            <div key={freq} className="bg-gray-900 border border-gray-800 rounded px-3 py-2">
              <span className="font-mono text-green-400">{freq}</span>{" "}
              <span className="text-gray-500">{band}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-3">
          If you cannot receive shortwave where you are, the schedule is also relayed as audio over
          the amateur EchoLink network, and the MP3s are updated every fortnight.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          Live shortwave without owning a radio
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The fastest way to hear actual operators is an internet-connected receiver. You tune it in a
          browser, and it is a real antenna in a real location, not a recording.
        </p>
        <ul className="text-gray-300 space-y-3 mb-4">
          <li>
            <strong className="text-white">The University of Twente WebSDR</strong> in the
            Netherlands - the first wideband web receiver, running since 2008, sampling the whole
            shortwave spectrum so hundreds of people can tune at once. It has a CW mode, and you can
            open it already parked in the 40 metre Morse section by adding{" "}
            <span className="font-mono text-green-400">?tune=7002.00cw</span> to the address.
          </li>
          <li>
            <strong className="text-white">KiwiSDR</strong> - a network of several hundred
            hobbyist-run receivers with a public list and world map at{" "}
            <span className="font-mono text-green-400">kiwisdr.com/public</span>. Pick one near you,
            or one on the far side of the world for the fun of it.
          </li>
          <li>
            <strong className="text-white">Directory pages</strong> -{" "}
            <span className="font-mono text-green-400">websdr.org</span> lists the classic receivers,
            and there are curated shortlists that rank them by how quiet they actually are.
          </li>
        </ul>
        <p className="text-gray-300 leading-relaxed mb-4">
          How to use one: switch to <strong className="text-white">LSB or CW</strong> rather than AM
          or FM, narrow the filter as far as it will go without losing the note, then walk down the
          low end of a band - that is where Morse lives. On 40 metres the amateur allocation starts at
          7.000 MHz and the Morse work happens in the first few tens of kilohertz above it. You will
          hear a fast, rhythmic, machine-gun exchange; that is contest operating, and it is the densest
          concentration of Morse you can find on the air.
        </p>
        <p className="text-gray-400 text-sm">
          A practical warning: real signals fade, and other stations sit either side of yours. If your
          first attempt sounds like noise, you have not failed - that hiss and those adjacent beeps are
          what copying by ear actually feels like, which is the point of trying it.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          The beacons beside every airport
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Aviation navigation aids still identify themselves in Morse, on ordinary VHF and mediumwave
          frequencies, because a pilot has to confirm the station before trusting it. This is the most
          patient transmitter there is: the same three letters, forever, at a speed slow enough for a
          beginner.
        </p>
        <div className="space-y-4">
          {NAVAIDS.map((n) => (
            <div key={n.name} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <h3 className="font-semibold text-white mb-1">
                {n.name}{" "}
                <span className="text-gray-500 font-normal text-sm">· {n.band}</span>
              </h3>
              <p className="text-sm text-green-400 font-mono mb-2">{n.ident}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{n.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-300 leading-relaxed mt-4">
          To hear one you need an air-band capable receiver, or a software-defined radio with the
          right antenna - a KiwiSDR will not usually cover 108 MHz. If you have an old AM radio and a
          long wire, the mediumwave NDBs are the accessible ones. The identifier is also printed on
          aeronautical charts in Morse, so you can look up what you should be hearing before you tune.
        </p>
        <p className="text-gray-400 text-sm mt-3">
          One detail worth knowing: when a beacon goes quiet or starts sending the word TEST, that is a
          deliberate warning that the facility is under maintenance and its navigation signal is not to
          be trusted. You are hearing the same safety signal a pilot watches for.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">A sensible first hour</h2>
        <ol className="text-gray-300 space-y-3 list-decimal list-inside">
          <li>
            Look up three or four letters you do not know by ear yet on the{" "}
            <Link href="/alphabet" className="text-blue-400 hover:text-blue-300 underline">
              alphabet page
            </Link>{" "}
            and press play on each - the letters are grouped by rhythm there, which is how they are
            actually heard.
          </li>
          <li>
            Open the{" "}
            <Link href="/audio" className="text-blue-400 hover:text-blue-300 underline">
              audio translator
            </Link>
            , type your own callsign or name, and set it to 5 WPM. Knowing exactly what a passage says
            before you listen to it is what turns noise into practice.
          </li>
          <li>
            Go to a KiwiSDR or the Twente WebSDR, select CW, and tune 7.000 – 7.040 MHz. Do not try to
            copy; just listen for ten minutes and try to pick out where one character ends and the next
            begins.
          </li>
          <li>
            Come back for a W1AW Slow Code session with the QST text open in another tab, and copy one
            minute. One minute is enough for a first session.
          </li>
          <li>
            Check what you wrote against the published text. The gap between what you thought you heard
            and what was sent is the thing to work on, and{" "}
            <Link href="/practice" className="text-blue-400 hover:text-blue-300 underline">
              the practice page
            </Link>{" "}
            drills exactly that.
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Questions about listening</h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <details key={f.q} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <summary className="font-medium text-white cursor-pointer">{f.q}</summary>
              <p className="text-gray-400 text-sm mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Sources</h2>
        <p className="text-gray-400 text-sm mb-3">
          Frequencies, speeds and identifier behaviour above are taken from the organisations that
          operate these transmitters, not from other websites about them.
        </p>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>
            <a
              href="https://www.arrl.org/w1aw-operating-schedule"
              rel="noopener nofollow"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              ARRL — W1AW Operating Schedule
            </a>{" "}
            (session times, frequencies, speeds)
          </li>
          <li>
            <a
              href="https://www.arrl.org/code-practice-files"
              rel="noopener nofollow"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              ARRL — Code Practice Files
            </a>{" "}
            (MP3 archive, 750 Hz tone, Farnsworth note)
          </li>
          <li>
            <a
              href="https://www.faa.gov/air_traffic/publications/atpubs/aim/aim0101.html"
              rel="noopener nofollow"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              FAA Aeronautical Information Manual, Chapter 1 — Air Navigation
            </a>{" "}
            (VOR, NDB and ILS identification rules)
          </li>
          <li>
            <a
              href="https://www.aopa.org/news-and-media/all-news/2025/june/flight-training/proficiency-back-to-basics-navigation"
              rel="noopener nofollow"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              AOPA — Back to basics navigation
            </a>{" "}
            (1,020 Hz identifier tone, transmitted every 10 seconds)
          </li>
          <li>
            <a
              href="http://kiwisdr.com/public/"
              rel="noopener nofollow"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              KiwiSDR public receiver list
            </a>{" "}
            and{" "}
            <a
              href="http://websdr.ewi.utwente.nl:8901/"
              rel="noopener nofollow"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              the University of Twente WebSDR
            </a>
          </li>
        </ul>
      </section>

      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/audio"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Morse Code Audio Translator →
          </Link>
          <Link
            href="/practice"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Practice Copying →
          </Link>
          <Link
            href="/learn"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            How to Learn Morse →
          </Link>
        </div>
      </section>

      <RelatedPages currentPath="/listen-to-morse-code-transmissions" />
      <AdBanner />
    </div>
  );
}
