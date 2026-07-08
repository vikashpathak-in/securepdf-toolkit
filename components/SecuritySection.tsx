"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ServerOff, EyeOff, BarChart3, Radar, HardDriveDownload } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const guarantees = [
  { icon: ServerOff, text: "No servers" },
  { icon: HardDriveDownload, text: "No cloud storage" },
  { icon: BarChart3, text: "No analytics" },
  { icon: Radar, text: "No tracking" },
  { icon: EyeOff, text: "Everything processed locally" },
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="local-boundary grid gap-12 bg-primary-50/30 p-8 dark:bg-primary-500/[0.04] sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Your files never leave your computer.
            </h2>
            <p className="mt-4 text-secondary-900/65 dark:text-slate-300/75">
              SecurePDF Toolkit was built on one non-negotiable rule: nothing
              you open in it is ever transmitted anywhere. That&apos;s not a
              privacy setting — it&apos;s the entire architecture.
            </p>
            <ul className="mt-7 space-y-3">
              {guarantees.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm font-medium text-secondary-900/80 dark:text-slate-200">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-white/10 text-primary shadow-sm">
                    <Icon size={14} strokeWidth={2} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-secondary-900/10 dark:border-white/10 pt-7">
              <div>
                <p className="font-display text-2xl font-semibold text-primary sm:text-3xl">
                  <Counter to={0} suffix="" />
                  <span className="text-secondary-900/40 dark:text-slate-500"> KB</span>
                </p>
                <p className="mt-1 text-xs text-secondary-900/55 dark:text-slate-400">Data uploaded, ever</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-primary sm:text-3xl">
                  <Counter to={100} suffix="%" />
                </p>
                <p className="mt-1 text-xs text-secondary-900/55 dark:text-slate-400">Offline processing</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-primary sm:text-3xl">
                  <Counter to={12000} suffix="+" />
                </p>
                <p className="mt-1 text-xs text-secondary-900/55 dark:text-slate-400">Finance professionals</p>
              </div>
            </div>
          </div>

          {/* Illustration: device boundary with a document that stays inside */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80"
          >
            <span className="absolute inset-0 rounded-full border border-dashed border-primary-500/30 animate-[spin_40s_linear_infinite]" />
            <span className="absolute inset-8 rounded-full border border-dashed border-accent-500/30 animate-[spin_30s_linear_infinite_reverse]" />
            <div className="relative flex h-32 w-32 items-center justify-center rounded-2xl bg-white dark:bg-secondary-900 shadow-xl">
              <span className="absolute h-full w-full rounded-2xl bg-primary/20 animate-pulse-ring" />
              <HardDriveDownload size={40} strokeWidth={1.25} className="text-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
