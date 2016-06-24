import {UsersComponent, UsersListComponent} from './index';

export const UsersRoutes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersListComponent
      }
    ]
  },
];
