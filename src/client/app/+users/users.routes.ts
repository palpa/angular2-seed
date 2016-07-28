import {UsersComponent, UsersListComponent} from './index';
import {UserFormComponent} from './user-form.component';

export const UsersRoutes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/edit',
        component: UserFormComponent
      },
      {
        path: 'new',
        component: UserFormComponent
      },
      {
        path: '',
        component: UsersListComponent
      }
    ]
  },
];
