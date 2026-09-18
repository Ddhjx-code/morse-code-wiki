import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('M');

export const metadata = buildMetadata({
  path: '/m-in-morse-code',
  title: 'M in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter M is −− in Morse code, read as "dah-dah" — 2 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'M in morse code, morse code M, m morse code, how to say M in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
