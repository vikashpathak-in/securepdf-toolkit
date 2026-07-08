import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SecurePDF Toolkit — The Offline PDF Toolkit for Chartered Accountants & Finance Teams",
  description:
    "Merge, split, compress, convert, OCR, and secure PDF documents without uploading them anywhere. 100% offline. No cloud. No tracking. Built for CAs, tax consultants, and finance teams.",
  keywords: [
    "offline PDF tool",
    "PDF toolkit for chartered accountants",
    "secure PDF software",
    "PDF OCR offline",
    "DPDP Act compliant PDF tool",
    "ICAI confidentiality PDF software",
  ],
  authors: [{ name: "SecurePDF Toolkit" }],
  openGraph: {
    title: "SecurePDF Toolkit — The Offline PDF Toolkit for Finance Professionals",
    description:
      "Process PDFs completely offline. No cloud, no tracking, no uploads. Built for chartered accountants and finance teams.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SecurePDF Toolkit — The Offline PDF Toolkit",
    description:
      "Merge, split, compress, convert, OCR, and secure PDF documents without ever uploading them.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          // Prevents flash-of-wrong-theme before hydration
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
