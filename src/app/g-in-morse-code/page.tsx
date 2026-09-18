import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('G');

export const metadata = buildMetadata({
  path: '/g-in-morse-code',
  title: 'G in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter G is −−· in Morse code, read as "dah-dah-dit" — 3 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'G in morse code, morse code G, g morse code, how to say G in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
