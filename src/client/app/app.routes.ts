import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { ReparationsRoutes } from './+reparations/index';
import { UsersRoutes } from './+users/index';
import { DeviceTypesRoutes } from './+device-types/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...ReparationsRoutes,
  ...UsersRoutes,
  ...DeviceTypesRoutes,
  ...AboutRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
