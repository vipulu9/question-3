import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'moduleA',
    loadComponent: () => 
        import('./moduleA/component-a/component-a.component').then(mod => mod.ComponentAComponent),
     
  },
  {
    path: 'moduleB',
    loadComponent: () => 
        import('./moduleB/component-b/component-b.component').then(mod => mod.ComponentBComponent),
     
  },
  {
    path: '**',
    redirectTo: 'moduleA',
  },
];
