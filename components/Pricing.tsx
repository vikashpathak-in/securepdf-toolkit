"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    priceOneTime: 0,
    priceAnnual: 0,
    tagline: "For occasional, everyday PDF work.",
    features: ["Merge", "Split", "Rotate", "Compress"],
    cta: "Download Free",
    highlighted: false,
  },
  {
    name: "Professional",
    priceOneTime: 2999,
    priceAnnual: 1999,
    tagline: "For CAs and finance teams running this daily.",
    features: [
      "Everything in Free",
      "OCR",
      "AI Extraction",
      "Batch Processing",
      "Priority Updates",
    ],
    cta: "Buy License",
    highlighted: true,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple, one-time pricing
          </h2>
          <p className="mt-3 text-secondary-900/65 dark:text-slate-300/75">
            No subscriptions to track. Buy the license once, own it for good.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={`text-sm font-medium ${!annual ? "text-secondary-900 dark:text-white" : "text-secondary-900/45 dark:text-slate-500"}`}>
            One-time
          </span>
          <button
            onClick={() => setAnnual((v) => !v)}
            aria-label="Toggle pricing period"
            aria-pressed={annual}
            className="focus-ring relative h-7 w-12 rounded-full bg-secondary-900/15 dark:bg-white/15 transition-colors"
          >
            <motion.span
              layout
              className="absolute top-1 h-5 w-5 rounded-full bg-primary"
              animate={{ left: annual ? "1.65rem" : "0.25rem" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-secondary-900 dark:text-white" : "text-secondary-900/45 dark:text-slate-500"}`}>
            Launch offer
          </span>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {plans.map((plan) => {
            const price = annual ? plan.priceAnnual : plan.priceOneTime;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl p-7 ${
                  plan.highlighted
                    ? "local-boundary bg-primary-50/40 dark:bg-primary-500/[0.06]"
                    : "border border-secondary-900/8 dark:border-white/8 bg-white dark:bg-white/[0.03]"
                }`}
              >
                <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-secondary-900/55 dark:text-slate-400">{plan.tagline}</p>
                <p className="tabular mt-6 font-display text-4xl font-semibold">
                  {price === 0 ? "₹0" : `₹${price.toLocaleString("en-IN")}`}
                  {price !== 0 && (
                    <span className="text-base font-normal text-secondary-900/45 dark:text-slate-500"> one-time</span>
                  )}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-secondary-900/75 dark:text-slate-300">
                      <Check size={15} strokeWidth={2.5} className="text-accent-600 dark:text-accent-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`focus-ring mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-primary-600"
                      : "border border-secondary-900/15 dark:border-white/15 hover:bg-secondary-900/5 dark:hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
