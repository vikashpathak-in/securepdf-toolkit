"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Combine, ScanText, ReceiptText, Minimize2, Moon } from "lucide-react";

const shots = [
  { icon: Combine, name: "Merge Window", desc: "Drag, reorder, and combine files visually." },
  { icon: ScanText, name: "OCR Window", desc: "Watch text recognition run entirely offline." },
  { icon: ReceiptText, name: "Invoice Extraction", desc: "Structured fields pulled straight from scans." },
  { icon: Minimize2, name: "Compression Screen", desc: "Preview size savings before you commit." },
  { icon: Moon, name: "Dark Mode", desc: "Easy on the eyes for late tax-season nights." },
];

export default function Screenshots() {
  const [active, setActive] = useState(0);
  const Active = shots[active];

  return (
    <section id="screenshots" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A look inside the desktop app
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {shots.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActive(i)}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === i
                  ? "bg-secondary-900 text-white dark:bg-white dark:text-secondary-900"
                  : "border border-secondary-900/10 dark:border-white/10 text-secondary-900/60 dark:text-slate-300 hover:bg-secondary-900/5 dark:hover:bg-white/5"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={Active.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-secondary-900/10 dark:border-white/10 bg-white dark:bg-secondary-900 shadow-xl"
          >
            <div className="flex items-center gap-1.5 border-b border-secondary-900/5 dark:border-white/5 bg-secondary-900/[0.02] dark:bg-white/[0.02] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="tabular ml-3 text-[11px] text-secondary-900/40 dark:text-slate-400">
                {Active.name}
              </span>
            </div>
            <div className="flex h-72 flex-col items-center justify-center gap-3 bg-surface dark:bg-white/[0.02] sm:h-96">
              <Active.icon size={44} strokeWidth={1.25} className="text-primary" />
              <p className="text-sm text-secondary-900/55 dark:text-slate-400">{Active.desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
