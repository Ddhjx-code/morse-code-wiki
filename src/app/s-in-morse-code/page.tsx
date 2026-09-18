import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('S');

export const metadata = buildMetadata({
  path: '/s-in-morse-code',
  title: 'S in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter S is ··· in Morse code, read as "di-di-dit" — 3 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'S in morse code, morse code S, s morse code, how to say S in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
