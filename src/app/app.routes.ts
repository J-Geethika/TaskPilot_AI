import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Tasks } from './pages/tasks/tasks';
import { AiPlanner } from './pages/ai-planner/ai-planner';
import { Analytics } from './pages/analytics/analytics';
import { Profile } from './pages/profile/profile';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'tasks', component: Tasks },
  { path: 'planner', component: AiPlanner },
  { path: 'analytics', component: Analytics },
  { path: 'profile', component: Profile }
];