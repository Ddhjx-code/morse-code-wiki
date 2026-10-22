import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import RelatedPages from "@/components/RelatedPages";
import { buildMetadata } from "@/lib/metadata";
import { AT_SIGN, MARKS, codeOf } from "@/lib/punctuation";

export const metadata = buildMetadata({
  path: "/morse-code-punctuation",
  title: "Morse Code Punctuation - The Marks That Exist and the Ones That Do Not",
  description:
    "Punctuation in International Morse Code, split by what the ITU standard actually defines and what charts add by convention. Colon, comma, apostrophe, the at sign, and why there is no ellipsis.",
  keywords:
    "morse code punctuation, morse code colon, morse code comma, morse code question mark, morse code at sign, morse code apostrophe, punctuation in morse code",
});

const standard = MARKS.filter((m) => m.status === "standard");
const convention = MARKS.filter((m) => m.status === "convention");

function Row({ ch, name, ituLabel }: { ch: string; name: string; ituLabel: string | null }) {
  const code = codeOf(ch);
  return (
    <tr>
      <td className="px-3 py-2 text-center text-lg font-bold text-white">{ch}</td>
      <td className="px-3 py-2 font-mono text-gray-300">{code}</td>
      <td className="px-3 py-2 text-gray-400">{name}</td>
      <td className="px-3 py-2 text-gray-500 text-xs">{ituLabel ?? "—"}</td>
      <td className="px-3 py-2 text-right text-gray-500">{code.length}</td>
    </tr>
  );
}

