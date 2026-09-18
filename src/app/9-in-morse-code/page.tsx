import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('9');

export const metadata = buildMetadata({
  path: '/9-in-morse-code',
  title: '9 in Morse Code - Pattern, Sound & Examples',
  description:
    'Digit 9 is −−−−· in Morse code, read as "dah-dah-dah-dah-dit" — 5 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    '9 in morse code, morse code 9, 9 morse code, how to say 9 in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
