"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import * as Icons from "lucide-react";

export function TechStackSection() {
  return (
    <section id="tecnologias" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white tracking-tight">Tecnologias</h2>
          <p className="text-neutral-400 text-sm mt-2">Ferramentas e linguagens com as quais construo soluções</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {TECH_STACK.map((tech, idx) => {
            // Dynamic Icon Resolution
            const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[tech.iconName] || Icons.Code;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <GlassCard className="h-full flex flex-col justify-between group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-white/5 text-[#CF4CE1] group-hover:bg-[#CF4CE1] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white">{tech.name}</h3>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">{tech.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}