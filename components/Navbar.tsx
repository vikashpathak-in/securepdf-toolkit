"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, FileLock2 } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import DownloadModal from "./DownloadModal";

const links = [
  { label: "Features", href: "#features" },
  { label: "AI Tools", href: "#ai-features" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
          <a href="#top" className="focus-ring flex items-center gap-2 rounded-lg">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <FileLock2 size={17} strokeWidth={2} />
            </span>
            <span className="font-display text-[1.05rem] font-semibold tracking-tight">
              SecurePDF <span className="text-primary">Toolkit</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="focus-ring rounded text-[0.925rem] text-secondary-900/70 hover:text-secondary-900 dark:text-slate-300/80 dark:hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <button
              onClick={() => setModalOpen(true)}
              className="focus-ring rounded-full bg-secondary-900 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 dark:bg-white dark:text-secondary-900 dark:hover:bg-accent-500 dark:hover:text-white transition-colors"
            >
              Download Free
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="focus-ring rounded-lg p-2"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-secondary-900/5 dark:border-white/5 px-5 pb-5 pt-2 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="focus-ring rounded-lg px-2 py-2.5 text-sm font-medium text-secondary-900/80 dark:text-slate-200 hover:bg-secondary-900/5 dark:hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setModalOpen(true);
                  setMobileOpen(false);
                }}
                className="focus-ring mt-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white"
              >
                Download Free
              </button>
            </div>
          </motion.div>
        )}
      </header>
      <DownloadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
