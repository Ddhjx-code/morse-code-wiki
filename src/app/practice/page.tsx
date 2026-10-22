import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import PracticeGame from './PracticeGame';
import AdBanner from '@/components/AdBanner';
import RelatedPages from '@/components/RelatedPages';
import { CHAR_TO_MORSE } from '@/lib/morse';

export const metadata: Metadata = {
  alternates: { canonical: '/practice' },
  title: 'Morse Code Practice - Learn by Listening',
  description:
    'Practice Morse code online for free. Listen to a character at a fixed 18 WPM and type what you hear, across three tiers: 7 letters, 14 letters, then the full alphabet with numbers. Your accuracy is scored as you go.',
  keywords:
    'morse code practice, learn morse code, morse code game, morse code practice online, morse code training, morse code quiz',
};

const BEGINNER = ['E', 'T', 'A', 'I', 'N', 'O', 'S'];
const INTERMEDIATE_ADD = ['H', 'R', 'D', 'L', 'U', 'C', 'M'];

function Code({ children }: { children: ReactNode }) {
  return <span className="font-mono text-gray-300">{children}</span>;
}

function LetterRow({ items }: { items: string[] }) {
  return (
    <span className="inline-flex flex-wrap gap-x-4 gap-y-2">
      {items.map((c) => (
        <span key={c} className="text-sm">
          <span className="font-bold text-white">{c}</span>{' '}
          <Code>{CHAR_TO_MORSE[c]}</Code>
        </span>
      ))}
    </span>
  );
}

