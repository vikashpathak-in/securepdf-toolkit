"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type Cell = { type: "check" } | { type: "cross" } | { type: "text"; value: string };

const rows: { feature: string; ours: Cell; theirs: Cell }[] = [
  { feature: "Offline Processing", ours: { type: "check" }, theirs: { type: "cross" } },
  { feature: "Cloud Upload Required", ours: { type: "cross" }, theirs: { type: "check" } },
  { feature: "Privacy", ours: { type: "text", value: "Full control" }, theirs: { type: "text", value: "Unclear" } },
  { feature: "Speed", ours: { type: "text", value: "Instant, local" }, theirs: { type: "text", value: "Depends on upload" } },
  { feature: "Unlimited Usage", ours: { type: "check" }, theirs: { type: "cross" } },
  { feature: "Ads", ours: { type: "cross" }, theirs: { type: "check" } },
  { feature: "Tracking", ours: { type: "cross" }, theirs: { type: "check" } },
  { feature: "Internet Required", ours: { type: "cross" }, theirs: { type: "check" } },
];

function CellContent({ cell, tone }: { cell: Cell; tone: "ours" | "theirs" }) {
  if (cell.type === "check")
    return (
      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${tone === "ours" ? "bg-accent-500/15 text-accent-600 dark:text-accent-400" : "bg-secondary-900/5 text-secondary-900/40 dark:bg-white/5 dark:text-slate-500"}`}>
        <Check size={13} strokeWidth={2.5} />
      </span>
    );
  if (cell.type === "cross")
    return (
      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${tone === "ours" ? "bg-secondary-900/5 text-secondary-900/30 dark:bg-white/5 dark:text-slate-600" : "bg-red-500/10 text-red-500/70"}`}>
        <X size={13} strokeWidth={2.5} />
      </span>
    );
  return <span className="text-[13px] font-medium text-secondary-900/70 dark:text-slate-300">{cell.value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            SecurePDF Toolkit vs. typical online tools
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="local-boundary mt-12 overflow-hidden"
        >
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-secondary-900/10 dark:border-white/10">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-secondary-900/45 dark:text-slate-400">
                  Feature
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-primary">
                  SecurePDF Toolkit
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-secondary-900/45 dark:text-slate-400">
                  Typical Online Tools
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-secondary-900/5 dark:border-white/5 ${i % 2 === 0 ? "bg-white/40 dark:bg-white/[0.015]" : ""}`}
                >
                  <td className="px-5 py-3.5 text-sm font-medium text-secondary-900/80 dark:text-slate-200">
                    {row.feature}
                  </td>
                  <td className="px-5 py-3.5">
                    <CellContent cell={row.ours} tone="ours" />
                  </td>
                  <td className="px-5 py-3.5">
                    <CellContent cell={row.theirs} tone="theirs" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
