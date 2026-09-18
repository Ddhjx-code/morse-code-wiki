import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('L');

export const metadata = buildMetadata({
  path: '/l-in-morse-code',
  title: 'L in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter L is ·−·· in Morse code, read as "di-dah-di-dit" — 4 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'L in morse code, morse code L, l morse code, how to say L in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
