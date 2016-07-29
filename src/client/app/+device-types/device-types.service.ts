import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BaseService} from '../shared/index';
import {DeviceType, PATH} from './index';

@Injectable()
export class DeviceTypesService extends BaseService<DeviceType> {
  constructor(http:Http) {
    super(http, PATH);
  }
}
