import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('6');

export const metadata = buildMetadata({
  path: '/6-in-morse-code',
  title: '6 in Morse Code - Pattern, Sound & Examples',
  description:
    'Digit 6 is −···· in Morse code, read as "dah-di-di-di-dit" — 5 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    '6 in morse code, morse code 6, 6 morse code, how to say 6 in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
