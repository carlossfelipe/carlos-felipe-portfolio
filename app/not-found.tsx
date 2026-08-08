import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold text-[#CF4CE1] mb-2">404</h1>
      <h2 className="text-xl text-white mb-4">Página Não Encontrada</h2>
      <p className="text-neutral-400 text-sm max-w-md mb-6">
        O recurso solicitado não pôde ser localizado.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}