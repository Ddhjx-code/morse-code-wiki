import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import RelatedPages from "@/components/RelatedPages";
import { buildMetadata } from "@/lib/metadata";
import { charactersFor, lengthIndex, readingCount, wordsFrom } from "@/lib/patterns";

export const metadata = buildMetadata({
  path: "/morse-code-patterns",
  title: "Morse Code Patterns - What a Run of Dots and Dashes Means",
  description:
    "Look up any Morse pattern back to its characters, grouped by length, and see how many readings one continuous run admits when the gaps are missing. Includes the standard spacing ratios that decide the answer.",
  keywords:
    "morse code pattern, morse code dots and dashes meaning, what does this morse code say, morse code without spaces, morse code lookup by pattern, decode morse code dots",
});

const INDEX = lengthIndex();

/** Runs worth showing because losing their gaps is the common real-world failure. */
const AMBIGUOUS = [
  ".-",
  "-.--",
  "....",
  ".-..",
  "...",
  "-----",
  "-.---",
  "...---...",
];

export default function PatternsPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Morse Code Patterns</h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Most references go from a letter to its pattern. This page runs the other way: you have dots and
        dashes, and you want to know what they can mean.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Every Pattern, Grouped by Length</h2>
        <p className="text-gray-400 mb-4">
          Count the elements in what you are looking at — a dot and a dash both count as one element — then
          read across from that length. A single mark on its own is one of two characters; five marks in a
          row cannot be a letter at all, because no letter in the international set is longer than four.
        </p>
        <div className="space-y-4">
          {INDEX.map(({ length, patterns }) => (
            <div key={length} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-3">
                {length} element{length > 1 ? "s" : ""} — {patterns.length} pattern
                {patterns.length > 1 ? "s" : ""}
              </h3>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
                {patterns.map((p) => (
                  <li key={p} className="flex justify-between items-baseline text-sm">
                    <code className="font-mono text-gray-300">{p}</code>
                    <span className="text-white font-semibold ml-2">{charactersFor(p).join(" / ")}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Generated from this site&apos;s ITU-standard table, so the set is exactly the 36 letters and
          digits the{" "}
          <Link href="/alphabet" className="text-blue-400 hover:text-blue-300">alphabet page</Link> prints.
          Punctuation is omitted here because the marks that look like runs of dots — a period,{" "}
          <code className="font-mono">...-..-</code> for a dollar sign — are covered on the{" "}
          <Link href="/morse-code-punctuation" className="text-blue-400 hover:text-blue-300">
            punctuation page
          </Link>
          .
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Why the Same Marks Mean Several Things</h2>
        <p className="text-gray-400 mb-4">
          Morse stores meaning in gaps as well as in marks. {<a href="https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-0-200405-S!!PDF-E.pdf" rel="noopener" target="_blank" className="text-blue-400 hover:text-blue-300">Recommendation ITU-R M.1677-0</a>}, section 2, fixes the proportions: a
          dash is three dots long, the gap inside one letter is one dot, the gap between letters is three
          dots, and the gap between words is seven. Remove those gaps and a run of marks stops being one message.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-900 text-gray-400">
              <tr>
                <th className="px-3 py-2 text-left">Run, gaps lost</th>
                <th className="px-3 py-2 text-right">Possible readings</th>
                <th className="px-3 py-2 text-left">Some of the letter combinations it allows</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {AMBIGUOUS.map((run) => {
                const words = wordsFrom(run).slice(0, 8);
                return (
                  <tr key={run}>
                    <td className="px-3 py-2 font-mono text-gray-300">{run}</td>
                    <td className="px-3 py-2 text-right text-white">{readingCount(run)}</td>
                    <td className="px-3 py-2 text-gray-500">{words.join(" · ") || "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 mt-4">
          The small ones are the instructive ones. <code className="font-mono text-gray-300">.-</code> is
          the letter A, and it is also E followed by T. <code className="font-mono text-gray-300">....</code>{" "}
          is H, and it is also four E&apos;s, or I and E, or S and E — eight readings before you get to any
          punctuation. <code className="font-mono text-gray-300">-.--</code> is Y, and it is also K and T,
          or N and M, or T and A and T.
        </p>
        <p className="text-gray-400 mt-3">
          The last row is SOS written with no gaps between its letters. Its distress pattern is famous for a
          reason that only shows up in this table: it is a continuous run of nine elements that can be cut
          {" "}
          <strong className="text-white">{readingCount("...---...")}</strong> different ways. The signal
          works because operators send it as one unmistakable unit, not because it is unambiguous on paper.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Reading a Run That Has Lost Its Gaps</h2>
        <p className="text-gray-400 mb-4">
          This is the situation a printed puzzle, an old photograph, a tattoo stencil or a bead bracelet
          puts you in: marks with no visible spacing. There is no algorithm that solves it, because the
          information is genuinely gone. What works in practice:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-400">
          <li>Try the letter gaps first that produce the fewest, longest characters. Morse letters are
            mostly one to four elements, so a long run is several letters, not one.</li>
          <li>Look for the five-element trap. Any group of five is a digit, never a letter, which is why
            padlock clues in escape rooms are so often Morse numbers.</li>
          <li>Count elements before you commit. Only six characters in the whole set are one or two marks
            long — <code className="font-mono text-gray-300">E</code>,{" "}
            <code className="font-mono text-gray-300">T</code>,{" "}
            <code className="font-mono text-gray-300">I</code>,{" "}
            <code className="font-mono text-gray-300">A</code>,{" "}
            <code className="font-mono text-gray-300">M</code> and{" "}
            <code className="font-mono text-gray-300">N</code>, and four of those (E, T, I, M) are pure
            dots or pure dashes. A long run cannot be built out of them alone, so a reading that is all
            one-mark characters means a gap has been dropped.</li>
          <li>If the text is meant to be English, use the words it has to be. The{" "}
            <Link href="/morse-code-translator-to-english" className="text-blue-400 hover:text-blue-300">
              Morse-to-text page
            </Link>{" "}
            decodes properly spaced input; this page is for input that has no spacing to trust.</li>
        </ol>
        <p className="text-gray-400 mt-4">
          And if you are the one making the thing rather than reading it: keep the gaps.{" "}
          <Link href="/tattoo-generator" className="text-blue-400 hover:text-blue-300">
            The tattoo page
          </Link>{" "}
          and the{" "}
          <Link href="/morse-code-bracelet" className="text-blue-400 hover:text-blue-300">
            bracelet page
          </Link>{" "}
          both come down to the same instruction — the marks are easy, the spacing is where messages get
          lost. The{" "}
          <Link href="/practice" className="text-blue-400 hover:text-blue-300">practice drill</Link> trains
          the ear to hear those gaps as part of the letter.
        </p>
      </section>

      <RelatedPages currentPath="/morse-code-patterns" />
      <AdBanner />
    </div>
  );
}
