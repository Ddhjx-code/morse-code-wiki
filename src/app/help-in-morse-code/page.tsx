import MorseWordPage from '@/components/MorseWordPage';
import { buildMetadata } from '@/lib/metadata';
import { getMorseWord } from '@/data/morse-words';

const word = getMorseWord('help');

export const metadata = buildMetadata({
  path: '/help-in-morse-code',
  title: 'Help in Morse Code - Signal Pattern & Audio',
  description:
    'HELP in Morse code is ···· · ·−·· ·−−·. See the letter-by-letter breakdown, hear the audio, and learn how it is used.',
  keywords:
    'help in morse code, morse code help, how to say help in morse code, morse code for help, help morse code signal',
});

export default function Page() {
  return <MorseWordPage word={word} />;
}
