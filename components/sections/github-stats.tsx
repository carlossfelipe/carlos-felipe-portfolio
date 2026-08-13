"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";

export function GithubStatsSection() {
  const username = "carlossfelipe"; // Nome de usuário do GitHub

  // bg_color=00000000 garante fundo 100% transparente
  // Estatísticas
 // Cartão de Estatísticas do Usuário
  const statsUrl = `https://github-readme-stats-denvercoder1.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=CF4CE1&icon_color=CF4CE1&text_color=999999`;

  // Linguagens mais usadas
  const langsUrl = `https://github-readme-stats-denvercoder1.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true&bg_color=00000000&title_color=CF4CE1&text_color=999999`;

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white tracking-tight">Estatísticas do GitHub</h2>
          <p className="text-neutral-400 text-sm mt-2">Atividade e métricas de desenvolvimento</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="flex items-center justify-center p-4 min-h-[200px]">
            <img
              src={statsUrl}
              alt="Estatísticas do GitHub"
              className="w-full max-w-md h-auto drop-shadow-md"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=CF4CE1&icon_color=CF4CE1&text_color=999999`;
              }}
            />
          </GlassCard>

          <GlassCard className="flex items-center justify-center p-4 min-h-[200px]">
            <img
              src={langsUrl}
              alt="Linguagens Mais Utilizadas"
              className="w-full max-w-md h-auto drop-shadow-md"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true&bg_color=00000000&title_color=CF4CE1&text_color=999999`;
              }}
            />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}