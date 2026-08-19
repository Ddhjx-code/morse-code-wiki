import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white text-sm">Translator</Link></li>
              <li><Link href="/audio" className="text-gray-400 hover:text-white text-sm">Audio Decoder</Link></li>
              <li><Link href="/tattoo-generator" className="text-gray-400 hover:text-white text-sm">Tattoo Generator</Link></li>
              <li><Link href="/practice" className="text-gray-400 hover:text-white text-sm">Practice</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Reference</h3>
            <ul className="space-y-2">
              <li><Link href="/alphabet" className="text-gray-400 hover:text-white text-sm">Alphabet A-Z</Link></li>
              <li><Link href="/chart" className="text-gray-400 hover:text-white text-sm">Printable Chart</Link></li>
              <li><Link href="/numbers" className="text-gray-400 hover:text-white text-sm">Numbers 0-9</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Popular Phrases</h3>
            <ul className="space-y-2">
              <li><Link href="/i-love-you" className="text-gray-400 hover:text-white text-sm">I Love You</Link></li>
              <li><Link href="/sos" className="text-gray-400 hover:text-white text-sm">SOS Signal</Link></li>
              <li><Link href="/hello" className="text-gray-400 hover:text-white text-sm">Hello</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">About</h3>
            <ul className="space-y-2">
              <li><Link href="/learn" className="text-gray-400 hover:text-white text-sm">Learn Morse Code</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm">About</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} MorseCodeNow.com. Free online Morse code translator and tools.</p>
        </div>
      </div>
    </footer>
  );
}
