import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { ReparationsRoutes } from './+reparations/index';
import { UsersRoutes } from './+users/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...ReparationsRoutes,
  ...UsersRoutes,
  ...AboutRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
