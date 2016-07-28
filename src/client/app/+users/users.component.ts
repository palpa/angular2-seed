import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sd-workers',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['users.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent {
}