export default function PunctuationPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">Morse Code Punctuation</h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Morse code has punctuation, but far less of it than a keyboard does, and the difference matters if
        you are encoding a message for a tattoo, a bracelet or a puzzle. This page separates the marks the
        international standard defines from the ones charts include by convention.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Defined by the Standard</h2>
        <p className="text-gray-400 mb-4">
          These appear by name in Recommendation ITU-R M.1677, section 1.1.3, the document that fixes the
          international character set. Where the recommendation calls a mark something different from its
          everyday name, that wording is shown too.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-900 text-gray-400">
              <tr>
                <th className="px-3 py-2">Mark</th>
                <th className="px-3 py-2 text-left">Code</th>
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">As worded in M.1677</th>
                <th className="px-3 py-2 text-right">Elements</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {standard.map((m) => (
                <Row key={m.ch} ch={m.ch} name={m.name} ituLabel={m.ituLabel} />
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Two of these do double duty in the standard&apos;s own wording: the colon and the slash are each
          also named as a division sign, and the equals mark is sent as a double hyphen.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">In Common Charts, Not in the Standard</h2>
        <p className="gray-400 text-gray-400 mb-4">
          Every operator chart carries these, and they work — they are simply not part of the list above.
          Treat them as conventions: a station that has learned a different chart may not send them the same
          way.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-900 text-gray-400">
              <tr>
                <th className="px-3 py-2">Mark</th>
                <th className="px-3 py-2 text-left">Code</th>
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-right">Elements</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {convention.map((m) => (
                <tr key={m.ch}>
                  <td className="px-3 py-2 text-center text-lg font-bold text-white">{m.ch}</td>
                  <td className="px-3 py-2 font-mono text-gray-300">{codeOf(m.ch)}</td>
                  <td className="px-3 py-2 text-gray-400">{m.name}</td>
                  <td className="px-3 py-2 text-right text-gray-500">{codeOf(m.ch).length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 mt-4">
          The conspicuous gap is the <strong className="text-white">exclamation mark</strong>. It appears on
          this page&apos;s own chart above because chart makers have largely settled on a pattern for it, but
          the sentiment in the amateur-radio press when the standard was last revised was that the code had
          no way to express excitement — a complaint raised at the time the at sign was being added.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">The Marks People Ask For That Do Not Exist</h2>
        <p className="text-gray-400 mb-3">
          <strong className="text-white">There is no ellipsis.</strong> A run of dots like the one used for{" "}
          <code className="font-mono text-gray-300">...</code> in writing is not punctuation in Morse: three
          dots in one character is <code className="font-mono text-gray-300">S</code>. An ellipsis in a
          Morse message is a sequence of characters with letter gaps, which means the trailing-off effect
          exists only as spacing, and spacing is precisely what a tattoo or a bead strand loses.
        </p>
        <p className="text-gray-400 mb-3">
          <strong className="text-white">There is no semicolon in the standard</strong>, though most charts
          print one, and there is no em dash, no asterisk and no brackets of any kind beyond the two round
          ones listed above.
        </p>
        <p className="text-gray-400">
          If you are encoding something that leans on this kind of mark — a sentence that trails off, a line
          break, a stage direction — the usual practice is to send words only, and let the receiver infer.{" "}
          <Link href="/morse-code-patterns" className="text-blue-400 hover:text-blue-300">
            The pattern page
          </Link>{" "}
          shows what happens to a message when the gaps have to carry punctuation instead of the marks
          themselves.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">The At Sign: The Newest Character in Morse Code</h2>
        <p className="text-gray-400 mb-3">
          The <strong className="text-white">{AT_SIGN.ch}</strong> —{" "}
          <code className="font-mono text-gray-300">{codeOf(AT_SIGN.ch)}</code>, called{" "}
          <em>commercial at</em> in the standard — is the youngest entry in the international set. It came
          in with Recommendation ITU-R M.1677, effective {AT_SIGN.added}, and the ITU&apos;s own spokesman
          described it at the time as the first change to the code in at least sixty years: a period usually
          dated from the end of the Second World War.
        </p>
        <p className="text-gray-400 mb-3">
          The reason is mundane. Operators exchanging e-mail addresses had to spell the word AT, and{" "}
          <code className="font-mono text-gray-300">{codeOf("A")}{codeOf("T")}</code> sent at speed runs
          together into the letter <code className="font-mono text-gray-300">W</code>. The new pattern is
          built from A and C — the reading of{" "}
          <code className="font-mono text-gray-300">{codeOf(AT_SIGN.ch)}</code> as &quot;a commercial
          at&quot; is the folk explanation of why it is shaped that way, not a ruling from the ITU.
        </p>
        <p className="text-gray-400">
          One correction worth making, because it circulates: the at sign is often dated to 2009. That is
          the year the recommendation was revised again, not the year the character was added.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Accents and Other Alphabets</h2>
        <p className="text-gray-400">
          M.1677 lists one accented letter, <strong className="text-white">É</strong>, sent as{" "}
          <code className="font-mono text-gray-300">..-..</code>, and it is not a diacritic system — other
          accented letters are handled by spelling or by national variations. Languages written outside the
          Latin alphabet do not use this table at all: Japanese has its own Wabun code, Chinese Morse works
          through four-digit groups, and Korean uses a romanisation scheme. A chart that shows only A-Z and
          ten digits, as most do, is a chart of the international Latin set rather than of Morse code entire.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Punctuation Rules From the Same Standard</h2>
        <p className="text-gray-400 mb-4">
          The recommendation also prescribes how some marks are used rather than only how they are sent, and
          a few of those rules surprise people reading a decoded message back:
        </p>
        <ul className="space-y-2 text-gray-400">
          <li>
            <strong className="text-white">Quotation marks go before and after the quoted words</strong>, and
            where code converters are in use the apostrophe may be sent twice instead.
          </li>
          <li>
            <strong className="text-white">Minutes and seconds use the apostrophe</strong>, once or twice —
            the quotation pattern may not be used as a seconds mark.
          </li>
          <li>
            <strong className="text-white">Percentages are sent with a slash</strong>: to send 2 percent the
            standard says transmit 2-0/0, not 20/0.
          </li>
          <li>
            <strong className="text-white">A mistake is eight dots</strong>, sent as its own signal, not a
            backspace.
          </li>
        </ul>
      </section>

      <RelatedPages currentPath="/morse-code-punctuation" />
      <AdBanner />
    </div>
  );
}
