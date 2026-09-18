import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('V');

export const metadata = buildMetadata({
  path: '/v-in-morse-code',
  title: 'V in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter V is ···− in Morse code, read as "di-di-di-dah" — 4 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'V in morse code, morse code V, v morse code, how to say V in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
