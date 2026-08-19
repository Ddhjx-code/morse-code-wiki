// International Morse Code mapping (ITU standard)
export const CHAR_TO_MORSE: Record<string, string> = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
  'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
  'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
  'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
  'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
  'Z': '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
  '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
  ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
  '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
};

export const MORSE_TO_CHAR: Record<string, string> = Object.fromEntries(
  Object.entries(CHAR_TO_MORSE).map(([k, v]) => [v, k])
);

/**
 * Convert text to Morse code
 * Letters separated by ' ', words separated by ' / '
 */
export function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split(' ')
    .map(word =>
      word
        .split('')
        .map(char => CHAR_TO_MORSE[char] || '')
        .filter(Boolean)
        .join(' ')
    )
    .join(' / ');
}

/**
 * Convert Morse code to text
 * Expects letters separated by ' ', words separated by ' / '
 */
export function morseToText(morse: string): string {
  return morse
    .split(' / ')
    .map(word =>
      word
        .split(' ')
        .map(code => MORSE_TO_CHAR[code] || '')
        .join('')
    )
    .join(' ');
}

/**
 * Generate audio timing for Morse code playback
 * Returns array of {type: 'dot'|'dash'|'gap'|'letterGap'|'wordGap', duration: ms}
 */
export interface MorseSignal {
  type: 'dot' | 'dash' | 'gap' | 'letterGap' | 'wordGap';
  duration: number;
}

export function morseToSignals(morse: string, wpm: number = 20): MorseSignal[] {
  // At standard timing: 1 unit = 1200/wpm ms
  const unit = 1200 / wpm;
  const signals: MorseSignal[] = [];

  const words = morse.split(' / ');
  for (let wi = 0; wi < words.length; wi++) {
    const letters = words[wi].split(' ');
    for (let li = 0; li < letters.length; li++) {
      const chars = letters[li].split('');
      for (let ci = 0; ci < chars.length; ci++) {
        if (chars[ci] === '.') {
          signals.push({ type: 'dot', duration: unit });
        } else if (chars[ci] === '-') {
          signals.push({ type: 'dash', duration: unit * 3 });
        }
        // Intra-character gap (1 unit)
        if (ci < chars.length - 1) {
          signals.push({ type: 'gap', duration: unit });
        }
      }
      // Inter-letter gap (3 units)
      if (li < letters.length - 1) {
        signals.push({ type: 'letterGap', duration: unit * 3 });
      }
    }
    // Inter-word gap (7 units)
    if (wi < words.length - 1) {
      signals.push({ type: 'wordGap', duration: unit * 7 });
    }
  }

  return signals;
}

/**
 * Play Morse code audio using Web Audio API
 */
export function playMorseAudio(
  morse: string,
  options: { wpm?: number; frequency?: number; onEnd?: () => void } = {}
): { stop: () => void } {
  const { wpm = 20, frequency = 700, onEnd } = options;

  if (typeof window === 'undefined') return { stop: () => {} };

  const ctx = new AudioContext();
  const signals = morseToSignals(morse, wpm);
  let currentTime = ctx.currentTime + 0.05;
  let stopped = false;

  for (const signal of signals) {
    if (signal.type === 'dot' || signal.type === 'dash') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = frequency;
      osc.type = 'sine';

      // Smooth envelope to avoid clicks
      gain.gain.setValueAtTime(0, currentTime);
      gain.gain.linearRampToValueAtTime(0.5, currentTime + 0.005);
      gain.gain.setValueAtTime(0.5, currentTime + signal.duration / 1000 - 0.005);
      gain.gain.linearRampToValueAtTime(0, currentTime + signal.duration / 1000);

      osc.start(currentTime);
      osc.stop(currentTime + signal.duration / 1000);
    }
    currentTime += signal.duration / 1000;
  }

  // Call onEnd after all signals finish
  const totalDuration = (currentTime - ctx.currentTime) * 1000;
  const timeout = setTimeout(() => {
    if (!stopped && onEnd) onEnd();
    ctx.close();
  }, totalDuration + 100);

  return {
    stop: () => {
      stopped = true;
      clearTimeout(timeout);
      ctx.close();
    },
  };
}
