import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-300 hover:border-[#CF4CE1]/50 hover:bg-white/[0.04] hover:shadow-[0_0_25px_rgba(207,76,225,0.15)] ${className}`}
    >
      {children}
    </div>
  );
}