import {Injectable} from '@angular/core';
import {BaseService} from '../shared/index';
import {Http} from '@angular/http';
import {ReparationCycle, PATH} from './index';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ReparationCyclesService extends BaseService<ReparationCycle> {
  constructor(http:Http) {
    super(http, PATH);
  }

  getNewValidStates(reparationCycleId:number,
                    stateDescriptionId:number,
                    deviceTypeId:number):Observable<any[]> {
    return this.getSubResource(reparationCycleId,
      `next-valid-states/?currentStateDescId=${stateDescriptionId}&deviceTypeId=${deviceTypeId}`);
  }
}

