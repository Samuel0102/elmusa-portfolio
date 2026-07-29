import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    data: { animation: 'home' },
    loadComponent: () => import('./features/home/views/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'about',
    data: { animation: 'about' },
    loadComponent: () => import('./features/about/views/about/about.component').then((m) => m.AboutComponent)
  },
  {
    path: 'projects',
    data: { animation: 'projects' },
    loadComponent: () => import('./features/projects/views/projects/projects.component').then((m) => m.ProjectsComponent)
  },
  {
    path: 'experience',
    data: { animation: 'experience' },
    loadComponent: () => import('./features/experience/views/experience/experience.component').then((m) => m.ExperienceComponent)
  },
  {
    path: 'skills',
    data: { animation: 'skills' },
    loadComponent: () => import('./features/skills/views/skills/skills.component').then((m) => m.SkillsComponent)
  },
  {
    path: 'education',
    data: { animation: 'education' },
    loadComponent: () => import('./features/education/views/education/education.component').then((m) => m.EducationComponent)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
