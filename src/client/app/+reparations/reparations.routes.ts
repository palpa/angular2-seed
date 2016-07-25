import {RouterConfig} from '@angular/router';
import {ReparationsComponent} from './index';
import {ReparationFormComponent} from './reparation-form.component';
import {ReparationListComponent} from './reparation-list.component';

export const ReparationsRoutes:RouterConfig = [
  {
    path: 'reparations',
    component: ReparationsComponent,
    children: [
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
