import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('A');

export const metadata = buildMetadata({
  path: '/a-in-morse-code',
  title: 'A in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter A is ·− in Morse code, read as "di-dah" — 2 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'A in morse code, morse code A, a morse code, how to say A in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
