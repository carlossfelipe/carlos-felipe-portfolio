"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { ExternalLink, Folder } from "lucide-react";
import { GithubIcon } from "../ui/github-icon";

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white tracking-tight">Projetos Em Destaque</h2>
          <p className="text-neutral-400 text-sm mt-2">Alguns dos trabalhos recentes em backend e frontend</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard className="flex flex-col justify-between h-full group">
                <div>
                  <div className="w-full h-40 rounded-lg bg-neutral-900/80 border border-white/5 mb-4 flex items-center justify-center text-neutral-600 group-hover:border-[#CF4CE1]/30 transition-colors">
                    <Folder className="w-10 h-10 text-neutral-700 group-hover:text-[#CF4CE1] transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xs text-neutral-400 mb-4 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                        
                      <GithubIcon className="w-4 h-4" />
                      Código
                    </a>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#CF4CE1] hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}