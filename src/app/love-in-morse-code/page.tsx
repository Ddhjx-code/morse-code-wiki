import MorseWordPage from '@/components/MorseWordPage';
import { buildMetadata } from '@/lib/metadata';
import { getMorseWord } from '@/data/morse-words';

const word = getMorseWord('love');

export const metadata = buildMetadata({
  path: '/love-in-morse-code',
  title: 'Love in Morse Code - Pattern, Sound & Symbolism',
  description:
    'LOVE in Morse code is ·−·· −−− ···− ·. See the letter-by-letter breakdown, hear the audio, and learn how it is used.',
  keywords:
    'love in morse code, morse code love, how to say love in morse code, morse code for love, love morse code bracelet',
});

export default function Page() {
  return <MorseWordPage word={word} />;
}
