import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/exams', pathMatch: 'full' },
  {
    path: 'exams',
    loadComponent: () =>
      import('./components/exams-list/exams-list.component').then(
        (m) => m.ExamsListComponent
      ),
  },
];
