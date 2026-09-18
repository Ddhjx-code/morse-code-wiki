import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('Z');

export const metadata = buildMetadata({
  path: '/z-in-morse-code',
  title: 'Z in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter Z is −−·· in Morse code, read as "dah-dah-di-dit" — 4 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'Z in morse code, morse code Z, z morse code, how to say Z in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
