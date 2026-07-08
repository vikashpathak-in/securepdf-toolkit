"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I stopped uploading client ITR documents to random converters the day I found this. It just runs, locally, every time.",
    name: "Rohit Malhotra",
    role: "Chartered Accountant, Malhotra & Associates",
  },
  {
    quote:
      "The batch OCR on scanned bank statements alone saves my team a full day every month-end close.",
    name: "Priya Nair",
    role: "Finance Manager, a mid-size manufacturing firm",
  },
  {
    quote:
      "Clients ask about data handling more than ever now. Being able to say 'nothing leaves your laptop' ends that conversation instantly.",
    name: "Anand Kulkarni",
    role: "Tax Consultant, independent practice",
  },
  {
    quote:
      "We handle privileged case files. An offline-only tool isn't a nice-to-have for us, it's the only kind we're allowed to use.",
    name: "Sana Iqbal",
    role: "Associate, a corporate law firm",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Trusted by people who can&apos;t take chances with data
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
              className="rounded-2xl border border-secondary-900/8 dark:border-white/8 bg-white dark:bg-white/[0.03] p-6"
            >
              <Quote size={20} className="text-primary/40" />
              <blockquote className="mt-3 text-[15px] leading-relaxed text-secondary-900/75 dark:text-slate-300/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-sm font-semibold text-primary dark:bg-primary-500/15">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-secondary-900/50 dark:text-slate-400">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
