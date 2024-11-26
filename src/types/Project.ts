export interface Project {
    id: string;
    title: string;
    description: string;
    preview: string;
    image: string;
    content: string;
    technologies?: string[];
    date?: string;
  }