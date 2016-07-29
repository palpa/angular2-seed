import {ReparationCyclesComponent, ReparationCycleListComponent, ReparationCycleFormComponent} from './index';
import {ReparationCycleTransitionListBaseComponent} from './transitions/transition-list-base.component';

export const PATH = 'reparation-cycles';

export const ReparationCyclesRoutes = [
  {
    path: PATH,
    component: ReparationCyclesComponent,
    children: [
      {
        path: ':id/edit',
        component: ReparationCycleFormComponent
      },
      {
        path: ':id/transitions',
        component: ReparationCycleTransitionListBaseComponent
      },
      {
        path: 'new',
        component: ReparationCycleFormComponent
      },
      {
        path: '',
        component: ReparationCycleListComponent
      }
    ]
  }
];
