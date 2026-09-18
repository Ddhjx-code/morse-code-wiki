import { CHAR_TO_MORSE } from '@/lib/morse';

export interface MorseUnit {
  key: string;
  display: string;
  morse: string;
  type: 'letter' | 'number';
  readAs: string;
  exampleWord: string;
  memoryTip: string;
}

interface UnitSeed {
  key: string;
  type: 'letter' | 'number';
  readAs: string;
  exampleWord: string;
  memoryTip: string;
}

const SEEDS: UnitSeed[] = [
  {
    key: 'A', type: 'letter', readAs: 'di-dah', exampleWord: 'Alfa',
    memoryTip: 'A is ·− : one dot then a dash. It is the exact reverse of N (−·).',
  },
  {
    key: 'B', type: 'letter', readAs: 'dah-di-di-dit', exampleWord: 'Bravo',
    memoryTip: 'B is −··· : a dash followed by three dots — the mirror image of V (···−).',
  },
  {
    key: 'C', type: 'letter', readAs: 'dah-di-dah-dit', exampleWord: 'Charlie',
    memoryTip: 'C is −·−· : a perfectly alternating dash-dot-dash-dot pattern.',
  },
  {
    key: 'D', type: 'letter', readAs: 'dah-di-dit', exampleWord: 'Delta',
    memoryTip: 'D is −·· : a dash then two dots. Reverse it and you get U (··−).',
  },
  {
    key: 'E', type: 'letter', readAs: 'dit', exampleWord: 'Echo',
    memoryTip: 'E is · : the most common letter in English gets the shortest possible code, a single dot.',
  },
  {
    key: 'F', type: 'letter', readAs: 'di-di-dah-dit', exampleWord: 'Foxtrot',
    memoryTip: 'F is ··−· : two dots, a dash, then a dot — the mirror of L (·−··).',
  },
  {
    key: 'G', type: 'letter', readAs: 'dah-dah-dit', exampleWord: 'Golf',
    memoryTip: 'G is −−· : two dashes then a dot. Reverse it and you get W (·−−).',
  },
  {
    key: 'H', type: 'letter', readAs: 'di-di-di-dit', exampleWord: 'Hotel',
    memoryTip: 'H is ···· : four dots — the only four-element letter made of nothing but dots.',
  },
  {
    key: 'I', type: 'letter', readAs: 'di-dit', exampleWord: 'India',
    memoryTip: 'I is ·· : two dots, the mirror of M (−−).',
  },
  {
    key: 'J', type: 'letter', readAs: 'di-dah-dah-dah', exampleWord: 'Juliett',
    memoryTip: 'J is ·−−− : a dot then three dashes, the longest code that starts with a single dot.',
  },
  {
    key: 'K', type: 'letter', readAs: 'dah-di-dah', exampleWord: 'Kilo',
    memoryTip: 'K is −·− : dash-dot-dash, a palindrome that reads the same in both directions.',
  },
  {
    key: 'L', type: 'letter', readAs: 'di-dah-di-dit', exampleWord: 'Lima',
    memoryTip: 'L is ·−·· : dot-dash-dot-dot — the mirror of F (··−·).',
  },
  {
    key: 'M', type: 'letter', readAs: 'dah-dah', exampleWord: 'Mike',
    memoryTip: 'M is −− : two dashes, the mirror of I (··).',
  },
  {
    key: 'N', type: 'letter', readAs: 'dah-dit', exampleWord: 'November',
    memoryTip: 'N is −· : dash-dot, the exact reverse of A (·−).',
  },
  {
    key: 'O', type: 'letter', readAs: 'dah-dah-dah', exampleWord: 'Oscar',
    memoryTip: 'O is −−− : three dashes — the only three-element letter made of nothing but dashes.',
  },
  {
    key: 'P', type: 'letter', readAs: 'di-dah-dah-dit', exampleWord: 'Papa',
    memoryTip: 'P is ·−−· : dot-dash-dash-dot, a palindrome.',
  },
  {
    key: 'Q', type: 'letter', readAs: 'dah-dah-di-dah', exampleWord: 'Quebec',
    memoryTip: 'Q is −−·− : dash-dash-dot-dash. Reverse it and you get Y (−·−−).',
  },
  {
    key: 'R', type: 'letter', readAs: 'di-dah-dit', exampleWord: 'Romeo',
    memoryTip: 'R is ·−· : dot-dash-dot, a palindrome and the mirror of K in shape.',
  },
  {
    key: 'S', type: 'letter', readAs: 'di-di-dit', exampleWord: 'Sierra',
    memoryTip: 'S is ··· : three dots, the mirror of O (−−−). Two of these frame the SOS distress call.',
  },
  {
    key: 'T', type: 'letter', readAs: 'dah', exampleWord: 'Tango',
    memoryTip: 'T is − : the second most common English letter takes a single dash — the mirror of E.',
  },
  {
    key: 'U', type: 'letter', readAs: 'di-di-dah', exampleWord: 'Uniform',
    memoryTip: 'U is ··− : two dots then a dash, the reverse of D (−··).',
  },
  {
    key: 'V', type: 'letter', readAs: 'di-di-di-dah', exampleWord: 'Victor',
    memoryTip: 'V is ···− : three dots then a dash — S (···) with a dash appended.',
  },
  {
    key: 'W', type: 'letter', readAs: 'di-dah-dah', exampleWord: 'Whiskey',
    memoryTip: 'W is ·−− : a dot then two dashes, the reverse of G (−−·).',
  },
  {
    key: 'X', type: 'letter', readAs: 'dah-di-di-dah', exampleWord: 'X-ray',
    memoryTip: 'X is −··− : dash-dot-dot-dash, a palindrome.',
  },
  {
    key: 'Y', type: 'letter', readAs: 'dah-di-dah-dah', exampleWord: 'Yankee',
    memoryTip: 'Y is −·−− : dash-dot-dash-dash. Reverse it and you get Q (−−·−).',
  },
  {
    key: 'Z', type: 'letter', readAs: 'dah-dah-di-dit', exampleWord: 'Zulu',
    memoryTip: 'Z is −−·· : two dashes then two dots, the mirror of 7 (−−···) in shape.',
  },
  {
    key: '0', type: 'number', readAs: 'dah-dah-dah-dah-dah', exampleWord: '2026',
    memoryTip: 'Zero is −−−−− : five dashes, the longest single-character code in Morse.',
  },
  {
    key: '1', type: 'number', readAs: 'di-dah-dah-dah-dah', exampleWord: '143',
    memoryTip: 'One is ·−−−− : a dot followed by four dashes.',
  },
  {
    key: '2', type: 'number', readAs: 'di-di-dah-dah-dah', exampleWord: '2026',
    memoryTip: 'Two is ··−−− : two dots then three dashes.',
  },
  {
    key: '3', type: 'number', readAs: 'di-di-di-dah-dah', exampleWord: '33',
    memoryTip: 'Three is ···−− : three dots then two dashes.',
  },
  {
    key: '4', type: 'number', readAs: 'di-di-di-di-dah', exampleWord: '143',
    memoryTip: 'Four is ····− : four dots then a dash, the mirror of 9 (−−−−·).',
  },
  {
    key: '5', type: 'number', readAs: 'di-di-di-di-dit', exampleWord: '555',
    memoryTip: 'Five is ····· : five dots — the exact midpoint of the digit series.',
  },
  {
    key: '6', type: 'number', readAs: 'dah-di-di-di-dit', exampleWord: '2026',
    memoryTip: 'Six is −···· : a dash then five dots, the mirror of 1 (.−−−−).',
  },
  {
    key: '7', type: 'number', readAs: 'dah-dah-di-di-dit', exampleWord: '747',
    memoryTip: 'Seven is −−··· : two dashes then three dots, the mirror of 2 (··−−−).',
  },
  {
    key: '8', type: 'number', readAs: 'dah-dah-dah-di-dit', exampleWord: '88',
    memoryTip: 'Eight is −−−·· : three dashes then two dots, the mirror of 3 (···−−).',
  },
  {
    key: '9', type: 'number', readAs: 'dah-dah-dah-dah-dit', exampleWord: '9',
    memoryTip: 'Nine is −−−−· : four dashes then a dot, the mirror of 4 (····−).',
  },
];

export const MORSE_UNITS: MorseUnit[] = SEEDS.map(seed => {
  const morse = CHAR_TO_MORSE[seed.key];
  if (!morse) {
    throw new Error(`MORSE_UNITS: no Morse code defined for "${seed.key}"`);
  }
  return {
    ...seed,
    display: seed.key,
    morse,
  };
});

export function getUnitByKey(key: string): MorseUnit {
  const unit = MORSE_UNITS.find(u => u.key.toLowerCase() === key.toLowerCase());
  if (!unit) {
    throw new Error(`getUnitByKey: unknown unit "${key}"`);
  }
  return unit;
}
