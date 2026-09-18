import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('C');

export const metadata = buildMetadata({
  path: '/c-in-morse-code',
  title: 'C in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter C is −·−· in Morse code, read as "dah-di-dah-dit" — 4 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'C in morse code, morse code C, c morse code, how to say C in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
