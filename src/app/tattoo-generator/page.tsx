import Link from "next/link";
import TattooGenerator from "./TattooGenerator";
import AdBanner from "@/components/AdBanner";
import RelatedPages from "@/components/RelatedPages";
import { buildMetadata } from "@/lib/metadata";
import { CHAR_TO_MORSE } from "@/lib/morse";

export const metadata = buildMetadata({
  path: "/tattoo-generator",
  title: "Morse Code Tattoo Generator - Ideas, Placements and Spacing Checks",
  description:
    "Design a Morse code tattoo from any word, name or date, with the exact dot-and-dash pattern and the element count you need to judge placement. Includes the spacing checks that keep a finished tattoo readable.",
  keywords:
    "morse code tattoo, morse code tattoo generator, morse code tattoo ideas, morse code tattoo i love you, morse code name tattoo, morse code tattoo meaning",
});

/** Encode a phrase straight from the site's own table, so nothing here can be hand-typed wrong. */
function encode(text: string): { morse: string; dots: number; dashes: number; unsupported: string[] } {
  let dots = 0;
  let dashes = 0;
  const unsupported: string[] = [];
  const words = text.trim().split(/\s+/).filter(Boolean).map((word) => {
    const codes: string[] = [];
    for (const ch of word.toUpperCase()) {
      const code = CHAR_TO_MORSE[ch];
      if (!code) {
        if (ch !== "." && ch !== "," && ch !== "?") unsupported.push(ch);
        continue;
      }
      codes.push(code);
      for (const s of code) {
        if (s === ".") dots += 1;
        else dashes += 1;
      }
    }
    return codes.join(" ");
  });
  return { morse: words.join(" / "), dots, dashes, unsupported: [...new Set(unsupported)] };
}

const IDEAS = [
  { phrase: "I Love You", why: "The most chosen phrase, and the one most often mis-spaced" },
  { phrase: "Breathe", why: "Mindfulness reminder; long pattern, needs a flat run of skin" },
  { phrase: "Be Brave", why: "Two short words; the word break must stay visible" },
  { phrase: "Family", why: "Common for wrist and collarbone pieces" },
  { phrase: "Strength", why: "Ten elements; forearm or ribcage rather than a finger" },
  { phrase: "Freedom", why: "Motivational single word" },
  { phrase: "Hope", why: "Short, and every letter symmetric so it decodes either way" },
  { phrase: "Forever", why: "Commitment piece; often split across two people" },
];

const PLACEMENTS = [
  { where: "Finger or behind the ear", limit: "up to about 8 elements", note: "One short word. Any more and the dots start to blur into each other on curved skin." },
  { where: "Inner wrist", limit: "about 8 to 16 elements", note: "The most common placement. Flat enough to keep gaps readable, easy to cover." },
  { where: "Collarbone", limit: "about 14 to 24 elements", note: "A long horizontal run that suits one or two words." },
  { where: "Inner forearm", limit: "20 elements upward", note: "The safest canvas for phrases, because the line stays straight as the skin moves." },
  { where: "Ribs or spine", limit: "phrases and quotes", note: "Vertical runs work well here, but check the pattern still reads top to bottom after healing." },
];

function IdeaTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-900 text-gray-400">
          <tr>
            <th className="px-3 py-2 text-left">Phrase</th>
            <th className="px-3 py-2 text-left">Pattern</th>
            <th className="px-3 py-2 text-right">Dots</th>
            <th className="px-3 py-2 text-right">Dashes</th>
            <th className="px-3 py-2 text-right">Elements</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {IDEAS.map((it) => {
            const e = encode(it.phrase);
            return (
              <tr key={it.phrase}>
                <td className="px-3 py-2 font-semibold text-white">{it.phrase}</td>
                <td className="px-3 py-2 font-mono text-gray-300">{e.morse}</td>
                <td className="px-3 py-2 text-right">{e.dots}</td>
                <td className="px-3 py-2 text-right">{e.dashes}</td>
                <td className="px-3 py-2 text-right text-white">{e.dots + e.dashes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function TattooGeneratorPage() {
  const yl = encode("I Love You");
  const year = encode("2024");

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Morse Code Tattoo Generator</h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Convert a word, name or date into a dot-and-dash design. Below the generator: the patterns people
        ask for most, how much skin each one needs, and the checks that decide whether the tattoo is still
        readable in ten years.
      </p>

      <TattooGenerator />

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-3">Popular Phrases, With Their Element Counts</h2>
        <p className="text-gray-400 mb-4">
          The column that matters is the last one. A Morse tattoo is not measured in letters but in
          elements, because a dash takes three times the space of a dot. Two phrases with the same letter
          count can need twice the room.
        </p>
        <IdeaTable />
        <p className="text-sm text-gray-500 mt-3">
          Patterns are generated from this site&apos;s own ITU-standard table, so they match the{" "}
          <Link href="/alphabet" className="text-blue-400 hover:text-blue-300">alphabet page</Link> and
          the <Link href="/morse-code-generator" className="text-blue-400 hover:text-blue-300">generator</Link>{" "}
          exactly. Words are separated by a slash in writing; on skin that gap has to be a real, visible
          gap, or the words merge.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-3">Spacing Is the Design, Not the Decoration</h2>
        <p className="text-gray-400 mb-4">
          Morse carries meaning in the gaps between marks as much as in the marks. The standard proportions
          are: a dash three dots long, a one-dot gap inside a letter, a three-dot gap between letters, and a
          seven-dot gap between words. Those ratios are defined for signal timing, and a tattoo cannot
          literally have duration — but it is the only reference a careful artist has for how much wider a
          word break should be than a letter break.
        </p>
        <p className="text-gray-400 mb-4">
          The most common way a Morse tattoo fails is not a wrong dot or a missing dash. It is the artist
          evening the gaps out, because even spacing looks tidier in a stencil. When every gap is the same
          width, the message is destroyed while the marks stay perfect.{" "}
          <code className="font-mono text-gray-300">.- -.</code> is AN;{" "}
          <code className="font-mono text-gray-300">.--.</code> is P. Same beads, same ink, different word —
          see <Link href="/morse-code-patterns" className="text-blue-400 hover:text-blue-300">what a pattern means</Link>{" "}
          for how far this goes.
        </p>
        <p className="text-gray-400">
          A practical instruction to hand over: <strong className="text-white">keep the gap inside a letter,
          make the gap between letters clearly wider, and make the gap between words wider still</strong>. If
          the piece is one word only, the two-way gap still matters — it is what separates a letter from a
          pair of letters.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Check It Before It Is Permanent</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-400">
          <li>Type the phrase into the generator above and write the output down exactly as it appears,
            spaces and all.</li>
          <li>Play it back on the <Link href="/audio" className="text-blue-400 hover:text-blue-300">audio page</Link>.
            Listening catches letter-boundary errors that the eye accepts.</li>
          <li>Print the pattern and bring the print, not just a phone screenshot, to the studio.</li>
          <li>Once the stencil is on the skin, photograph it and decode the marks back to text using the{" "}
            <Link href="/morse-code-translator-to-english" className="text-blue-400 hover:text-blue-300">
              Morse-to-text page
            </Link>
            . If the decoded result is not the phrase you asked for, the stencil is wrong — fix it before any
            ink goes on.</li>
          <li>Ask for a second reader who does not know the intended answer. A partner who expects
            &quot;LOVE&quot; will read &quot;LOVE&quot;.</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Placement Follows the Element Count</h2>
        <ul className="space-y-3">
          {PLACEMENTS.map((p) => (
            <li key={p.where} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-semibold text-white">{p.where}</span>
                <span className="text-xs font-mono text-gray-500">{p.limit}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{p.note}</p>
            </li>
          ))}
        </ul>
        <p className="text-gray-400 mt-4">
          To put those ranges to work: <strong className="text-white">I LOVE YOU is {yl.dots + yl.dashes}
          elements</strong> ({yl.dots} dots, {yl.dashes} dashes),           which is a forearm or a long collarbone
          run rather than a wrist. And <strong className="text-white">any four-digit year is{" "}
          {year.dots + year.dashes} elements</strong> ({year.morse}), because every digit in Morse is exactly five elements
          — a full date in numbers is a sleeve decision wearing a bracelet&apos;s ambition.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-3">Two Things People Try to Ink That Are Not in the Code</h2>
        <p className="text-gray-400 mb-3">
          <strong className="text-white">An ellipsis.</strong> There is no ellipsis character in the
          international standard. Three dots in a row is the letter S, and four in a row is H, so
          &quot;...&quot; as a trailing pause is not something the code can say. The usual workaround is the
          full-stop pattern repeated, or simply leaving the phrase unfinished on the skin.
        </p>
        <p className="text-gray-400">
          <strong className="text-white">Punctuation you assume exists.</strong> The standard set covers a
          period, comma, colon, question mark, apostrophe, hyphen, slash, brackets, quotation marks and a
          handful more; several marks people expect are conventions rather than standard entries. Before
          inking any mark at all, check it against the{" "}
          <Link href="/morse-code-punctuation" className="text-blue-400 hover:text-blue-300">
            punctuation page
          </Link>{" "}
          rather than trusting a chart that may have added it locally.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-3">Tips for Your Artist</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul className="text-gray-300 space-y-3 text-sm">
            <li>Bring the printed pattern, and state which marks are dots and which are dashes rather than leaving it to be inferred.</li>
            <li>Dots should stay clearly round and dashes clearly elongated; if they converge in size, the code stops decoding.</li>
            <li>Very small or tightly curved placements squeeze the gaps together, which is where unreadable tattoos come from.</li>
            <li>Ask for the stencil to be checked by someone who has not seen the phrase.</li>
            <li>If the piece is a shared or split design, decide the reading direction between you and mark the start — a bracelet has the same problem, and the same fix.</li>
          </ul>
        </div>
        <p className="text-gray-400 mt-4">
          Wearing the message instead of inking it? The{" "}
          <Link href="/morse-code-bracelet" className="text-blue-400 hover:text-blue-300">
            bracelet page
          </Link>{" "}
          uses these same patterns and adds the bead arithmetic — useful as a rehearsal, since a bracelet can
          be restrung and a tattoo cannot.
        </p>
      </section>

      <RelatedPages currentPath="/tattoo-generator" />
      <AdBanner />
    </div>
  );
}
