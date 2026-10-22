import type { MetadataRoute } from 'next';
import { MORSE_UNITS } from '@/data/morse-units';
import { MORSE_WORDS } from '@/data/morse-words';
import { LAST_UPDATED, SITE_START } from '@/data/last-updated';

const BASE_URL = 'https://morsecodenow.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const at = (slug: string) =>
    new Date(LAST_UPDATED[slug || '/'] ?? SITE_START);

  return [
    { url: `${BASE_URL}/`, lastModified: at('/'), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/alphabet`, lastModified: at('alphabet'), changeFrequency: 'yearly', priority: 0.9 },
    { url: `${BASE_URL}/chart`, lastModified: at('chart'), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/international-morse-code-chart`, lastModified: at('international-morse-code-chart'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/american-morse-code-chart`, lastModified: at('american-morse-code-chart'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/morse-code-chart-pdf`, lastModified: at('morse-code-chart-pdf'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/morse-code-translator-to-english`, lastModified: at('morse-code-translator-to-english'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/text-to-morse-code`, lastModified: at('text-to-morse-code'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/letters-in-morse-code`, lastModified: at('letters-in-morse-code'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/morse-code-generator`, lastModified: at('morse-code-generator'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/morse-code-questions-and-answers`, lastModified: at('morse-code-questions-and-answers'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/audio`, lastModified: at('audio'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/learn`, lastModified: at('learn'), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/i-love-you`, lastModified: at('i-love-you'), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/tattoo-generator`, lastModified: at('tattoo-generator'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/morse-code-bracelet`, lastModified: at('morse-code-bracelet'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/morse-code-punctuation`, lastModified: at('morse-code-punctuation'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/morse-code-patterns`, lastModified: at('morse-code-patterns'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/morse-code-for-puzzles`, lastModified: at('morse-code-for-puzzles'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/practice`, lastModified: at('practice'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/listen-to-morse-code-transmissions`, lastModified: at('listen-to-morse-code-transmissions'), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/sos`, lastModified: at('sos'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/numbers`, lastModified: at('numbers'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/hello`, lastModified: at('hello'), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/about`, lastModified: at('about'), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: at('contact'), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/privacy`, lastModified: at('privacy'), changeFrequency: 'yearly', priority: 0.3 },
    ...MORSE_UNITS.map(unit => ({
      url: `${BASE_URL}/${unit.key.toLowerCase()}-in-morse-code`,
      lastModified: at(`${unit.key.toLowerCase()}-in-morse-code`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...MORSE_WORDS.map(word => ({
      url: `${BASE_URL}/${word.key}-in-morse-code`,
      lastModified: at(`${word.key}-in-morse-code`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
