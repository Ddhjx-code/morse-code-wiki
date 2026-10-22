// Bead arithmetic for Morse code jewelry.
//
// The code itself is fixed by ITU-R M.1677; bead sizes are a maker's choice.
// The constants below are THIS SITE's published assumptions so that every count
// on the bracelet page can be recomputed from them. Change a constant and every
// table on the page changes with it.
import { CHAR_TO_MORSE } from "./morse";

export const BEAD_MM = {
  /** Round bead standing for a dot. */
  dot: 6,
  /** Tube bead standing for a dash. 13.2mm is 2.2x a dot, not the 3x an
   *  electrical dash is, because a true 3:1 tube next to a 6mm round reads as
   *  a mistake on the wrist. See the trade-off note on the page. */
  dash: 13.2,
  /** Small spacer that ends one letter. */
  letterSpacer: 3,
  /** Larger, visibly different spacer that ends a word. */
  wordSpacer: 6,
  /** Cord taken up by each knot between beads. */
  knot: 0.5,
} as const;

export interface BeadPlan {
  text: string;
  /** Written Morse, letters spaced, words separated by " / ". */
  morse: string;
  dots: number;
  dashes: number;
  letterSpacers: number;
  wordSpacers: number;
  /** Beads that carry the message, spacers included. */
  messageBeads: number;
  /** Length of the strung message in mm, knots counted. */
  patternMm: number;
  /** How many dot-sized beads fit in the remaining wrist space. */
  fillers: number;
  wristMm: number;
}

const WRIST_MM = 170; // a ~6.7in wrist, the common medium

/** Encode one character, or null if this site does not have a code for it. */
function codeOf(ch: string): string | null {
  const upper = ch.toUpperCase();
  return CHAR_TO_MORSE[upper] ?? CHAR_TO_MORSE[ch] ?? null;
}

export function planBeads(text: string, wristMm: number = WRIST_MM): BeadPlan | null {
  const words = text.trim().toUpperCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return null;

  let dots = 0;
  let dashes = 0;
  let letterSpacers = 0;
  let wordSpacers = 0;
  const written: string[] = [];

  for (const [wi, word] of words.entries()) {
    const codes: string[] = [];
    for (const ch of word) {
      const code = codeOf(ch);
      if (!code) return null; // unsupported character: refuse to guess
      codes.push(code);
      for (const symbol of code) {
        if (symbol === ".") dots += 1;
        else if (symbol === "-") dashes += 1;
        else return null;
      }
    }
    letterSpacers += Math.max(0, codes.length - 1);
    written.push(codes.join(" "));
    if (wi < words.length - 1) wordSpacers += 1;
  }

  const messageBeads = dots + dashes + letterSpacers + wordSpacers;

  // Every bead laid down is followed by a knot, including the last one before
  // the fillers, so knots are counted per bead rather than per gap.
  const patternMm =
    dots * (BEAD_MM.dot + BEAD_MM.knot) +
    dashes * (BEAD_MM.dash + BEAD_MM.knot) +
    letterSpacers * (BEAD_MM.letterSpacer + BEAD_MM.knot) +
    wordSpacers * (BEAD_MM.wordSpacer + BEAD_MM.knot);

  const remaining = Math.max(0, wristMm - patternMm);
  const fillers = Math.floor(remaining / (BEAD_MM.dot + BEAD_MM.knot));

  return {
    text: text.trim(),
    morse: written.join(" / "),
    dots,
    dashes,
    letterSpacers,
    wordSpacers,
    messageBeads,
    patternMm: Math.round(patternMm),
    fillers,
    wristMm,
  };
}

/**
 * Letters whose pattern reads the same forwards and backwards. On a bracelet
 * these are the only beads that survive being read from the wrong end, so a
 * word made entirely of them means the same thing in both directions.
 */
export const PALINDROME_LETTERS: string[] = Object.entries(CHAR_TO_MORSE)
  .filter(([, code]) => code === code.split("").reverse().join(""))
  .map(([ch]) => ch)
  .sort();

/**
 * True only when a word survives being read from the wrong end, which needs
 * two separate things: the letters of the word must spell the same word
 * backwards, and every letter pattern must itself read the same backwards.
 *
 * "MOM" passes both. "HOPE" does not: H, O, P and E all have symmetric
 * patterns, so a reader working from the far end decodes real letters - just
 * in the order E, P, O, H.
 */
export function readsSameBothWays(text: string): boolean {
  const letters = text.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (letters.length === 0) return false;
  const isWordPalindrome = letters === letters.split("").reverse().join("");
  const allPatternsPalindromic = [...letters].every((ch) => PALINDROME_LETTERS.includes(ch));
  return isWordPalindrome && allPatternsPalindromic;
}


