import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('D');

export const metadata = buildMetadata({
  path: '/d-in-morse-code',
  title: 'D in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter D is −·· in Morse code, read as "dah-di-dit" — 3 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'D in morse code, morse code D, d morse code, how to say D in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
