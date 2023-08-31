import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'skills',
        loadComponent: () => import('@pages/skills/skills.component').then(m => m.SkillsComponent),
      }
    ]
  }
];