export default function PracticePage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Morse Code Practice
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Learn Morse code by ear — the most effective method. Listen to the audio signal,
        then type the letter you hear. Start with common letters and progress to the full alphabet.
      </p>

      <PracticeGame />

      {/* How the drill works */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-4">How This Drill Works</h2>
        <p className="text-gray-400 mb-4">
          Written out so nothing about it is a surprise mid-run. These are the settings the
          page actually uses, not a description of a general training method.
        </p>
        <ul className="space-y-3 text-gray-400">
          <li>
            <strong className="text-white">One character at a time, sent at a fixed 18 WPM on a 700 Hz tone.</strong>{' '}
            There is no speed or pitch control on this page. At 18 WPM a dot runs about 67
            milliseconds and a dash about 200, which is a comfortable but not slow sending
            rate — see the section below on what to use if that is wrong for you.
          </li>
          <li>
            <strong className="text-white">You replay it as often as you like.</strong> The large
            circle is the replay button; it is disabled only while the character is sounding.
            Replaying is part of training, not cheating — the goal is to bind the rhythm to the
            letter, and that takes repetitions.
          </li>
          <li>
            <strong className="text-white">The answer box takes a single character.</strong> It is
            capped at one keystroke, so typing a two-letter word is impossible by construction.
            Enter submits, and the next character starts automatically about a second later.
          </li>
          <li>
            <strong className="text-white">A wrong answer shows you what it actually was,</strong>{' '}
            including its dot-dash pattern, so the correction is immediate rather than deferred.
          </li>
          <li>
            <strong className="text-white">The score is for this session only.</strong>{' '}
            <Code>3/7 (43%)</Code> counts correct answers over attempts since you pressed Start.
            Nothing is stored in your browser and there is no account: reloading, or starting a
            new run, resets it to zero. Treat it as a live readout rather than a record.
          </li>
        </ul>
      </section>

      {/* Tiers */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Three Tiers And Their Exact Letters</h2>
        <p className="text-gray-400 mb-6">
          The sets are hard-coded, so you can plan around them instead of guessing what will
          come next. Advanced adds the rest of the{' '}
          <Link href="/alphabet" className="text-blue-400 hover:text-blue-300">alphabet</Link>{' '}
          plus every{' '}
          <Link href="/numbers" className="text-blue-400 hover:text-blue-300">digit</Link>.
        </p>
        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Beginner — 7 letters</h3>
            <p className="text-sm text-gray-400 mb-3">
              {BEGINNER.join(' ')} — the drill labels these as the seven most common letters, and
              structurally they are the shortest shapes in the code: E and T are the only one-unit
              characters that exist, and A, I and N are three of the four two-unit characters. The
              fourth, M, waits in the next tier, along with its longer mirror O.
            </p>
            <LetterRow items={BEGINNER} />
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Intermediate — 14 letters</h3>
            <p className="text-sm text-gray-400 mb-3">
              The first seven plus {INTERMEDIATE_ADD.join(' ')}. This is where the four-unit
              characters arrive, and where most people discover that counting dots is no longer
              fast enough.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Advanced — {'36'} characters</h3>
            <p className="text-sm text-gray-400">
              All 26 letters and all 10 digits. Numbers are not the hard part of this tier; the
              rare letters are, and so is sustaining accuracy once the set is large enough that
              near-miss patterns start appearing back to back.
            </p>
          </div>
        </div>
      </section>

      {/* Confusions derived from the table */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">What You Will Confuse, Read Off The Code Itself</h2>
        <p className="text-gray-400 mb-6">
          Morse errors are not random. They cluster in three structural places, and you can see
          all of them by looking at the pattern table rather than waiting to make the mistakes.
        </p>

        <h3 className="text-lg font-semibold text-white mb-2">1. The truncated beginning</h3>
        <p className="text-gray-400 mb-3">
          The letter <strong className="text-white">E is a single dot, and it is the opening of
          17 other characters</strong> in this set — 12 letters and 5 digits start
          with a dot. If you answer the moment you hear one dot, you are guessing across
          {'17'} possibilities.
        </p>
        <p className="text-gray-400 mb-6">
          The same trap runs down the tree: <Code>I</Code> is the prefix of <Code>S</Code> and{' '}
          <Code>U</Code> and <Code>V</Code>; <Code>M</Code> is the prefix of <Code>O</Code>,{' '}
          <Code>Q</Code> and <Code>Z</Code>; <Code>T</Code> is the prefix of <Code>X</Code>,{' '}
          <Code>Y</Code> and <Code>Z</Code>. The fix is a habit, not a drill: <strong
          className="text-white">do not commit until you hear the letter gap.</strong> At 18 WPM
          that gap is about 200 ms — roughly three dots of silence. Waiting for it costs almost
          nothing and removes the entire class of truncated-pattern errors.
        </p>

        <h3 className="text-lg font-semibold text-white mb-2">2. The mirrored rhythm</h3>
        <p className="text-gray-400 mb-6">
          Some characters are each other&apos;s pattern read backwards, so a single early lapse in
          attention swaps them: <strong className="text-white">A↔N, B↔V, D↔U, F↔L, G↔W and Q↔Y</strong>. The digits do the same
          thing — <strong className="text-white">1↔9, 2↔8, 3↔7 and 4↔6</strong> — so a listener who mishears the first element of one of these has no way to
          recover it without the rest of the character. These pairs are worth practising side by side; the{' '}
          <Link href="/chart" className="text-blue-400 hover:text-blue-300">chart page</Link> shows the
          binary tree that makes the inversion visible rather than something you have to remember.
        </p>

        <h3 className="text-lg font-semibold text-white mb-2">3. Counting instead of hearing</h3>
        <p className="text-gray-400">
          Numbers are the one block you can cheat with, because they are perfectly regular: five
          ascending dot counts then five descending ones, with 5 as all dots and 0 as all dashes.
          Letters have no such rule. If you are counting the digits of a letter at 18 WPM you
          will be one character behind for the rest of the transmission, which is how a clean run
          collapses two letters later.
        </p>
      </section>

      {/* Speed guidance, honest */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">If 18 WPM Is The Wrong Speed For You</h2>
        <p className="text-gray-400 mb-4">
          This drill sends at one fixed rate, and that is a real limitation worth stating plainly.
          Two options on this site do give you control:
        </p>
        <ul className="space-y-3 text-gray-400 mb-6">
          <li>
            <strong className="text-white">
              <Link href="/audio" className="text-blue-400 hover:text-blue-300">The audio page</Link>
            </strong>{' '}
            has a speed slider from 5 to 35 WPM and a tone slider from 400 to 1000 Hz, so you can
            run a word list slowly and high-pitched, or fast and low. It plays anything you type,
            not random characters.
          </li>
          <li>
            The play buttons on the reference pages send at the library default of 20 WPM, which is
            a little faster than the drill, not slower.
          </li>
        </ul>
        <p className="text-gray-400 mb-4">
          The standard way to train is the reverse of what most beginners do: keep the characters
          themselves at the speed you eventually want to copy, and stretch only the silence
          <em>between</em> them until you can keep up. That is the Farnsworth method, and it is why
          the tip cards below tell you to learn the rhythm rather than count it.
        </p>
        <p className="text-gray-400">
          <strong className="text-white">This page cannot do that for you.</strong> Farnsworth needs
          two independent controls — character speed and word spacing — and this drill has neither,
          nor does the audio page&apos;s single slider. What you can do here is stay at 18 WPM and
          move down a tier instead: accuracy on the seven beginner letters at real speed teaches
          more than perfect scores at a crawl you will have to abandon later.
        </p>
      </section>

      {/* Learning Tips */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-6">Tips for Learning Morse Code</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">🎧 Learn by Sound</h3>
            <p className="text-sm text-gray-400">
              Don&apos;t count dots and dashes visually. Learn to recognize each letter by its unique
              rhythm and sound, just like you recognize spoken words.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">📅 Practice Daily</h3>
            <p className="text-sm text-gray-400">
              15 minutes daily is far more effective than 2 hours once a week.
              Consistency builds muscle memory for the sound patterns.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">🎯 Start with E and T</h3>
            <p className="text-sm text-gray-400">
              Begin with the simplest letters (E = · , T = −) then add one new letter at a time.
              Only add more when you hit 90% accuracy.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">🔊 Replay Without Penalty</h3>
            <p className="text-sm text-gray-400">
              The score counts answers, not replays, so hearing a character four times costs you
              nothing on the readout. The skill being built is recognition, and recognition is
              built by repetition — the only thing you lose by replaying is the chance to guess.
            </p>
          </div>
        </div>
      </section>
      <RelatedPages currentPath="/practice" />
      <AdBanner />
    </div>
  );
}
