import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BaseService} from '../shared/index';
import {User, PATH} from './index';

@Injectable()
export class UsersService extends BaseService<User> {
  constructor(http:Http) {
    super(http, PATH);
  }
}

