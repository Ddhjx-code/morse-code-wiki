import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import RelatedPages from "@/components/RelatedPages";
import { buildMetadata } from "@/lib/metadata";
import { BEAD_MM, PALINDROME_LETTERS, planBeads, readsSameBothWays } from "@/lib/beads";

export const metadata = buildMetadata({
  path: "/morse-code-bracelet",
  title: "Morse Code Bracelet - Bead Counts, Pattern and Sizing",
  description:
    "Turn a word into a Morse code bracelet: which bead means dot and which means dash, how many beads a name or date needs, and why the spacer beads are the part that breaks. Every count on this page is calculated, not copied.",
  keywords:
    "morse code bracelet, morse code bracelet pattern, morse code beads, morse code jewelry, morse code bracelet instructions, morse code name bracelet",
});

const WORDS = ["MOM", "DAD", "LOVE", "HOPE", "JM", "NOAH", "BE BRAVE", "2024", "I LOVE YOU"];

function Table() {
  const rows = WORDS.map((w) => planBeads(w)).filter((p): p is NonNullable<typeof p> => p !== null);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-900 text-gray-400">
          <tr>
            <th className="px-3 py-2 text-left">Word</th>
            <th className="px-3 py-2 text-left">Written Morse</th>
            <th className="px-3 py-2 text-right">Dots</th>
            <th className="px-3 py-2 text-right">Dashes</th>
            <th className="px-3 py-2 text-right">Letter spacers</th>
            <th className="px-3 py-2 text-right">Word spacers</th>
            <th className="px-3 py-2 text-right">Beads</th>
            <th className="px-3 py-2 text-right">Pattern length</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {rows.map((r) => (
            <tr key={r.text}>
              <td className="px-3 py-2 font-semibold text-white">{r.text}</td>
              <td className="px-3 py-2 font-mono text-gray-300">{r.morse}</td>
              <td className="px-3 py-2 text-right">{r.dots}</td>
              <td className="px-3 py-2 text-right">{r.dashes}</td>
              <td className="px-3 py-2 text-right">{r.letterSpacers}</td>
              <td className="px-3 py-2 text-right">{r.wordSpacers}</td>
              <td className="px-3 py-2 text-right text-white">{r.messageBeads}</td>
              <td className="px-3 py-2 text-right">{(r.patternMm / 10).toFixed(1)} cm</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const sizeList = [
  { label: "Round bead = dot", mm: BEAD_MM.dot, note: "Any small round bead; 6 mm is the common craft size." },
  { label: "Tube bead = dash", mm: BEAD_MM.dash, note: `${BEAD_MM.dash} mm, about ${(BEAD_MM.dash / BEAD_MM.dot).toFixed(1)}× a dot.` },
  { label: "Small spacer = end of letter", mm: BEAD_MM.letterSpacer, note: "Thin disc or seed bead, one between letters." },
  { label: "Larger spacer = end of word", mm: BEAD_MM.wordSpacer, note: "A different colour or size, so a word break cannot be mistaken for a letter break." },
] as const;

export default function BraceletPage() {
  const mom = planBeads("MOM");
  const hope = planBeads("HOPE");
  const safeWords = ["MOM", "TOOT", "POOP", "ERE"].filter(readsSameBothWays);

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Morse Code Bracelet</h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
        A Morse code bracelet is a readable message disguised as a bead pattern. Round beads carry the
        dots, longer beads carry the dashes, and small spacer beads mark where one letter stops and the
        next begins. To anyone who does not know the code it looks like decoration.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">The Four Bead Roles</h2>
        <p className="text-gray-400 mb-4">
          A bracelet has to carry four different pieces of information, and Morse has four corresponding
          elements. Missing any one of the four turns a message into a pattern nobody can decode.
        </p>
        <ul className="space-y-3">
          {sizeList.map((b) => (
            <li key={b.label} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-semibold text-white">{b.label}</span>
                <span className="font-mono text-sm text-gray-400">{b.mm} mm</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{b.note}</p>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 mt-4">
          These sizes are this page&apos;s convention, chosen so the maths is reproducible. They are not a
          standard: ITU-R M.1677 fixes only that a dash is three dots long <em>in time</em>, which is a
          rule about signal duration, not about jewellery. Bead counts elsewhere will differ whenever
          the assumed bead sizes differ, so do not mix numbers between sources.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Worked Example: MOM</h2>
        {mom && (
          <p className="text-gray-400 mb-4">
            <code className="font-mono text-gray-300">{mom.morse}</code> — three letters, and every
            element is a dash. It strings out as{" "}
            <strong className="text-white">
              {mom.dashes} tube beads, {mom.letterSpacers} letter spacers, {mom.dots} round beads
            </strong>
            , which is <strong className="text-white">{mom.messageBeads} beads</strong> and a message
            about <strong className="text-white">{(mom.patternMm / 10).toFixed(1)} cm</strong> long.
          </p>
        )}
        <p className="text-gray-400 mb-6">
          A name made only of dashes is the easiest bracelet to string and, awkwardly, the hardest to
          read: nothing on the strand is short, so a reader has to know that one bead means the end of a
          letter. That is exactly what the spacers are for.
        </p>

        <h3 className="text-lg font-semibold text-white mb-3">Counts for common choices</h3>
        <Table />
        <p className="text-sm text-gray-500 mt-3">
          Calculated at the sizes above, on a {(mom ? mom.wristMm / 10 : 17).toFixed(0)} cm wrist, with
          0.5 mm of cord taken up per knot. <code className="font-mono">JM</code> is two initials with no
          dots between them, and <code className="font-mono">2024</code> shows why dates eat a bracelet:
          every digit is five elements, so four digits are twenty message beads before any spacers.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Bead Count and Length Are Not the Same Thing</h2>
        {mom && hope && (
          <p className="text-gray-400 mb-4">
            <strong className="text-white">
              MOM is {mom.messageBeads} beads and {(mom.patternMm / 10).toFixed(1)} cm. HOPE is{" "}
              {hope.messageBeads} beads and {(hope.patternMm / 10).toFixed(1)} cm.
            </strong>{" "}
            HOPE has more beads yet they are a mix of short and long, so the strand length depends on how
            dash-heavy the word is, not how many letters it has.
          </p>
        )}
        <p className="text-gray-400 mb-4">
          The practical consequence: if your word is long, drop the dot bead to 4 mm before you start
          removing letters. A four-letter word in the wrong bead size is the difference between a
          bracelet and a belt.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Sizing, Fillers and the Cord</h2>
        <p className="text-gray-400 mb-4">
          Measure the wrist, add about 1.5 cm of ease, and subtract the length of the message pattern.
          What is left is filler. At the sizes above a 17 cm wrist leaves{" "}
          <strong className="text-white">
            {mom ? Math.floor(mom.fillers / 2) : 0} filler beads on each side of MOM
          </strong>
          , which is what those grey beads at both ends of a pattern are for. Cut the elastic roughly 10
          cm longer than the finished bracelet: knots eat length, and it is easier to trim than to tie
          again.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-400">
          <li>Write the word in Morse first, on paper or with the{" "}
            <Link href="/morse-code-generator" className="text-blue-400 hover:text-blue-300">
              generator
            </Link>
            , and check every letter against the{" "}
            <Link href="/alphabet" className="text-blue-400 hover:text-blue-300">alphabet page</Link>.</li>
          <li>Lay the beads out in order on the table before threading anything. A row you can look at
            catches mistakes; a strand you have already tied does not.</li>
          <li>String: filler, then letter by letter, then filler.</li>
          <li>Tie, then decode the finished bracelet back to text. This is the step people skip.</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">The Two Ways a Bracelet Stops Making Sense</h2>
        <p className="text-gray-400 mb-3">
          <strong className="text-white">1. Spacers left out.</strong> Morse carries meaning in its gaps.
          With no bead marking the boundary, two letters merge into one longer pattern:{" "}
          <code className="font-mono text-gray-300">A</code> then <code className="font-mono text-gray-300">N</code>{" "}
          becomes <code className="font-mono text-gray-300">.--.</code>, which is{" "}
          <strong className="text-white">P</strong>. Nothing is wrong with the beads, and the word is
          gone. See{" "}
          <Link href="/morse-code-patterns" className="text-blue-400 hover:text-blue-300">
            what a Morse pattern means
          </Link>{" "}
          for how many readings a single run can have.
        </p>
        <p className="text-gray-400 mb-6">
          <strong className="text-white">2. Read from the wrong end.</strong> A bracelet has no starting
          mark, so a reader who begins at the clasp and a reader who begins at the knot get different
          words. HOPE read from the far end decodes as EPOH — four perfectly valid letters in the wrong
          order. The fix is physical: put a charm, a differently coloured bead, or a knot the other end
          does not have before the first letter, and tell the person wearing it which end is which.
        </p>
        <p className="text-gray-400">
          A handful of words survive both accidents because they read the same backwards and every one of
          their letters has a symmetric pattern: {safeWords.map((w, i) => (
            <span key={w}>
              <code className="font-mono text-gray-300">{w}</code>
              {i < safeWords.length - 1 ? ", " : "."}
            </span>
          ))}{" "}
          {PALINDROME_LETTERS.filter((c) => /[A-Z]/.test(c)).join(" ")} are the letters whose patterns
          read the same in both directions, so even a reversed strand of them decodes letter by letter.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">What to Encode</h2>
        <p className="text-gray-400 mb-4">
          Short is the rule, because space is the constraint. In order of how often people choose them:
          a first name or a child&apos;s name, initials, a year, and one-word reminders. Names that use
          letters with long patterns run surprisingly wide — words full of O, M, Q and Y stretch fast,
          while words built from E, I, S and T barely take up room.
        </p>
        <p className="text-gray-400">
          If you want the same message as a tattoo instead of beads,{" "}
          <Link href="/tattoo-generator" className="text-blue-400 hover:text-blue-300">
            the tattoo page
          </Link>{" "}
          uses the identical encodings; a bracelet is the reversible version of that decision.
        </p>
      </section>

      <RelatedPages currentPath="/morse-code-bracelet" />
      <AdBanner />
    </div>
  );
}
