import {DeviceTypesComponent, DeviceTypeListComponent, DeviceTypeFormComponent} from './index';

export const PATH =  'device-types';

export const DeviceTypesRoutes = [
  {
    path: PATH,
    component: DeviceTypesComponent,
    children: [
      {
        path: ':id/edit',
        component: DeviceTypeFormComponent
      },
      {
        path: 'new',
        component: DeviceTypeFormComponent
      },
      {
        path: '',
        component: DeviceTypeListComponent
      }
    ]
  }
];
