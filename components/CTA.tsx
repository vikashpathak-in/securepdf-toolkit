"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import DownloadModal from "./DownloadModal";

export default function CTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-secondary-950 px-8 py-16 text-center text-white sm:px-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.35),transparent_60%)]" />
          <h2 className="relative font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Your client&apos;s data deserves better.
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-white/60">
            Switch to a PDF toolkit that never asks you to trust a server you can&apos;t see.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => setModalOpen(true)}
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-secondary-900 hover:bg-accent-500 hover:text-white transition-colors sm:w-auto"
            >
              <Download size={17} strokeWidth={2} />
              Download Free
            </button>
            <a
              href="#contact"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors sm:w-auto"
            >
              <Mail size={17} strokeWidth={2} />
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
      <DownloadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
