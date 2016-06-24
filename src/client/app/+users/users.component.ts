import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {UsersService} from './users.service';

/**
 * This class represents the lazy loaded UsersComponent.
 */
@Component({
  template: `
    <h2>USUARIOS</h2>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [UsersService]
})
export class UsersComponent {
}
