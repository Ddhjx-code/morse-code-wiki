import type { MetadataRoute } from 'next';

const BASE_URL = 'https://morsecodenow.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/alphabet`, lastModified: now, changeFrequency: 'yearly', priority: 0.9 },
    { url: `${BASE_URL}/chart`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/i-love-you`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/tattoo-generator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/practice`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/sos`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
