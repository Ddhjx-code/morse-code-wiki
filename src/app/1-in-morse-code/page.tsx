import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('1');

export const metadata = buildMetadata({
  path: '/1-in-morse-code',
  title: '1 in Morse Code - Pattern, Sound & Examples',
  description:
    'Digit 1 is ·−−−− in Morse code, read as "di-dah-dah-dah-dah" — 5 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    '1 in morse code, morse code 1, 1 morse code, how to say 1 in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
