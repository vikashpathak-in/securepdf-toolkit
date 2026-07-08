"use client";

import { useState } from "react";
import { FileLock2, Github, Linkedin, Send } from "lucide-react";

export default function Footer() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer id="contact" className="border-t border-secondary-900/8 dark:border-white/8 bg-white/50 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <FileLock2 size={17} strokeWidth={2} />
              </span>
              <span className="font-display text-[1.05rem] font-semibold tracking-tight">
                SecurePDF <span className="text-primary">Toolkit</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-secondary-900/60 dark:text-slate-400">
              The offline PDF toolkit for chartered accountants, finance teams,
              and anyone who can&apos;t afford to guess where client data ends up.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-3">
              {["Privacy", "Terms", "Documentation", "GitHub", "Contact", "LinkedIn"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="focus-ring rounded text-secondary-900/60 hover:text-primary dark:text-slate-400 dark:hover:text-accent-400 transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a href="#" aria-label="GitHub" className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-secondary-900/10 dark:border-white/10 hover:bg-secondary-900/5 dark:hover:bg-white/5">
                <Github size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-secondary-900/10 dark:border-white/10 hover:bg-secondary-900/5 dark:hover:bg-white/5">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-secondary-900/8 dark:border-white/8 bg-white dark:bg-white/[0.03] p-6">
            <h3 className="font-display text-base font-semibold">Talk to us</h3>
            <p className="mt-1 text-sm text-secondary-900/55 dark:text-slate-400">
              Questions about licensing, enterprise rollout, or a feature request.
            </p>
            {sent ? (
              <p className="mt-6 rounded-xl bg-accent-50 dark:bg-accent-500/10 px-4 py-3 text-sm font-medium text-accent-700 dark:text-accent-400">
                Thanks — your message is queued. We&apos;ll reply within a business day.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="focus-ring w-full rounded-xl border border-secondary-900/10 dark:border-white/10 bg-surface dark:bg-white/5 px-4 py-2.5 text-sm placeholder:text-secondary-900/35 dark:placeholder:text-slate-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="focus-ring w-full rounded-xl border border-secondary-900/10 dark:border-white/10 bg-surface dark:bg-white/5 px-4 py-2.5 text-sm placeholder:text-secondary-900/35 dark:placeholder:text-slate-500"
                />
                <textarea
                  required
                  rows={3}
                  placeholder="Message"
                  className="focus-ring w-full resize-none rounded-xl border border-secondary-900/10 dark:border-white/10 bg-surface dark:bg-white/5 px-4 py-2.5 text-sm placeholder:text-secondary-900/35 dark:placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 transition-colors"
                >
                  <Send size={14} />
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-secondary-900/8 dark:border-white/8 pt-7 text-xs text-secondary-900/45 dark:text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SecurePDF Toolkit. All rights reserved.</p>
          <p className="tabular">Made for finance professionals in India.</p>
        </div>
      </div>
    </footer>
  );
}
