"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Download, FileText, FileSpreadsheet, ScanText, Lock } from "lucide-react";
import DownloadModal from "./DownloadModal";

const floatingCards = [
  { icon: FileText, label: "Invoice_Mar26.pdf", sub: "Merged · 2 files", pos: "left-[-6%] top-[8%]", delay: 0 },
  { icon: ScanText, label: "GST_Return.pdf", sub: "OCR complete", pos: "right-[-8%] top-[18%]", delay: 0.6 },
  { icon: FileSpreadsheet, label: "Ledger_Q4.xlsx", sub: "Converted", pos: "left-[2%] bottom-[4%]", delay: 1.1 },
  { icon: Lock, label: "ClientData.pdf", sub: "Encrypted · AES-256", pos: "right-[0%] bottom-[-2%]", delay: 1.6 },
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient ledger-line texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-ledger-grid bg-ledger opacity-40 dark:opacity-[0.06]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-500/10" />

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="tabular inline-flex items-center gap-2 rounded-full border border-secondary-900/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3.5 py-1.5 text-xs font-medium text-secondary-900/70 dark:text-slate-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          100% OFFLINE · NO CLOUD · NO TRACKING
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl"
        >
          Protect your clients&apos; data.
          <br />
          Process PDFs <span className="text-primary">completely offline.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-secondary-900/65 dark:text-slate-300/80"
        >
          Merge, split, compress, convert, OCR, and secure PDF documents
          without uploading them anywhere. Built for chartered accountants,
          tax consultants, and finance teams who can&apos;t afford to guess
          where client data ends up.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600 transition-colors sm:w-auto"
          >
            <Download size={17} strokeWidth={2} />
            Download for Windows
          </button>
          <a
            href="#screenshots"
            className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full border border-secondary-900/15 dark:border-white/15 px-6 py-3.5 text-sm font-semibold hover:bg-secondary-900/5 dark:hover:bg-white/5 transition-colors sm:w-auto"
          >
            <PlayCircle size={17} strokeWidth={2} />
            Watch Demo
          </a>
        </motion.div>
      </div>

      {/* Desktop app mockup with orbiting file cards inside the "local boundary" */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="local-boundary relative mx-auto mt-20 max-w-4xl px-4"
      >
        <div className="relative rounded-2xl border border-secondary-900/10 dark:border-white/10 bg-white dark:bg-secondary-900 shadow-2xl shadow-secondary-900/10 overflow-hidden mx-6 my-10 sm:mx-10">
          <div className="flex items-center gap-1.5 border-b border-secondary-900/5 dark:border-white/5 bg-secondary-900/[0.02] dark:bg-white/[0.02] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 tabular text-[11px] text-secondary-900/40 dark:text-slate-400">
              SecurePDF Toolkit — Offline Workspace
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 p-6 sm:gap-4 sm:p-8">
            {["Merge", "Split", "Compress", "OCR Scan", "Convert", "Encrypt"].map((tool) => (
              <div
                key={tool}
                className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-secondary-900/8 dark:border-white/8 bg-surface dark:bg-white/[0.03] text-xs font-medium text-secondary-900/70 dark:text-slate-300"
              >
                <FileText size={20} strokeWidth={1.5} className="text-primary" />
                {tool}
              </div>
            ))}
          </div>
        </div>

        {floatingCards.map(({ icon: Icon, label, sub, pos, delay }) => (
          <motion.div
            key={label}
            className={`glass absolute ${pos} hidden w-48 items-center gap-2.5 rounded-xl p-3 shadow-lg sm:flex`}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-500/15 dark:text-accent-400">
              <Icon size={15} strokeWidth={2} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[12px] font-medium">{label}</span>
              <span className="tabular block text-[10.5px] text-secondary-900/50 dark:text-slate-400">
                {sub}
              </span>
            </span>
          </motion.div>
        ))}
      </motion.div>

      <DownloadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
