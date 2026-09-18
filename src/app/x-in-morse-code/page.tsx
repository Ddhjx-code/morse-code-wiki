import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('X');

export const metadata = buildMetadata({
  path: '/x-in-morse-code',
  title: 'X in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter X is −··− in Morse code, read as "dah-di-di-dah" — 4 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'X in morse code, morse code X, x morse code, how to say X in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
