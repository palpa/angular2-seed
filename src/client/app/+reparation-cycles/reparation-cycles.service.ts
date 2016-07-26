import {Injectable} from '@angular/core';
import {BaseService} from '../shared/index';
import {Http} from '@angular/http';
import {ReparationCycle} from './reparation-cycle';

@Injectable()
export class ReparationCyclesService extends BaseService<ReparationCycle> {
  constructor(http:Http) {
    super(http, 'reparation-cycles');
  }
}

