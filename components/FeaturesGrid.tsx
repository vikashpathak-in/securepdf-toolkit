"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Combine, Scissors, Minimize2, FileType, FileSpreadsheet, Images,
  ScanText, KeyRound, Lock, PenTool, Droplets, RotateCw, Trash2,
  FileOutput, Layers, Eraser, Search,
} from "lucide-react";

const features = [
  { icon: Combine, name: "Merge PDFs", desc: "Combine multiple PDFs into one clean document." },
  { icon: Scissors, name: "Split PDFs", desc: "Break large files into individual pages or ranges." },
  { icon: Minimize2, name: "Compress PDFs", desc: "Shrink file size without losing readability." },
  { icon: FileType, name: "Convert to Word", desc: "Turn PDFs into fully editable .docx files." },
  { icon: FileSpreadsheet, name: "Convert to Excel", desc: "Extract tables straight into .xlsx sheets." },
  { icon: Images, name: "Images to PDF", desc: "Batch-convert JPG or PNG scans into one PDF." },
  { icon: ScanText, name: "OCR", desc: "Make scanned documents searchable and selectable." },
  { icon: KeyRound, name: "Password Protection", desc: "Lock sensitive files with a private password." },
  { icon: Lock, name: "Encrypt PDFs", desc: "AES-256 encryption for client-grade confidentiality." },
  { icon: PenTool, name: "Digital Signature", desc: "Sign documents without printing or scanning." },
  { icon: Droplets, name: "Watermark", desc: "Stamp drafts and confidential files instantly." },
  { icon: RotateCw, name: "Rotate Pages", desc: "Fix sideways or upside-down scanned pages." },
  { icon: Trash2, name: "Delete Pages", desc: "Remove unwanted pages in a couple of clicks." },
  { icon: FileOutput, name: "Extract Pages", desc: "Pull out exactly the pages you need." },
  { icon: Layers, name: "Batch Processing", desc: "Run any tool across hundreds of files at once." },
  { icon: Eraser, name: "Metadata Removal", desc: "Strip author, timestamps, and hidden file data." },
];

export default function FeaturesGrid() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return features;
    return features.filter(
      (f) => f.name.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Sixteen tools. One offline workspace.
            </h2>
            <p className="mt-3 max-w-xl text-secondary-900/65 dark:text-slate-300/75">
              Everything a finance team touches a PDF for — without a single upload.
            </p>
          </div>
          <div className="relative w-full sm:w-64">
            <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-900/35 dark:text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a feature…"
              aria-label="Search features"
              className="focus-ring w-full rounded-full border border-secondary-900/10 dark:border-white/10 bg-white dark:bg-white/5 py-2.5 pl-10 pr-4 text-sm placeholder:text-secondary-900/35 dark:placeholder:text-slate-500"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map(({ icon: Icon, name, desc }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.06 }}
              className="group rounded-2xl border border-secondary-900/8 dark:border-white/8 bg-white dark:bg-white/[0.03] p-5 transition-all hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-500/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary dark:bg-primary-500/10 dark:text-primary-400 transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-[0.95rem] font-semibold">{name}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-secondary-900/60 dark:text-slate-300/70">
                {desc}
              </p>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full py-10 text-center text-sm text-secondary-900/50 dark:text-slate-400">
              No features match &quot;{query}&quot;. Try a different search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
