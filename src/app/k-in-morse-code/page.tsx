import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('K');

export const metadata = buildMetadata({
  path: '/k-in-morse-code',
  title: 'K in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter K is −·− in Morse code, read as "dah-di-dah" — 3 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'K in morse code, morse code K, k morse code, how to say K in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
