import Link from 'next/link';
import AdBanner from '@/components/AdBanner';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  path: '/morse-code-questions-and-answers',
  title: 'Morse Code Questions and Answers - Common Exam Questions',
  description:
    'Answers to the Morse code questions that come up in exams and homework: the standard word for measuring transmission speed, who invented Morse code, when it was standardised, and more.',
  keywords:
    'morse code questions and answers, morse code quiz, morse code exam questions, standard word morse code transmission speed, paris morse code, morse code trivia',
});

interface Faq {
  question: string;
  answer: string;
}

const FAQS: Faq[] = [
  {
    question:
      'Which word is used in Morse code to represent the standard word length when measuring transmission speed?',
    answer:
      'PARIS. The speed of a Morse transmission is measured in words per minute, and the "word" used for calibration is PARIS — because it is exactly 50 Morse time units long. A perfect operator sending at 20 WPM transmits the word PARIS twenty times in one minute. The units break down as 10 dots (10 units), 8 dashes (24 units), 12 within-character gaps (12 units), and 4 between-character gaps (4 units).',
  },
  {
    question: 'What is the Morse code for SOS?',
    answer:
      'SOS is three dots, three dashes, three dots: ··· −−− ···. It is sent as one continuous signal with no gaps between the three letters, which is exactly why it was chosen — the pattern is unmistakable and hard to misread.',
  },
  {
    question: 'Does SOS stand for anything?',
    answer:
      'No. It is not an abbreviation — not "Save Our Souls" or "Save Our Ship". The letters were selected purely because S (···) and O (−−−) are simple, distinctive, and easy to send and recognise under stress.',
  },
  {
    question: 'Who invented Morse code?',
    answer:
      'Samuel F. B. Morse and Alfred Vail developed the code in the late 1830s and early 1840s for the electric telegraph. Vail is generally credited with the design of the code itself, including the principle that common letters get shorter codes. The original version is known today as American Morse Code.',
  },
  {
    question: 'When was International Morse Code standardised?',
    answer:
      'The international variant was standardised in 1865, adopted for European telegraphy. It is now maintained by the ITU as recommendation ITU-R M.1677, which is why it is often called ITU Morse.',
  },
  {
    question: 'Which letter has the shortest Morse code?',
    answer:
      'E, which is a single dot (·). T is the shortest single dash (−). These two letters are the most common in English, so they were given the shortest possible codes. Every other letter takes two to four elements.',
  },
  {
    question: 'Which is the longest Morse code character?',
    answer:
      'The digit 0, which is five dashes (−−−−−). Among letters, the maximum is four elements, and J (·−−−) is the longest one that begins with a single dot.',
  },
  {
    question: 'What is the difference between International and American Morse Code?',
    answer:
      'They are two different codes, not dialects. American Morse uses dashes of two different lengths and puts internal gaps inside characters like C, O, R, Y and Z. International Morse standardised every dash to the same length and removed all internal gaps, making it practical to send by radio. C is ".. ." in American Morse but "−·−·" in International.',
  },
  {
    question: 'How is Morse code speed measured?',
    answer:
      'In words per minute (WPM), calibrated against the standard word PARIS. Hand-sent Morse is typically 15-25 WPM; machine-sent Morse can exceed 60 WPM. Skilled operators copy in their head rather than writing each character letter by letter.',
  },
  {
    question: 'What are "dit" and "dah"?',
    answer:
      'They are the spoken names for the two signal elements. A dot is said as "dit" and a dash as "dah". Saying the code aloud — "dah-di-di-dit" for B — is how operators memorise and rehearse the patterns.',
  },
  {
    question: 'What is a prosign?',
    answer:
      'A procedural signal — a Morse pattern that carries an instruction rather than a letter. Prosigns are written with an overline because they are sent as a single character. Common examples are AR (end of message, ·−·−·) and SK (end of contact, ···−·−).',
  },
  {
    question: 'Is Morse code still used today?',
    answer:
      'Yes, though rarely for routine communication. It survives in aviation navigation beacons, amateur radio, emergency signalling practice, and military training. Its advantage is that it gets through when voice does not — a weak or noisy signal can still be read as dots and dashes.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function MorseCodeQuestionsPage() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Morse Code Questions and Answers
      </h1>
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
        Straight answers to the questions that come up most often in class, in quizzes, and in
        homework — including the standard word used to measure transmission speed.
      </p>

      <section className="mb-12">
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <article
              key={faq.question}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6"
            >
              <h2 className="text-lg font-semibold text-white mb-3 flex gap-3">
                <span className="text-blue-400 shrink-0">{index + 1}.</span>
                <span>{faq.question}</span>
              </h2>
              <p className="text-gray-300 leading-relaxed pl-7">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-3">Question</th>
                <th className="px-4 py-3">Answer</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ['Standard word for speed measurement', 'PARIS (50 time units)'],
                ['SOS pattern', '··· −−− ···'],
                ['Invented by', 'Samuel Morse & Alfred Vail, early 1840s'],
                ['International standard', 'ITU-R M.1677, standardised 1865'],
                ['Shortest character', 'E = · (dot)'],
                ['Longest character', '0 = −−−−− (five dashes)'],
                ['Speed unit', 'Words per minute, calibrated on PARIS'],
                ['Dot and dash spoken as', 'dit and dah'],
              ].map(([q, a]) => (
                <tr key={q} className="border-t border-gray-800">
                  <td className="px-4 py-3 text-gray-400">{q}</td>
                  <td className="px-4 py-3 font-medium text-white">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/learn"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Learn Morse Code →
          </Link>
          <Link
            href="/international-morse-code-chart"
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            International Chart →
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Try the Translator →
          </Link>
        </div>
      </section>

      <AdBanner />
    </div>
  );
}
