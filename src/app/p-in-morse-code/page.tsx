import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('P');

export const metadata = buildMetadata({
  path: '/p-in-morse-code',
  title: 'P in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter P is ·−−· in Morse code, read as "di-dah-dah-dit" — 4 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'P in morse code, morse code P, p morse code, how to say P in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
