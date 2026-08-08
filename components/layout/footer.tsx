export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-8 text-xs text-neutral-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p>© {new Date().getFullYear()} Carlos Felipe Spindula Gomes. Todos os direitos reservados.</p>
        <p className="font-mono">
          Desenvolvido com <span className="text-[#CF4CE1]">Next.js 15</span>, <span className="text-[#CF4CE1]">React 19</span> e <span className="text-[#CF4CE1]">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}