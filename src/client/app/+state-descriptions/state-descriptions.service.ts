import {Injectable} from '@angular/core';
import {BaseService} from '../shared/index';
import {Http} from '@angular/http';
import {StateDescription, PATH} from './index';

@Injectable()
export class StateDescriptionsService extends BaseService<StateDescription> {
  constructor(http:Http) {
    super(http, PATH);
  }

}

