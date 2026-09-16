import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const BASE_URL = "https://morsecodenow.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Morse Code Translator - Encode & Decode Instantly",
    template: "%s | MorseCodeNow",
  },
  description:
    "Free online Morse code translator. Convert text to Morse code and decode Morse to text instantly. Play audio, generate tattoo designs, learn the alphabet, and practice.",
  keywords:
    "morse code translator, morse code, morse code alphabet, morse code decoder, morse code generator, morse code audio, morse code chart",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Morse Code Translator - Encode & Decode Instantly",
    description: "Free online Morse code translator with audio playback, tattoo generator, alphabet chart, and practice tools.",
    type: "website",
    locale: "en_US",
    siteName: "MorseCodeNow",
    url: BASE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MorseCodeNow - Morse Code Translator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morse Code Translator - Encode & Decode Instantly",
    description: "Free online Morse code translator with audio playback, tattoo generator, alphabet chart, and practice tools.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data for AI assistants and search engines
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Morse Code Translator",
      url: BASE_URL,
      description: "Free online Morse code translator. Convert text to Morse code and decode Morse to text instantly.",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Text to Morse code translation",
        "Morse code to text decoding",
        "Audio playback of Morse code",
        "Morse code tattoo design generator",
        "Complete Morse code alphabet reference",
        "Printable Morse code chart",
        "Interactive Morse code practice quiz",
      ],
    },
    {
      "@type": "WebSite",
      name: "MorseCodeNow",
      url: BASE_URL,
      description: "Free Morse code tools: translator, alphabet chart, tattoo generator, audio decoder, and practice exercises.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Morse code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Morse code is a communication method that encodes text characters as sequences of dots (·) and dashes (−). Developed in the 1830s by Samuel Morse and Alfred Vail, it remains used in amateur radio, aviation, and emergency signaling today.",
          },
        },
        {
          "@type": "Question",
          name: "How do you say I Love You in Morse code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I Love You in Morse code is: ·· / ·-·· --- ···- · / -·-- --- ··-. (I = ··, LOVE = ·-·· −−− ···− ·, YOU = −·−− −−− ··−)",
          },
        },
        {
          "@type": "Question",
          name: "What is SOS in Morse code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SOS in Morse code is ··· −−− ··· (three dots, three dashes, three dots). It is the international distress signal, sent as one continuous sequence without letter spacing.",
          },
        },
        {
          "@type": "Question",
          name: "How to translate text to Morse code online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use a free online Morse code translator like MorseCodeNow. Simply type your text and the translation appears instantly. You can also play the Morse code as audio and copy the result.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1SWWLW57DQ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-1SWWLW57DQ');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-950 text-gray-100 font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
