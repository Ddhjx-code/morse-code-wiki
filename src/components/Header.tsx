import Link from 'next/link';

const NAV_ITEMS = [
  { href: '/', label: 'Translator' },
  { href: '/audio', label: 'Audio' },
  { href: '/alphabet', label: 'Alphabet' },
  { href: '/chart', label: 'Chart' },
  { href: '/tattoo-generator', label: 'Tattoo' },
  { href: '/practice', label: 'Practice' },
  { href: '/learn', label: 'Learn' },
];

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg">
          <span className="text-green-400 font-mono">·−·</span>
          <span>MorseCodeNow</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
