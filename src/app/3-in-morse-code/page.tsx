import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('3');

export const metadata = buildMetadata({
  path: '/3-in-morse-code',
  title: '3 in Morse Code - Pattern, Sound & Examples',
  description:
    'Digit 3 is ···−− in Morse code, read as "di-di-di-dah-dah" — 5 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    '3 in morse code, morse code 3, 3 morse code, how to say 3 in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
