// Punctuation reference data, single source of truth for the punctuation page
// and the alphabet grid.
//
// Codes always come from CHAR_TO_MORSE. Status comes from the published text of
// Recommendation ITU-R M.1677-0 (approved 3 May 2004), section 1.1.3, which
// names the marks it defines. Marks outside that list are shown as convention:
// they are in wide use by operators and chart makers, and are not in the
// recommendation's table.
import { CHAR_TO_MORSE } from "./morse";

export type MarkStatus = "standard" | "convention";

export interface Mark {
  ch: string;
  name: string;
  /** ITU-R M.1677-0 gives this wording for the mark, when it lists it at all. */
  ituLabel: string | null;
  status: MarkStatus;
}

const NAMES: Record<string, string> = {
  ".": "Period",
  ",": "Comma",
  "?": "Question mark",
  "'": "Apostrophe",
  "!": "Exclamation",
  "/": "Slash",
  "(": "Open parenthesis",
  ")": "Close parenthesis",
  "&": "Ampersand",
  ":": "Colon",
  ";": "Semicolon",
  "=": "Equals",
  "+": "Plus",
  "-": "Hyphen",
  _: "Underscore",
  '"': "Quote",
  $: "Dollar",
  "@": "At sign",
};

/** Marks named in ITU-R M.1677-0 §1.1.3, with the recommendation's own wording. */
const ITU_LABELS: Record<string, string> = {
  ".": "Full stop (period)",
  ",": "Comma",
  ":": "Colon or division sign",
  "?": "Question mark",
  "'": "Apostrophe",
  "-": "Hyphen or dash or subtraction sign",
  "/": "Fraction bar or division sign",
  "(": "Left-hand bracket (parenthesis)",
  ")": "Right-hand bracket (parenthesis)",
  '"': "Inverted commas (quotation marks)",
  "=": "Double hyphen",
  "+": "Cross or addition sign",
  "@": "Commercial at",
};

export const MARKS: Mark[] = Object.keys(NAMES)
  .filter((ch) => CHAR_TO_MORSE[ch] !== undefined)
  .map((ch) => ({
    ch,
    name: NAMES[ch],
    ituLabel: ITU_LABELS[ch] ?? null,
    status: ITU_LABELS[ch] ? "standard" : "convention",
  }));

export function codeOf(ch: string): string {
  return CHAR_TO_MORSE[ch] ?? "";
}

/**
 * The at sign is the newest character in the international set: ITU approved it
 * with M.1677-0, effective 3 May 2004, and the agency's own spokesman described
 * it as the first change to the code in at least sixty years. Operators had
 * previously spelled "AT", which runs together as the letter W when sent fast.
 */
export const AT_SIGN = {
  ch: "@",
  added: "2004-05-03",
  firstSinceWar: true,
  reason: "exchanging e-mail addresses by radio",
} as const;
