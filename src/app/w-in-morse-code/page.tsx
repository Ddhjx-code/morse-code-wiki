import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('W');

export const metadata = buildMetadata({
  path: '/w-in-morse-code',
  title: 'W in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter W is ·−− in Morse code, read as "di-dah-dah" — 3 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'W in morse code, morse code W, w morse code, how to say W in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
