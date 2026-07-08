"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Does it upload my files anywhere?",
    a: "No. SecurePDF Toolkit never makes a network request for your documents. Every merge, split, OCR pass, or extraction happens using local processing on your own machine.",
  },
  {
    q: "Can I use it fully offline?",
    a: "Yes — you can disconnect from the internet entirely and every tool in the app will keep working exactly the same way.",
  },
  {
    q: "Does OCR actually work without internet?",
    a: "Yes. OCR runs on a local recognition engine bundled with the app, so scanned invoices, statements, and receipts become searchable without any cloud service involved.",
  },
  {
    q: "Is there Windows support?",
    a: "Yes, SecurePDF Toolkit runs natively on Windows 10 and 11 (64-bit).",
  },
  {
    q: "Is there Mac support?",
    a: "Yes, native builds are available for both Apple Silicon and Intel Macs running macOS 12 or later.",
  },
  {
    q: "What's the license model?",
    a: "Free covers core tools (merge, split, rotate, compress) forever. Professional is a one-time purchase per device that unlocks OCR, AI extraction, batch processing, and priority updates — no subscription.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-secondary-900/8 dark:divide-white/8 rounded-2xl border border-secondary-900/8 dark:border-white/8 bg-white dark:bg-white/[0.02]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[0.95rem] font-medium">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-secondary-900/40 dark:text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-secondary-900/65 dark:text-slate-300/75">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
