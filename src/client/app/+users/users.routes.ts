import {UsersComponent, UsersListComponent} from './index';
import {UserFormComponent} from './user-form.component';

export const PATH =  'workers';

export const UsersRoutes = [
  {
    path: PATH,
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
