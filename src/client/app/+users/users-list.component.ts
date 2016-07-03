import {Component, OnInit, OnDestroy} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {Router} from '@angular/router';

import {UsersService} from './users.service';

/**
 * This class represents the lazy loaded UsersComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-users',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class UsersListComponent implements OnInit, OnDestroy {

  newName:string;
  private selectedId:number;
  private sub:any;

  /**
   * Creates an instance of the UsersComponent
   *
   * @param usersService
   */
  constructor(public usersService:UsersService, private router:Router) {
  }

  ngOnInit() {
    this.sub = this.router
      .routerState
      .queryParams
      .subscribe(params => {
        this.selectedId = +params['id'];
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Calls the add method.
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addUser():boolean {
    this.usersService.add(this.newName);
    this.newName = '';
    return false;
  }

  isSelected(user) {
    return user.id === this.selectedId;
  }

  onSelect(user) {
    this.router.navigate(['/users'], {queryParams: {id: user.id}});
  }

  remove(user) {
    this.usersService.remove(user);
  }

  edit(user) {
    this.usersService.edit(user);
  }

}
