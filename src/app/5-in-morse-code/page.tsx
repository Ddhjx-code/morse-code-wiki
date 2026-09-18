import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('5');

export const metadata = buildMetadata({
  path: '/5-in-morse-code',
  title: '5 in Morse Code - Pattern, Sound & Examples',
  description:
    'Digit 5 is ····· in Morse code, read as "di-di-di-di-dit" — 5 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    '5 in morse code, morse code 5, 5 morse code, how to say 5 in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
