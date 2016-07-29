import {ReparationCyclesComponent, ReparationCycleListComponent, ReparationCycleFormComponent} from './index';

export const PATH =  'reparation-cycles';

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
