import type { Project } from '../types/Project';

export async function getAllProjects(): Promise<Project[]> {
  const projectModules = import.meta.glob<{ default: Project }>('../content/projects/*.ts');
  const projects: Project[] = [];

  for (const path in projectModules) {
    const module = await projectModules[path]();
    projects.push(module.default);
  }

  // Sort projects by date (most recent first)
  return projects.sort((a, b) => 
    new Date(b.date || '').getTime() - new Date(a.date || '').getTime()
  );
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  const projects = await getAllProjects();
  return projects.find(project => project.id === id);
}