import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('T');

export const metadata = buildMetadata({
  path: '/t-in-morse-code',
  title: 'T in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter T is − in Morse code, read as "dah" — 1 signal element. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'T in morse code, morse code T, t morse code, how to say T in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
