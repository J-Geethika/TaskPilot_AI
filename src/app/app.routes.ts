import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Tasks } from './pages/tasks/tasks';
import { AiPlanner } from './pages/ai-planner/ai-planner';
import { Analytics } from './pages/analytics/analytics';
import { Profile } from './pages/profile/profile';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard')
      .then(m => m.Dashboard)
  },

  {
    path: 'tasks',
    loadComponent: () =>
      import('./pages/tasks/tasks')
      .then(m => m.Tasks)
  },

  {
    path: 'ai-planner',
    loadComponent: () =>
      import('./pages/ai-planner/ai-planner')
      .then(m => m.AiPlanner)
  },

  {
    path: 'team',
    loadComponent: () =>
      import('./pages/team/team')
      .then(m => m.Team)
  },

  {
    path: 'calendar',
    loadComponent: () =>
      import('./pages/calendar/calendar')
      .then(m => m.Calendar)
  },

  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile')
      .then(m => m.Profile)
  },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }

];