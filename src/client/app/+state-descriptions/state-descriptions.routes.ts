import {StateDescriptionsComponent, StateDescriptionListComponent, StateDescriptionFormComponent} from './index';

export const PATH =  'reparation-states-descriptions';

export const StateDescriptionsRoutes = [
  {
    path: PATH,
    component: StateDescriptionsComponent,
    children: [
      {
        path: ':id/edit',
        component: StateDescriptionFormComponent
      },
      {
        path: 'new',
        component: StateDescriptionFormComponent
      },
      {
        path: '',
        component: StateDescriptionListComponent
      }
    ]
  }
];
