import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('B');

export const metadata = buildMetadata({
  path: '/b-in-morse-code',
  title: 'B in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter B is −··· in Morse code, read as "dah-di-di-dit" — 4 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'B in morse code, morse code B, b morse code, how to say B in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
