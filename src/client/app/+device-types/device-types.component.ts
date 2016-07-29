import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sd-device-types',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['device-types.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class DeviceTypesComponent {
}
