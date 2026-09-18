import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('R');

export const metadata = buildMetadata({
  path: '/r-in-morse-code',
  title: 'R in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter R is ·−· in Morse code, read as "di-dah-dit" — 3 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'R in morse code, morse code R, r morse code, how to say R in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
