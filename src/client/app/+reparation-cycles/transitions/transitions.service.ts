import {BaseService} from '../../shared/index';
import {Http} from '@angular/http';
import {PATH} from '../index';
import {Observable} from 'rxjs/Rx';

export class ReparationCycleTransitionsService extends BaseService<any> {
  public static SERVICE:ReparationCycleTransitionsService;
  public path:string;
  private validDeviceTypes = 'valid-device-types';

  getValidDeviceTypes(transitionId:number):Observable<any[]> {
    return this.getSubResource(transitionId, this.validDeviceTypes);
  }

  postValidDeviceType(transitionId:number, value:any):Observable<any[]> {
    return this.postSubResource(transitionId, this.validDeviceTypes, value);
  }

  constructor(http:Http, id:number) {
    const path = PATH + '/' + id + '/transitions';
    super(http, path);
    this.path = path;
  }
}

