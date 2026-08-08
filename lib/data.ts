import { Project, TechItem, TimelineItem } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "Sistema de Orçamentos",
    description: "Plataforma para geração e gerenciamento de orçamentos em tempo real com relatórios em PDF.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    githubUrl: "https://github.com/carlosfelipe",
    demoUrl: "https://demo.example.com",
    image: "/projects/orcamentos.png"
  },
  {
    title: "API de Agendamentos",
    description: "Microsserviço de alta disponibilidade para reserva e controle de horários com notificações assíncronas.",
    tags: ["Java", "Spring Boot", "Docker", "RabbitMQ"],
    githubUrl: "https://github.com/carlosfelipe",
    image: "/projects/agendamentos.png"
  },
  {
    title: "Site de Animes",
    description: "Portal responsivo para busca e catalogação de animes consumindo APIs REST públicas.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/carlosfelipe",
    demoUrl: "https://demo.example.com",
    image: "/projects/animes.png"
  },
  {
    title: "Dashboard Administrativo",
    description: "Painel de controle corporativo com gráficos interativos e gestão de permissões.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    githubUrl: "https://github.com/carlosfelipe",
    image: "/projects/dashboard.png"
  },
  {
    title: "Sistema de Login JWT",
    description: "Módulo robusto de autenticação, autorização e refresh token baseado em Spring Security.",
    tags: ["Java", "Spring Security", "JWT", "MySQL"],
    githubUrl: "https://github.com/carlosfelipe",
    image: "/projects/jwt.png"
  }
];

export const TECH_STACK: TechItem[] = [
  { name: "Java", description: "Linguagem principal para desenvolvimento backend robusto.", iconName: "Coffee", category: "backend" },
  { name: "Spring Boot", description: "Framework para criação de APIs e microsserviços.", iconName: "Leaf", category: "backend" },
  { name: "React", description: "Biblioteca para interfaces reativas e modulares.", iconName: "Atom", category: "frontend" },
  { name: "Next.js", description: "Framework React com SSR e otimização avançada.", iconName: "Globe", category: "frontend" },
  { name: "TypeScript", description: "Tipagem estática para JavaScript escalável.", iconName: "Code2", category: "frontend" },
  { name: "Tailwind CSS", description: "Estilização utilitária e responsiva.", iconName: "Palette", category: "frontend" },
  { name: "PostgreSQL", description: "Banco de dados relacional e consultas avançadas.", iconName: "Database", category: "database" },
  { name: "MySQL", description: "Gerenciamento eficiente de dados relacionais.", iconName: "DatabaseBackup", category: "database" },
  { name: "Docker", description: "Containerização de aplicações e ambientes.", iconName: "Container", category: "devops" },
  { name: "Git", description: "Controle de versão distribuído.", iconName: "GitBranch", category: "devops" },
  { name: "GitHub", description: "Hospedagem de código e workflows CI/CD.", iconName: "Github", category: "devops" },
  { name: "Linux", description: "Ambiente para servidores e desenvolvimento.", iconName: "Terminal", category: "devops" },
  { name: "Node.js", description: "Execução de JavaScript no lado do servidor.", iconName: "Server", category: "backend" }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024",
    title: "Conclusão do Ensino Médio",
    institution: "Educação Básica",
    description: "Base sólida em exatas e introdução aos conceitos iniciais de lógica de programação."
  },
  {
    year: "2025",
    title: "Ingresso no IFB",
    institution: "Instituto Federal de Brasília",
    description: "Início da graduação em Tecnologia em Sistemas para Internet (TSI)."
  },
  {
    year: "2025",
    title: "Primeiros Projetos Full Stack",
    institution: "Projetos Integradores e Autônomos",
    description: "Desenvolvimento de soluções end-to-end com integração entre frontend e backend RESTful."
  },
  {
    year: "2025",
    title: "Especialização em Java",
    institution: "Estudo Aprofundado",
    description: "Foco em arquitetura Spring, Padrões de Projeto, Orientação a Objetos e consumo de APIs."
  },
  {
    year: "2026",
    title: "Objetivo: Estágio / Júnior em Desenvolvimento",
    institution: "Mercado de Trabalho",
    description: "Pronto para aplicar conhecimentos de ecossistema Java e Web em desafios reais de engenharia."
  }
];