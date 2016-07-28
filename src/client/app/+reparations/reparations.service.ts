import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BaseService} from '../shared/index';
import {Reparation} from './index';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ReparationsService extends BaseService<Reparation> {
  constructor(http:Http) {
    super(http, 'reparations');
  }

  getHistoricStates(id:number):Observable<any[]> {
    return this.getSubResource(id, 'historic-states');
  }

  changeState(id:number, value:any) {
    return this.postSubResource(id, 'state-change', value);
  }


}
