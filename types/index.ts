export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
}

export interface TechItem {
  name: string;
  description: string;
  iconName: string;
  category: "backend" | "frontend" | "database" | "devops";
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}