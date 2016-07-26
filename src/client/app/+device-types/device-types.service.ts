import {Injectable} from '@angular/core';
import {DeviceType} from './device-type';
import {BaseService} from '../shared/index';
import {Http} from '@angular/http';

@Injectable()
export class DeviceTypesService extends BaseService<DeviceType> {
  constructor(http:Http) {
    super(http, 'device-types');
  }
}

