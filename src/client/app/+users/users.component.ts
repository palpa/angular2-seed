import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {UsersService} from './users.service';

/**
 * This class represents the lazy loaded UsersComponent.
 */
@Component({
  template: `
    <style>
      h2 {
        font-size: 12px;
        font-weight: bold;
      }
      :host {
        display: block;
        padding: 0 16px;
      }
    </style>
    <h2>Reparadores</h2>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [UsersService]
})
export class UsersComponent {
  constructor(service:UsersService) {
    service.init().subscribe();
  }
}
