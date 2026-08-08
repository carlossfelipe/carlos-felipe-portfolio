"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Download, Server } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-16 relative overflow-hidden"
    >
      {/* Background Glow Otimizado */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[450px] lg:w-[600px] h-[280px] sm:h-[450px] lg:h-[600px] bg-[#CF4CE1]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full relative z-10">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 sm:gap-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-[#CF4CE1] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#CF4CE1] animate-pulse" />
            Full Stack Developer
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] break-words">
            Carlos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#CF4CE1]">
              Felipe
            </span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
            Construindo aplicações modernas utilizando{" "}
            <strong className="text-neutral-200">Java</strong>,{" "}
            <strong className="text-neutral-200">Spring Boot</strong>,{" "}
            <strong className="text-neutral-200">React</strong>,{" "}
            <strong className="text-neutral-200">Next.js</strong> e{" "}
            <strong className="text-neutral-200">TypeScript</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            {/* CTA Principal: Projetos */}
            <a
              href="#projetos"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#CF4CE1] text-white text-sm font-semibold hover:bg-[#b03bc1] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(207,76,225,0.4)]"
            >
              Ver Projetos
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* CTA Secundário: Download do CV */}
            <a
              href="/curriculo.pdf"
              download="Curriculo_Carlos_Felipe_Fullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#CF4CE1]" />
              Baixar CV
            </a>
          </div>
        </motion.div>

        {/* Right Column - Tech Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex items-center justify-center w-full"
        >
          <div className="w-full max-w-full sm:max-w-md rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-xl p-4 sm:p-6 relative overflow-hidden flex flex-col gap-4 shadow-2xl">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#CF4CE1]/10 via-transparent to-transparent pointer-events-none" />

            {/* Header bar mock */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-neutral-500 truncate ml-2">
                BackendService.java
              </span>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="p-3 sm:p-4 rounded-xl bg-[#050505]/90 border border-white/10 backdrop-blur-md flex items-center gap-3 sm:gap-4"
            >
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#CF4CE1]/10 text-[#CF4CE1] shrink-0">
                <Server className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs font-mono text-neutral-400">
                  REST Controller
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white truncate">
                  @RestController Spring Boot
                </p>
              </div>
            </motion.div>

            {/* Code Block Mock */}
            <div className="font-mono text-[11px] sm:text-xs text-neutral-400 space-y-1 bg-black/50 p-3 rounded-lg border border-white/5 overflow-x-auto">
              <p className="whitespace-nowrap">
                <span className="text-[#CF4CE1]">@GetMapping</span>
                (&quot;/api/v1/health&quot;)
              </p>
              <p className="whitespace-nowrap">
                <span className="text-blue-400">public</span>{" "}
                ResponseEntity&lt;String&gt;{" "}
                <span className="text-yellow-400">check</span>() &#123;
              </p>
              <p className="pl-4 text-emerald-400 whitespace-nowrap">
                return ResponseEntity.ok(&quot;UP&quot;);
              </p>
              <p>&#125;</p>
            </div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="p-3 sm:p-4 rounded-xl bg-[#050505]/90 border border-white/10 backdrop-blur-md flex items-center gap-3 sm:gap-4"
            >
              <div className="p-2 sm:p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                <Code className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs font-mono text-neutral-400">
                  Frontend UI
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white truncate">
                  Next.js 15 &amp; React 19
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
