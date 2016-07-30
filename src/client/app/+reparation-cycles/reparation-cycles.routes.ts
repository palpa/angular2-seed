import {ReparationCyclesComponent, ReparationCycleListComponent, ReparationCycleFormComponent} from './index';
import {ReparationCycleTransitionListBaseComponent} from './transitions/transition-list-base.component';
import {ReparationCycleTransitionFormComponent} from './transitions/transition-form.component';
import {ReparationCycleTransitionFormBaseComponent} from './transitions/transition-form-base.component';

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
        path: ':cycleId/transitions',
        component: ReparationCycleTransitionListBaseComponent
      },
      {
        path: ':cycleId/transitions/new',
        component: ReparationCycleTransitionFormBaseComponent
      },
      {
        path: ':cycleId/transitions/:id/edit',
        component: ReparationCycleTransitionFormBaseComponent
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
