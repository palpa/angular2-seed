import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';

import { UsersService } from './users.service';

/**
 * This class represents the lazy loaded UsersComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-users',
  templateUrl: 'users-list.component.html',
  //styleUrls: ['users.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class UsersListComponent {

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
