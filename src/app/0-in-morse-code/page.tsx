import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('0');

export const metadata = buildMetadata({
  path: '/0-in-morse-code',
  title: '0 in Morse Code - Pattern, Sound & Examples',
  description:
    'Digit 0 is −−−−− in Morse code, read as "dah-dah-dah-dah-dah" — 5 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    '0 in morse code, morse code 0, 0 morse code, how to say 0 in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
