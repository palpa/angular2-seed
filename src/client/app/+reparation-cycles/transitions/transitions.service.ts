import {BaseService} from '../../shared/index';
import {Http} from '@angular/http';
import {PATH} from '../index';

export class ReparationCycleTransitionsService extends BaseService<any> {
  public static SERVICE:ReparationCycleTransitionsService;
  public path:string;

  constructor(http:Http, id:number) {
    const path = PATH + '/' + id + '/transitions';
    super(http, path);
    this.path = path;
  }
}

