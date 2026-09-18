import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('O');

export const metadata = buildMetadata({
  path: '/o-in-morse-code',
  title: 'O in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter O is −−− in Morse code, read as "dah-dah-dah" — 3 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'O in morse code, morse code O, o morse code, how to say O in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
