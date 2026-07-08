"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Monitor, Apple, Terminal } from "lucide-react";

export default function DownloadModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const options = [
    { icon: Monitor, label: "Windows", detail: "Windows 10 / 11 · 64-bit · v2.4.0", href: "#" },
    { icon: Apple, label: "macOS", detail: "macOS 12+ · Apple Silicon & Intel", href: "#" },
    { icon: Terminal, label: "Linux", detail: ".AppImage · Ubuntu 20.04+", href: "#" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-secondary-950/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-modal-title"
            className="glass relative w-full max-w-md rounded-2xl p-6 shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="focus-ring absolute right-4 top-4 rounded-full p-1.5 hover:bg-secondary-900/5 dark:hover:bg-white/10"
            >
              <X size={18} />
            </button>
            <h3 id="download-modal-title" className="font-display text-xl font-semibold">
              Choose your platform
            </h3>
            <p className="mt-1 text-sm text-secondary-900/60 dark:text-slate-300/70">
              Free download. No account, no sign-up, no data collected.
            </p>
            <div className="mt-5 space-y-2.5">
              {options.map(({ icon: Icon, label, detail, href }) => (
                <a
                  key={label}
                  href={href}
                  className="focus-ring group flex items-center gap-3.5 rounded-xl border border-secondary-900/10 dark:border-white/10 p-3.5 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary-900/5 dark:bg-white/5 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{label}</span>
                    <span className="block text-xs tabular text-secondary-900/55 dark:text-slate-300/60">
                      {detail}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
