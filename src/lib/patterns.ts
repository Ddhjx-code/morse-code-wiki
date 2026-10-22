// Reverse-lookup helpers: from a written run of dots and dashes back to every
// character or letter combination it can legally represent.
import { CHAR_TO_MORSE } from "./morse";

/** All code patterns known to this site, longest first for segmentation. */
const CODES = [...new Set(Object.values(CHAR_TO_MORSE))];
const MAX_LEN = Math.max(...CODES.map((c) => c.length));

const REVERSE: Record<string, string[]> = {};
for (const [ch, code] of Object.entries(CHAR_TO_MORSE)) {
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
