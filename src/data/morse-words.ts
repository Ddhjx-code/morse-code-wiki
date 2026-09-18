export interface MorseWord {
  key: string;
  display: string;
  summary: string;
  origin: string;
  uses: string[];
  relatedKeys: string[];
}

export const MORSE_WORDS: MorseWord[] = [
  {
    key: 'love',
    display: 'LOVE',
    summary:
      'LOVE is one of the most requested Morse translations — usually for jewellery, tattoos, or a message someone wants to send by hand.',
    origin:
      'In Morse, LOVE breaks down into four letters of very different lengths, which is why engraved versions look uneven: L (·−··), O (−−−), V (···−), E (·).',
    uses: [
      'Engraved on rings, necklaces and bracelets, often paired with a date',
      'Tattoo designs in dot-and-dash form, either along a forearm or around a finger',
      'Hand-sent messages by flashlight or tapping between two people',
      'Valentine and anniversary cards, where the code doubles as the decoration',
    ],
    relatedKeys: ['forever', 'help', 'no'],
  },
  {
    key: 'forever',
    display: 'FOREVER',
    summary:
      'FOREVER is paired with LOVE more often than any other Morse phrase — the two together are the standard pairing for matching jewellery.',
    origin:
      'FOREVER is seven characters, making it a long engraving. The repeating E (·) and R (·−·) give it a distinctive rhythm when sent aloud.',
    uses: [
      'Matching his-and-hers bracelets, where one carries LOVE and the other FOREVER',
      'Long-form tattoo bands, usually wrapped around a wrist or upper arm',
      'Anniversary and memorial pieces',
    ],
    relatedKeys: ['love', 'help', 'no'],
  },
  {
    key: 'no',
    display: 'NO',
    summary:
      'NO is the shortest negation in Morse — just two letters, which makes it quick to tap out or signal.',
    origin:
      'NO is N (−·) followed by O (−−−). Both letters start with a dash, so the whole word has a heavy, deliberate feel when sent.',
    uses: [
      'Quick replies in Morse practice conversations',
      'Puzzle and escape-room design, where NO often marks a dead end',
      'Two-letter pendant designs',
    ],
    relatedKeys: ['help', 'love', 'forever'],
  },
  {
    key: 'help',
    display: 'HELP',
    summary:
      'HELP sits between routine messages and genuine emergencies — it is the word people look up when they want to signal that they need assistance.',
    origin:
      'HELP is H (····), E (·), L (·−··), P (·−−·). Three of the four letters begin with a dot, so it opens with a rapid burst of taps.',
    uses: [
      'Wilderness and hiking reference — knowing how to signal for help without a phone',
      'Emergency-preparedness lists alongside SOS',
      'Flashlight and mirror signalling practice',
    ],
    relatedKeys: ['sos', 'no', 'love'],
  },
];

export function getMorseWord(key: string): MorseWord {
  const word = MORSE_WORDS.find(w => w.key === key);
  if (!word) {
    throw new Error(`getMorseWord: unknown word "${key}"`);
  }
  return word;
}
