import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('H');

export const metadata = buildMetadata({
  path: '/h-in-morse-code',
  title: 'H in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter H is ···· in Morse code, read as "di-di-di-dit" — 4 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'H in morse code, morse code H, h morse code, how to say H in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
