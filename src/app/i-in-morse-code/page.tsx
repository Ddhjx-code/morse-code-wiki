import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('I');

export const metadata = buildMetadata({
  path: '/i-in-morse-code',
  title: 'I in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter I is ·· in Morse code, read as "di-dit" — 2 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'I in morse code, morse code I, i morse code, how to say I in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
