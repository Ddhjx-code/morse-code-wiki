// Reverse-lookup helpers: from a written run of dots and dashes back to every
// character or letter combination it can legally represent.
import { CHAR_TO_MORSE } from "./morse";

/**
 * Letters and digits only - the 36 characters this page indexes.
 *
 * Punctuation is deliberately excluded from the segmentation universe. If it
 * were included, a run could be cut at, say, a six-element period pattern, and
 * the reading counts below would no longer match the table a reader is looking
 * at. Marks are covered on their own page instead.
 */
const CODES = [...new Set(
  Object.entries(CHAR_TO_MORSE)
    .filter(([ch]) => /^[A-Z0-9]$/.test(ch))
    .map(([, code]) => code),
)];
const MAX_LEN = Math.max(...CODES.map((c) => c.length));

const REVERSE: Record<string, string[]> = {};
for (const [ch, code] of Object.entries(CHAR_TO_MORSE)) {
  if (!/^[A-Z0-9]$/.test(ch)) continue;
  (REVERSE[code] ??= []).push(ch);
}

/** Characters whose code is exactly this pattern. */
export function exact(pattern: string): string[] {
  return REVERSE[pattern] ?? [];
}

/**
 * Every way a continuous run can be split into valid characters, with no gap
 * information. This is why spacing is part of the code rather than decoration:
 * the same marks carry several different messages depending on where the breaks
 * fall.
 */
export function segmentations(run: string, limit = 4000): string[][] {
  if (!/^[.-]+$/.test(run)) return [];
  const out: string[][] = [];
  const walk = (i: number, acc: string[]) => {
    if (out.length >= limit) return;
    if (i === run.length) {
      out.push([...acc]);
      return;
    }
    for (let len = 1; len <= MAX_LEN; len += 1) {
      const part = run.slice(i, i + len);
      if (REVERSE[part]) {
        acc.push(part);
        walk(i + len, acc);
        acc.pop();
      }
    }
  };
  walk(0, []);
  return out;
}

/** How many different readings a run admits. */
export function readingCount(run: string): number {
  return segmentations(run).length;
}

/** Letters of a segmentation joined into a word, when every group is one character. */
export function wordsFrom(run: string): string[] {
  const set = new Set<string>();
  for (const parts of segmentations(run, 4000)) {
    if (parts.every((p) => (REVERSE[p]?.length ?? 0) === 1)) {
      set.add(parts.map((p) => REVERSE[p][0]).join(""));
    }
  }
  return [...set].sort();
}

/** Lengths in use, and how many characters sit at each length. */
export function lengthIndex(): { length: number; patterns: string[] }[] {
  const by = new Map<number, string[]>();
  for (const code of CODES) by.set(code.length, [...(by.get(code.length) ?? []), code]);
  return [...by.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([length, patterns]) => ({ length, patterns: patterns.sort() }));
}

export function charactersFor(pattern: string): string[] {
  return REVERSE[pattern] ?? [];
}
