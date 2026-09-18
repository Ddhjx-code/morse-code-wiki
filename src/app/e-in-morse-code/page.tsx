import MorseUnitPage from '@/components/MorseUnitPage';
import { buildMetadata } from '@/lib/metadata';
import { getUnitByKey } from '@/data/morse-units';

const unit = getUnitByKey('E');

export const metadata = buildMetadata({
  path: '/e-in-morse-code',
  title: 'E in Morse Code - Pattern, Sound & Examples',
  description:
    'Letter E is · in Morse code, read as "dit" — 1 signal element. Hear the sound, see it in a word, and learn a memory tip.',
  keywords:
    'E in morse code, morse code E, e morse code, how to say E in morse code, morse code alphabet',
});

export default function Page() {
  return <MorseUnitPage unit={unit} />;
}
