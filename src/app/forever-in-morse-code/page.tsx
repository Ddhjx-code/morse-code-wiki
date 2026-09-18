import MorseWordPage from '@/components/MorseWordPage';
import { buildMetadata } from '@/lib/metadata';
import { getMorseWord } from '@/data/morse-words';

const word = getMorseWord('forever');

export const metadata = buildMetadata({
  path: '/forever-in-morse-code',
  title: 'Forever in Morse Code - Pattern, Sound & Tattoo Ideas',
  description:
    'FOREVER in Morse code is ··−· −−− ·−· · ···− · ·−·. See the letter-by-letter breakdown, hear the audio, and learn how it is used.',
  keywords:
    'forever in morse code, morse code forever, how to say forever in morse code, forever morse code bracelet, morse code tattoo',
});

export default function Page() {
  return <MorseWordPage word={word} />;
}
