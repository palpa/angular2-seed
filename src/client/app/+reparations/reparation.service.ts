import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BaseService} from '../shared/index';
import {Reparation} from './Reparation';

@Injectable()
export class ReparationsService extends BaseService<Reparation> {
  constructor(http:Http) {
    super(http, 'reparations');
  }
}
