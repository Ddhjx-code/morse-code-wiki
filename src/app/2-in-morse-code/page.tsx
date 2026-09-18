import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('2');

export const metadata = buildMetadata({
  path: '/2-in-morse-code',
  title: '2 in Morse Code - Pattern, Sound & Examples',
  description:
    'Digit 2 is ··−−− in Morse code, read as "di-di-dah-dah-dah" — 5 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    '2 in morse code, morse code 2, 2 morse code, how to say 2 in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
