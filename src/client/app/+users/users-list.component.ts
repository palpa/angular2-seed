import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

import {UsersService} from './users.service';
import {User} from './User';

/**
 * This class represents the lazy loaded UsersComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-users',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
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

  isSelected(user:User) {
    return user.id === this.selectedId;
  }

  onSelect(user:User) {
    this.router.navigate(['/users'], {queryParams: {id: user.id}});
  }

  remove(user:User) {
    this.usersService.remove(user).subscribe(() => console.log('ok')
      , (errMsg) => alert(errMsg)
    );
  }

}
