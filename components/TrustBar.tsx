"use client";

import { motion } from "framer-motion";
import { WifiOff, ShieldCheck, ScrollText, Landmark, HardDrive, Infinity as InfinityIcon } from "lucide-react";

const items = [
  { icon: WifiOff, label: "No Internet Required" },
  { icon: HardDrive, label: "Data Never Leaves Your PC" },
  { icon: ScrollText, label: "DPDP Act Friendly" },
  { icon: Landmark, label: "ICAI Confidentiality Ready" },
  { icon: ShieldCheck, label: "Works Fully Offline" },
  { icon: InfinityIcon, label: "Unlimited Files" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-secondary-900/5 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-6">
        {items.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="local-boundary flex flex-col items-center gap-2 px-3 py-4 text-center"
          >
            <Icon size={19} strokeWidth={1.75} className="text-accent-600 dark:text-accent-400" />
            <span className="text-[12.5px] font-medium leading-tight text-secondary-900/75 dark:text-slate-300">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
