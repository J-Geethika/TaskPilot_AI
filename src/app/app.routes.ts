import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Tasks } from './pages/tasks/tasks';
import { Profile } from './pages/profile/profile';
import { AiPlanner } from './pages/ai-planner/ai-planner';
import { Analytics } from './pages/analytics/analytics';

export const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'tasks',
    component: Tasks
  },
  {
    path: 'profile',
    component: Profile
  },
  {
    path: 'planner',
    component: AiPlanner
  },
  {
    path: 'analytics',
    component: Analytics
  }
];