import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('F');

export const metadata = buildMetadata({
  path: '/f-in-morse-code',
  title: 'F in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter F is ··−· in Morse code, read as "di-di-dah-dit" — 4 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'F in morse code, morse code F, f morse code, how to say F in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
