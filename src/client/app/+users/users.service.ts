import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BaseService} from '../shared/index';

@Injectable()
export class UsersService extends BaseService {
  constructor(private http:Http) {
    super(http, 'workers');
  }
}

