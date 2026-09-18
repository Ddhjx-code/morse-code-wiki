import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('Q');

export const metadata = buildMetadata({
  path: '/q-in-morse-code',
  title: 'Q in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter Q is −−·− in Morse code, read as "dah-dah-di-dah" — 4 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'Q in morse code, morse code Q, q morse code, how to say Q in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
