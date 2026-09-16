import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - MorseCodeNow',
  description:
    'Privacy Policy for MorseCodeNow.com. Learn how we handle data, cookies, third-party advertising, and analytics. We do not collect personal information.',
  keywords: 'privacy policy, morsecodenow privacy, cookie policy',
};

export default function PrivacyPage() {
  return (
    <div className="py-12 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-12">Last updated: September 2026</p>

      <section className="prose prose-invert prose-gray max-w-none">
        <p className="text-gray-400">
          This Privacy Policy describes how MorseCodeNow (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;the Site&rdquo;)
          handles information when you visit <strong className="text-white">morsecodenow.com</strong>.
          By using the Site, you agree to the practices described below.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">1. Information We Collect</h2>
        <p className="text-gray-400">
          <strong className="text-white">We do not collect personal information directly.</strong> All Morse code
          translation, audio generation, and design tools run entirely in your browser. The text you enter
          into our translator is never transmitted to our servers.
        </p>
        <p className="text-gray-400 mt-3">We do not require registration, accounts, or logins.</p>

        <h2 className="text-2xl font-bold text-white mt-8">2. Cookies</h2>
        <p className="text-gray-400">
          Cookies are small text files stored on your device. We use cookies and similar technologies for:
        </p>
        <ul className="text-gray-400 space-y-2">
          <li>Measuring site usage and performance</li>
          <li>Displaying relevant advertising (via third-party vendors)</li>
          <li>Remembering display preferences</li>
        </ul>
        <p className="text-gray-400 mt-3">
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          However, some parts of the Site may not function properly without cookies.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">3. Third-Party Advertising</h2>
        <p className="text-gray-400">
          We may partner with third-party advertising vendors, including <strong className="text-white">Google AdSense</strong>,
          to display advertisements on the Site.
        </p>
        <ul className="text-gray-400 space-y-2">
          <li>
            Third-party vendors, including Google, use cookies to serve ads based on your prior visits to
            this website and/or other websites on the Internet.
          </li>
          <li>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on
            your visit to our Site and/or other sites on the Internet.
          </li>
          <li>
            Google uses the <strong className="text-white">DoubleClick DART cookie</strong> to serve ads to users
            based on their visits to this Site and other sites on the Internet.
          </li>
          <li>
            You may opt out of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Google Ads Settings
            </a>.
          </li>
          <li>
            Alternatively, you can opt out of some third-party vendors&apos; use of cookies for personalized
            advertising by visiting{' '}
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              www.aboutads.info
            </a>.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">4. Analytics</h2>
        <p className="text-gray-400">
          We use <strong className="text-white">Google Analytics 4</strong> to understand how visitors use the Site.
          Google Analytics collects information such as how often users visit, what pages they visit, and what
          other sites they used prior to coming to our Site. We use this information only to improve the Site.
        </p>
        <p className="text-gray-400 mt-3">
          Google Analytics collects the IP address assigned to you on the date you visit the Site rather than
          your name or other personally identifying information. We do not combine the information collected
          through Google Analytics with personally identifiable information. Google&apos;s ability to use and share
          information collected is restricted by the{' '}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Google Privacy Terms
          </a>.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">5. Log Data</h2>
        <p className="text-gray-400">
          Like most websites, our hosting provider may automatically record standard server log information such
          as your IP address, browser type, referring pages, and timestamps. This data is used for security and
          operational purposes and is not used to identify individual users.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">6. Children&apos;s Privacy</h2>
        <p className="text-gray-400">
          The Site is not directed at children under 13. We do not knowingly collect personal information from
          children. If you believe a child has provided us with personal information, please contact us so we can
          take appropriate action.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">7. Your Rights</h2>
        <p className="text-gray-400">
          Depending on your location, you may have rights under data protection laws such as the GDPR or CCPA,
          including the right to access, correct, or delete personal data. Since we do not collect personal data
          directly, such requests generally apply only to data held by our advertising and analytics partners.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">8. External Links</h2>
        <p className="text-gray-400">
          The Site may contain links to external websites. We are not responsible for the privacy practices of
          those sites and encourage you to read their privacy policies.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">9. Changes to This Policy</h2>
        <p className="text-gray-400">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an
          updated revision date.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">10. Contact Us</h2>
        <p className="text-gray-400">
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <span className="text-white font-mono">contact@morsecodenow.com</span> or through our{' '}
          <Link href="/contact" className="text-blue-400 hover:underline">contact page</Link>.
        </p>
      </section>
    </div>
  );
}
