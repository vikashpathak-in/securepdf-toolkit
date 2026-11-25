import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SecurePDF Toolkit | Browser-based PDF tools",
  description: "Browser-based tools to organise, inspect and prepare PDF documents.",
  keywords: ["browser PDF tools", "merge PDF", "split PDF", "OCR PDF", "PDF to Excel"],
  openGraph: { title: "SecurePDF Toolkit", description: "Browser-based PDF document utilities.", type: "website", locale: "en_IN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
