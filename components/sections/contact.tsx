"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Mail, MessageSquare } from "lucide-react";
import { GithubIcon } from "../ui/github-icon";
import { LinkedinIcon } from "../ui/linkedin-icon";
import { WhatsAppIcon } from "../ui/whatsapp-icon";

const contacts = [
  {
    name: "GitHub",
    info: "github.com/carlossfelipe",
    href: "https://github.com/carlossfelipe",
    icon: GithubIcon
  },
  {
    name: "LinkedIn",
    info: "linkedin.com/in/carlosfelipe",
    href: "https://www.linkedin.com/in/carlos-felipe-spindula/",
    icon: LinkedinIcon
  },
  {
    name: "Email",
    info: "carlosfelipe.dev12@gmail.com",
    href: "mailto:carlosfelipe.dev12@gmail.com",
    icon: Mail
  },
  {
    name: "WhatsApp",
    info: "Entrar em contato",
    href: "https://wa.me/5561992360678",
    icon: WhatsAppIcon
  }
];

export function ContactSection() {
  return (
    <section id="contato" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white tracking-tight">Vamos Conversar?</h2>
          <p className="text-neutral-400 text-sm mt-2">Canais abertos para oportunidades, parcerias e networking</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((c) => {
            const Icon = c.icon;
            return (
              <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer">
                <GlassCard className="flex flex-col items-center text-center p-6 group h-full">
                  <div className="p-4 rounded-2xl bg-white/5 text-[#CF4CE1] group-hover:bg-[#CF4CE1] group-hover:text-white transition-all duration-300 mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{c.name}</h3>
                  <p className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors">
                    {c.info}
                  </p>
                </GlassCard>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}