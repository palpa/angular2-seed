import { FORM_DIRECTIVES } from '@angular/common';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { Component } from '@angular/core';

import { UsersService } from './users.service';

/**
 * This class represents the lazy loaded UsersComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-users',
  templateUrl: 'users.component.html',
  //styleUrls: ['users.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class UsersComponent {

  newName: string;

  /**
   * Creates an instance of the UsersComponent
   *
   * @param usersService
   */
  constructor(public usersService: UsersService) {}

  /**
   * Calls the add method.
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addUser(): boolean {
    this.usersService.add(this.newName);
    this.newName = '';
    return false;
  }

}
