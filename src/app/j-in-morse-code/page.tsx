import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('J');

export const metadata = buildMetadata({
  path: '/j-in-morse-code',
  title: 'J in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter J is ·−−− in Morse code, read as "di-dah-dah-dah" — 4 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'J in morse code, morse code J, j morse code, how to say J in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
