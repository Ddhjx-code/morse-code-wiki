import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('Y');

export const metadata = buildMetadata({
  path: '/y-in-morse-code',
  title: 'Y in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter Y is −·−− in Morse code, read as "dah-di-dah-dah" — 4 signal elements. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'Y in morse code, morse code Y, y morse code, how to say Y in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
