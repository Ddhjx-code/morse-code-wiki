import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('U');

export const metadata = buildMetadata({
  path: '/u-in-morse-code',
  title: 'U in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter U is ··− in Morse code, read as "di-di-dah" — 3 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'U in morse code, morse code U, u morse code, how to say U in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
