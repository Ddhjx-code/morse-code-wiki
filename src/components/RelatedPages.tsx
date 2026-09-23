import Link from 'next/link';

const RELATED_LINKS = [
  { href: '/', label: 'Morse Code Translator', desc: 'Convert text to Morse code' },
  { href: '/audio', label: 'Audio Translator', desc: 'Listen to Morse code audio' },
  { href: '/alphabet', label: 'Alphabet A-Z', desc: 'Complete character reference' },
  { href: '/chart', label: 'Printable Chart', desc: 'Download or print reference' },
  { href: '/tattoo-generator', label: 'Tattoo Generator', desc: 'Design Morse code tattoos' },
  { href: '/practice', label: 'Practice Quiz', desc: 'Learn by listening' },
  { href: '/learn', label: 'Learn Morse Code', desc: 'Beginner guide' },
  { href: '/i-love-you', label: 'I Love You', desc: 'Romantic phrase translation' },
  { href: '/sos', label: 'SOS Signal', desc: 'Emergency signal guide' },
];

function rotateFrom(path: string) {
  const start = RELATED_LINKS.findIndex(l => l.href === path) + 1;
  return [...RELATED_LINKS.slice(start), ...RELATED_LINKS.slice(0, start)];
}

export default function RelatedPages({ currentPath }: { currentPath: string }) {
  const links = rotateFrom(currentPath).filter(l => l.href !== currentPath).slice(0, 6);

  return (
    <section className="mt-12 border-t border-gray-800 pt-8">
      <h2 className="text-lg font-bold text-white mb-4">Related Pages</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="p-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors"
          >
            <span className="text-sm font-medium text-white">{link.label}</span>
            <span className="block text-xs text-gray-500 mt-0.5">{link.desc}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
