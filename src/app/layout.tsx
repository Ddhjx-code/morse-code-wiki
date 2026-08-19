import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Morse Code Translator - Encode & Decode Text Instantly | MorseCodeNow",
    template: "%s | MorseCodeNow",
  },
  description:
    "Free online Morse code translator. Convert text to Morse code and decode Morse to text instantly. Play audio, generate tattoo designs, learn the alphabet, and practice.",
  keywords:
    "morse code translator, morse code, morse code alphabet, morse code decoder, morse code generator, morse code audio, morse code chart",
  openGraph: {
    title: "Morse Code Translator - Encode & Decode Instantly",
    description: "Free online Morse code translator with audio playback, tattoo generator, alphabet chart, and practice tools.",
    type: "website",
    locale: "en_US",
    siteName: "MorseCodeNow",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen flex flex-col bg-gray-950 text-gray-100 font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
