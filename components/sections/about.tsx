"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Code2, Server, Cpu, BookOpen } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white tracking-tight">Sobre Mim</h2>
          <p className="text-neutral-400 text-sm mt-2">Trajetória, foco técnico e paixão por código</p>
        </motion.div>

        <GlassCard className="p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4 text-neutral-300 leading-relaxed text-base">
              <p>
                Sou estudante de Sistemas para Internet no Instituto Federal de Brasília (IFB), apaixonado por transformar problemas complexos em software limpo, testável e escalável.
              </p>
              <p>
                Minha atuação é voltada ao desenvolvimento Full Stack, com forte especialização no ecossistema <strong className="text-white">Java com Spring Boot</strong> no backend. Tenho grande interesse em arquitetura de microsserviços, modelagem de dados relacionais e na construção de APIs REST padronizadas e seguras.
              </p>
              <p>
                No frontend, utilizo as tecnologias mais modernas do ecossistema JavaScript, como <strong className="text-white">React, Next.js e TypeScript</strong>, visando criar interfaces fluidas, responsivas e focadas na experiência do usuário.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center">
                <Server className="w-6 h-6 text-[#CF4CE1] mb-2" />
                <span className="text-xs font-semibold text-white">Backend Java</span>
                <span className="text-[10px] text-neutral-400 mt-1">Spring Boot &amp; APIs REST</span>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center">
                <Code2 className="w-6 h-6 text-[#CF4CE1] mb-2" />
                <span className="text-xs font-semibold text-white">Web Moderno</span>
                <span className="text-[10px] text-neutral-400 mt-1">Next.js &amp; TypeScript</span>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center">
                <Cpu className="w-6 h-6 text-[#CF4CE1] mb-2" />
                <span className="text-xs font-semibold text-white">Arquitetura</span>
                <span className="text-[10px] text-neutral-400 mt-1">Boas Práticas &amp; Clean Code</span>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center">
                <BookOpen className="w-6 h-6 text-[#CF4CE1] mb-2" />
                <span className="text-xs font-semibold text-white">Evolução</span>
                <span className="text-[10px] text-neutral-400 mt-1">Aprendizado Contínuo</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}