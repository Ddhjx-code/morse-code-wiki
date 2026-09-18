import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('4');

export const metadata = buildMetadata({
  path: '/4-in-morse-code',
  title: '4 in Morse Code - Pattern, Sound & Examples',
  description:
    'Digit 4 is ····− in Morse code, read as "di-di-di-di-dah" — 5 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    '4 in morse code, morse code 4, 4 morse code, how to say 4 in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
