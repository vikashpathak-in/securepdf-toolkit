"use client";

import { motion } from "framer-motion";
import {
  Calculator, Receipt, Users2, UserCog, ClipboardCheck,
  Scale, Plane, Landmark, ShieldQuestion, Building2,
} from "lucide-react";

const users = [
  { icon: Calculator, label: "Chartered Accountants" },
  { icon: Receipt, label: "Tax Consultants" },
  { icon: Users2, label: "Finance Teams" },
  { icon: UserCog, label: "HR" },
  { icon: ClipboardCheck, label: "Auditors" },
  { icon: Scale, label: "Law Firms" },
  { icon: Plane, label: "Travel Agencies" },
  { icon: Landmark, label: "Banks" },
  { icon: ShieldQuestion, label: "Insurance" },
  { icon: Building2, label: "SMEs" },
];

export default function WhoUsesIt() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for anyone who signs an NDA before opening a laptop
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {users.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: (i % 5) * 0.05 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-secondary-900/8 dark:border-white/8 bg-white dark:bg-white/[0.03] px-4 py-7 text-center transition-colors hover:border-primary-500/40"
            >
              <Icon size={22} strokeWidth={1.5} className="text-primary" />
              <span className="text-[13px] font-medium text-secondary-900/75 dark:text-slate-300">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
