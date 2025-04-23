export interface Project {
  id: number;
  title: string;
  description: string;
  category: string[];
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}