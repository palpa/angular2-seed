import {UsersComponent, UsersListComponent} from './index';
import {UserFormComponent} from "./user-form.component";

export const UsersRoutes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id',
        component: UserFormComponent
      },
      {
        path: '',
        component: UsersListComponent
      }
    ]
  },
];
