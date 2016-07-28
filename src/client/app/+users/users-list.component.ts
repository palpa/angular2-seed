import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {User} from './index';
import {UsersService} from './users.service';

@Component({
  moduleId: module.id,
  selector: 'sd-worker-list',
  templateUrl: 'users-list.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class UsersListComponent implements OnInit {
  list:User[] = [];

  constructor(private service:UsersService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(list => this.list = list);
  }

  removeItem(item:User) {
    this.service.remove(item).subscribe(() => this.ngOnInit()
      , (errMsg) => alert(errMsg)
    );
  }

}
