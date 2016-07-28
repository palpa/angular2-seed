import {RouterConfig} from '@angular/router';
import {ReparationsComponent} from './index';
import {ReparationFormComponent} from './reparation-form.component';
import {ReparationListComponent} from './reparation-list.component';
import {ReparationHistoricStatesComponent} from './historic-states/reparation-historic-states.component';
import {ReparationStateChangeFormComponent} from './state-change/reparation-state-change-form.component';

export const ReparationsRoutes:RouterConfig = [
  {
    path: 'reparations',
    component: ReparationsComponent,
    children: [
      {
        path: ':id/historic-states',
        component: ReparationHistoricStatesComponent
      },
      {
        path: ':id/state-change',
        component: ReparationStateChangeFormComponent
      },
      {
        path: 'new',
        component: ReparationFormComponent
      },
      {
        path: '',
        component: ReparationListComponent
      }
    ]
  }
];
