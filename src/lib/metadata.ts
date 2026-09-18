import type { Metadata } from 'next';

const BASE_URL = 'https://morsecodenow.com';
const SITE_NAME = 'MorseCodeNow';

export interface PageMetaOptions {
  /** Route path beginning with "/". Use "/" for the homepage. */
  path: string;
  title: string;
  description: string;
  keywords?: string;
}

/**
 * Single source of truth for page metadata.
 *
 * Always emits a self-referential `alternates.canonical` derived from `path`.
 *
 * The root layout used to set a global `alternates.canonical` pointing at the
 * homepage, which every page inherited. All 13 subpages therefore told Google
 * their canonical URL was the homepage, so Google treated them as duplicates
 * and indexed none of them (GSC reported "submitted 14, indexed 0").
 * Deriving the canonical from `path` here makes that class of bug impossible
 * to reintroduce: a page cannot get metadata without also getting its own
 * canonical.
 */
export function buildMetadata({ path, title, description, keywords }: PageMetaOptions): Metadata {
  if (!path.startsWith('/')) {
    throw new Error(`buildMetadata: path must start with "/" (received "${path}")`);
  }

  const url = path === '/' ? BASE_URL : `${BASE_URL}${path}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'en_US',
      siteName: SITE_NAME,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  };
}

export { BASE_URL };
