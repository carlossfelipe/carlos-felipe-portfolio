import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Carlos Felipe | Desenvolvedor Full Stack & Java Backend",
  description: "Portfólio profissional de Carlos Felipe, especialista em Java, Spring Boot, React, Next.js e TypeScript.",
  openGraph: {
    title: "Carlos Felipe | Desenvolvedor Full Stack",
    description: "Portfólio profissional com foco em Backend Java e aplicações web modernas.",
    url: "https://carlosfelipe.dev",
    siteName: "Carlos Felipe Portfolio",
    locale: "pt_BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans bg-[#050505] text-white antialiased selection:bg-[#CF4CE1]/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}