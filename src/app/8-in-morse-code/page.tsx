import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('8');

export const metadata = buildMetadata({
  path: '/8-in-morse-code',
  title: '8 in Morse Code - Pattern, Sound & Examples',
  description:
    'Digit 8 is −−−·· in Morse code, read as "dah-dah-dah-di-dit" — 5 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    '8 in morse code, morse code 8, 8 morse code, how to say 8 in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
