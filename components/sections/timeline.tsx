"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/data";

export function TimelineSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white tracking-tight">Jornada &amp; Formação</h2>
          <p className="text-neutral-400 text-sm mt-2">Trajetória acadêmica e marcos no desenvolvimento</p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-8">
          {TIMELINE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-8"
            >
              {/* Dot */}
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#CF4CE1] ring-4 ring-[#050505]" />

              {/* Year tag for larger screens */}
              <span className="hidden md:block absolute -left-32 top-1 w-24 text-right font-mono text-xs text-[#CF4CE1]">
                {item.year}
              </span>

              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                <span className="md:hidden inline-block font-mono text-xs text-[#CF4CE1] mb-1">
                  {item.year}
                </span>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-neutral-400 mb-2 font-medium">{item.institution}</p>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}