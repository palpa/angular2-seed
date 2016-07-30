import {ReparationCyclesComponent, ReparationCycleListComponent, ReparationCycleFormComponent} from './index';
import {ReparationCycleTransitionListBaseComponent} from './transitions/transition-list-base.component';
import {ReparationCycleTransitionFormBaseComponent} from './transitions/transition-form-base.component';
import {ReparationCycleTransitionValidStatesComponent} from './transitions/valid-states.component';

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
        path: ':cycleId/transitions/:id/valid-device-types',
        component: ReparationCycleTransitionValidStatesComponent
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
