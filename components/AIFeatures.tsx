"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageSquareText, ReceiptText, Hash, Fingerprint, Landmark, FileBarChart2, Sheet } from "lucide-react";

const aiTools = [
  { icon: MessageSquareText, name: "Ask Questions from PDFs", desc: "Query any document in plain English, offline." },
  { icon: ReceiptText, name: "Invoice Extraction", desc: "Pull line items, totals, and vendor details automatically." },
  { icon: Hash, name: "GST Detection", desc: "Auto-identify GSTNs and tax breakdowns in a document." },
  { icon: Fingerprint, name: "PAN Detection", desc: "Locate and flag PAN numbers across large batches." },
  { icon: Landmark, name: "Bank Statement Parsing", desc: "Convert statement PDFs into structured transactions." },
  { icon: FileBarChart2, name: "Financial Summary", desc: "Generate a one-page summary from long reports." },
  { icon: Sheet, name: "Export to Excel", desc: "Send any extracted dataset straight to .xlsx." },
];

export default function AIFeatures() {
  return (
    <section id="ai-features" className="relative overflow-hidden bg-secondary-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.25),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.18),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-ledger-grid bg-ledger opacity-[0.04]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="tabular inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-accent-400">
            <Sparkles size={13} />
            OFFLINE AI ASSISTANT
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            AI that reads your documents — without an internet connection
          </h2>
          <p className="mt-4 text-white/60">
            Every model runs locally on your device. Nothing you extract, ask, or summarize ever touches a network request.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiTools.map(({ icon: Icon, name, desc }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:border-accent-500/40 hover:bg-white/[0.06]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-[0.95rem] font-semibold">{name}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
