"use client";

import { motion } from "framer-motion";
import { CloudOff, ServerCrash, EyeOff, FileWarning, Check } from "lucide-react";

const risks = [
  { icon: CloudOff, text: "Client financial data leaves your control the moment you hit upload." },
  { icon: ServerCrash, text: "Files may remain cached on unknown third-party servers indefinitely." },
  { icon: EyeOff, text: "You cannot verify deletion — or who else can access the file in the meantime." },
  { icon: FileWarning, text: "Confidential PANs, GSTNs, and bank statements are exposed to a service you don't control." },
];

export default function WhyItMatters() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Every online PDF tool asks you to trust a stranger&apos;s server
          </h2>
          <p className="mt-4 text-secondary-900/65 dark:text-slate-300/75">
            Here&apos;s what actually happens when you upload a client&apos;s PDF to a free online converter.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-red-500/15 bg-red-500/[0.03] p-7 dark:bg-red-500/[0.05]"
          >
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-red-500">
              Typical online converter
            </h3>
            <ul className="mt-5 space-y-4">
              {risks.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-red-500/80" />
                  <span className="text-sm text-secondary-900/70 dark:text-slate-300/80">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="local-boundary bg-accent-50/40 dark:bg-accent-500/[0.05] p-7"
          >
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
              SecurePDF Toolkit
            </h3>
            <ul className="mt-5 space-y-4">
              {[
                "Every file stays on your machine — start to finish.",
                "No server ever receives a byte of your document.",
                "Nothing to delete, because nothing was ever sent.",
                "PAN, GSTN, and bank data never leave your desktop.",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <Check size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-accent-600 dark:text-accent-400" />
                  <span className="text-sm text-secondary-900/70 dark:text-slate-300/80">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
