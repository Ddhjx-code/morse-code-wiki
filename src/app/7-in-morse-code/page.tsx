import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('7');

export const metadata = buildMetadata({
  path: '/7-in-morse-code',
  title: '7 in Morse Code - Pattern, Sound & Examples',
  description:
    'Digit 7 is −−··· in Morse code, read as "dah-dah-di-di-dit" — 5 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    '7 in morse code, morse code 7, 7 morse code, how to say 7 in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
