import {RouterConfig} from '@angular/router';
import {ReparationsComponent} from './index';
import {ReparationFormComponent} from './reparation-form.component';
import {ReparationListComponent} from './reparation-list.component';
import {ReparationHistoricStatesComponent} from './historic-states/reparation-historic-states.component';

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
