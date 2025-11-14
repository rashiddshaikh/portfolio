import { BrandType } from '@/models/Brand';
import { TechnologyType } from '@/models/Technology';

export interface Project {
  type: 'web' | 'mobile' | 'backend' | 'ml' | 'ai';
  name: string;
  link?: string;
  company?: string;
  description: string;
  image?: string;
  images?: string[];
  technologies: TechnologyType[];
  client?: BrandType | string;
  discontinued?: boolean;
  year: number;
  featured?: boolean; // Optional flag for highlighting top projects
}

export interface ProjectCollection {
  title: string;
  projects: Project[];
}
