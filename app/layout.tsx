import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "SecurePDF Toolkit | Browser-based PDF tools",
  description: "Merge, split, reorder, rotate, extract, watermark, compress, convert images to PDF and password-protect PDF files in your browser.",
  keywords: ["browser PDF tools", "merge PDF", "split PDF", "compress PDF", "password protect PDF"],
  openGraph: { title: "SecurePDF Toolkit", description: "Practical PDF tools that run in your browser.", type: "website", locale: "en_IN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}><body>{children}</body></html>;
}
