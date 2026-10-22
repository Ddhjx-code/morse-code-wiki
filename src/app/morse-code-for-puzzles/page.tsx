import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import RelatedPages from "@/components/RelatedPages";
import { buildMetadata } from "@/lib/metadata";
import { CHAR_TO_MORSE } from "@/lib/morse";

export const metadata = buildMetadata({
  path: "/morse-code-for-puzzles",
  title: "Morse Code in Escape Rooms and Puzzles - Build It and Solve It",
  description:
    "How Morse code works as an escape-room or puzzle clue: why every digit is five signals, which speeds are fair for players who have never seen the code, and how to hide a key without making the clue unsolvable.",
  keywords:
    "morse code escape room, morse code puzzle, morse code clue, dots and dashes puzzle, escape room cipher, morse code padlock",
});

const LETTER_MAX = Math.max(...Object.entries(CHAR_TO_MORSE)
  .filter(([ch]) => /[A-Z]/.test(ch)).map(([, code]) => code.length));
const DIGIT_LEN = [...new Set("0123456789".split("").map((d) => CHAR_TO_MORSE[d].length))];

const MEDIA = [
  { m: "Written marks", how: "Dots and dashes printed, painted, scratched or punched", note: "The forgiving option. Players can take their time, and spacing errors in your design are still their problem." },
  { m: "Sound", how: "Beeps from a speaker, a looped tape, a phone", note: "Harder than it looks under time pressure. Record it, then have someone copy it down cold before you ship the room." },
  { m: "Light", how: "LED, lamp, torch, screen flicker", note: "Same timing rules as sound, and the rhythm is easier to lose when the room is bright." },
  { m: "Taps", how: "Knocks on a pipe, wall or table", note: "A dash reads as a heavier or slower knock. Fine for short groups, miserable for long ones." },
  { m: "Objects", how: "Beads, stripes, holes, short and long sticks", note: "Players must first work out which object means dot. That inference is often the real puzzle." },
];

export default function PuzzlesPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Morse Code for Escape Rooms and Puzzles
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Morse is the cipher designers reach for most and get wrong most often. It is easy to hide and easy
        to make unfair, because the part that carries the meaning — the spacing — is the part that is easiest
        to lose in a prop.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">The One Fact Solvers Need First</h2>
        <p className="text-gray-400 mb-3">
          Every digit in International Morse is exactly {DIGIT_LEN[0]} elements long, and no letter is longer
          than {LETTER_MAX}. So a group of five marks is a number, and a group of one to four is a letter.
        </p>
        <p className="text-gray-400 mb-4">
          That single rule is what makes Morse workable as a padlock clue: a three- or four-digit combination
          arrives as three or four tidy groups of five, which a team can recognise as digits without being
          able to decode them yet.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-900 text-gray-400">
              <tr>
                <th className="px-3 py-2 text-left">Digit</th>
                <th className="px-3 py-2 text-left">Pattern</th>
                <th className="px-3 py-2 text-left">Digit</th>
                <th className="px-3 py-2 text-left">Pattern</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[0, 1, 2, 3, 4].map((i) => (
                <tr key={i}>
                  <td className="px-3 py-2 font-bold text-white">{i}</td>
                  <td className="px-3 py-2 font-mono text-gray-300">{CHAR_TO_MORSE[String(i)]}</td>
                  <td className="px-3 py-2 font-bold text-white">{i + 5}</td>
                  <td className="px-3 py-2 font-mono text-gray-300">{CHAR_TO_MORSE[String(i + 5)]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          The digits are also the easiest thing in Morse to memorise under pressure: 1 to 5 climb from one dot
          to five, and 6 to 0 climb back down. See the{" "}
          <Link href="/numbers" className="text-blue-400 hover:text-blue-300">numbers page</Link> for the
          full run.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Building a Clue That Is Fair</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-400">
          <li>
            <strong className="text-white">Decide what the code is doing.</strong> Teaching, testing or
            rewarding. A teaching clue shows a chart. A testing clue hides the chart but keeps the spacing
            clean. A reward clue can be hard, but it still has to have one correct answer.
          </li>
          <li>
            <strong className="text-white">Keep the payload short.</strong> One word of three to five letters,
            or three to four digits. The decoded answer should point at the next step — a lock, a location, a
            word that feeds a second cipher — rather than being the whole prize.
          </li>
          <li>
            <strong className="text-white">Send it slowly.</strong> Around 5 to 8 words per minute is readable
            for people who have never touched the code. Our{" "}
            <Link href="/audio" className="text-blue-400 hover:text-blue-300">audio page</Link> goes down to
            5 WPM, so a clue can be generated at exactly the speed players will hear.
          </li>
          <li>
            <strong className="text-white">Leave the chart somewhere in the room.</strong> Requiring players to
            have memorised Morse tests prior knowledge, not puzzle-solving. The fun is in finding the key and
            using it.
          </li>
          <li>
            <strong className="text-white">Give obvious gaps.</strong> One unit inside a letter, three between
            letters, seven between words — and on a prop, make the word gap visibly bigger than the letter
            gap, not merely longer on paper.
          </li>
          <li>
            <strong className="text-white">Test the finished prop, not your notes.</strong> Print or build the
            final object, then have someone who does not know the answer decode it. Uneven dashes and
            collapsed gaps turn a fair puzzle into guesswork, and you cannot see them in your own file any
            more.
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Five Ways to Hide It</h2>
        <ul className="space-y-3">
          {MEDIA.map((x) => (
            <li key={x.m} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <p className="font-semibold text-white">{x.m}</p>
              <p className="text-sm text-gray-400 mt-1">{x.how}</p>
              <p className="text-sm text-gray-500 mt-1">{x.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Solving One, When You Are the Player</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-400">
          <li>Work out how it is being sent: light, sound, taps, objects or marks.</li>
          <li>Copy the signals down as dots and dashes <em>before</em> trying to read anything.</li>
          <li>Mark the pauses. A short pause ends a letter; a longer one ends a word.</li>
          <li>Look each group up against a chart — the{" "}
            <Link href="/morse-code-chart-pdf" className="text-blue-400 hover:text-blue-300">
              printable chart
            </Link>{" "}
            is the one to bring.</li>
          <li>Groups of five are digits. If the answer is a combination, this is where to start.</li>
          <li>If the result is nonsense, move a gap rather than a mark. Most broken transcriptions are a
            letter boundary in the wrong place, not a misheard element.</li>
        </ol>
        <p className="text-gray-400 mt-4">
          When the gaps are gone entirely — scratched into a wall, punched in card, strung as beads with no
          spacer — the string genuinely has more than one reading.{" "}
          <Link href="/morse-code-patterns" className="text-blue-400 hover:text-blue-300">
            The pattern page
          </Link>{" "}
          counts how many, which is also the fastest way to check your own clue is not ambiguous: if the run
          you built has several valid splits, your players are right to argue with you.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">A Warning About Players Who Already Know It</h2>
        <p className="text-gray-400">
          Some of your players will read Morse from memory — amateur radio operators, former scouts, and a
          disproportionate number of escape-room regulars who picked up a handful of codes along the way. A
          designer&apos;s note on this from the room-escape community is that a code a player can decode
          before they were meant to can break the order of a game. Two safe fixes: put the key before the
          coded message so the expert merely solves it early at the right place, or do not gate a critical
          sequence behind a standard code at all. A made-up symbol set has none of these problems.
        </p>
      </section>

      <RelatedPages currentPath="/morse-code-for-puzzles" />
      <AdBanner />
    </div>
  );
}
