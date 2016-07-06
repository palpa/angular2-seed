import {Component, OnInit, OnDestroy} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

import {UsersService} from './users.service';
import {User} from './User';

/**
 * This class represents the lazy loaded UsersComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-user-form',
  templateUrl: 'user-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class UserFormComponent implements OnInit, OnDestroy {
  user:User;
  editName:string;
  error:string;
  private sub:any;

  /**
   * Creates an instance of the UsersComponent
   *
   * @param usersService
   */
  constructor(public usersService:UsersService,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.loadUser(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  cancel() {
    this.gotoUserList();
  }

  reload() {
    this.loadUser(this.user.id);
    this.error = null;
  }

  save() {
    const editedUser:User = Object.assign({}, this.user, {username: this.editName});
    this.usersService.edit(editedUser).subscribe(() => {
        this.gotoUserList();
      }, (err) => this.error = err ? err.json().message : null
    );
  }

  gotoUserList() {
    const userId = this.user ? this.user.id : null;
    this.router.navigate(['/users'], {queryParams: {id: userId}});
  }

  private loadUser(id:number) {
    this.usersService.getUser(id).subscribe(user => {
      this.user     = user;
      this.editName = user.username;
    }, errMsg => {
      alert(errMsg);
      this.gotoUserList();
    });
  }
}
