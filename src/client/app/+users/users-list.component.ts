import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BaseListComponent} from '../shared/index';
import {User, PATH} from './index';
import {UsersService} from './users.service';

@Component({
  moduleId: module.id,
  selector: 'sd-worker-list',
  templateUrl: 'users-list.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class UsersListComponent extends BaseListComponent<User> {
  resourceLink:string = PATH;
  newButtonText:string = 'Nuevo Reparador';
  notFoundItemsText:string = 'No se encontraron reparadores...';

  constructor(service:UsersService) {
    super(service);
  }
}
