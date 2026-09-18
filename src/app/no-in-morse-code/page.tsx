import MorseWordPage from '@/components/MorseWordPage';
import { buildMetadata } from '@/lib/metadata';
import { getMorseWord } from '@/data/morse-words';

const word = getMorseWord('no');

export const metadata = buildMetadata({
  path: '/no-in-morse-code',
  title: 'No in Morse Code - Pattern, Sound & Examples',
  description:
    'NO in Morse code is −· −−−. See the letter-by-letter breakdown, hear the audio, and learn how it is used.',
  keywords:
    'no in morse code, morse code no, how to say no in morse code, morse code for no, no morse code signal',
});

export default function Page() {
  return <MorseWordPage word={word} />;
}
