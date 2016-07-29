import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {User, UsersService} from '../+users/index';
import {DeviceType, DeviceTypesService} from '../+device-types/index';
import {ReparationCycle, ReparationCyclesService} from '../+reparation-cycles/index';
import {ReparationsService, Reparation, PATH} from './index';
import {BaseFormComponent} from '../shared/base-form.component';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-form',
  templateUrl: 'reparation-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ReparationFormComponent extends BaseFormComponent<Reparation> {
  formName:String = 'Reparación';
  responsibles:Observable<User[]>;
  deviceTypes:Observable<DeviceType[]>;
  reparationCycles:Observable<ReparationCycle[]>;

  private emptyItem:any = {
    id: -1,
    failure: '',
    deviceSerialNumber: '',
    deviceTypeId: -1,
    reparationCycleId: -1,
    lastUpdated: null
  };

  protected buildFormFor(item:Reparation):FormGroup {
    return this.fb.group({
      'failure': [item.failure, Validators.required],
      'deviceSerialNumber': [item.deviceSerialNumber, Validators.required],
      'responsibleShopWorkerId': [-1, Validators.required],
      'deviceTypeId': [item.deviceTypeId, Validators.required],
      'reparationCycleId': [item.reparationCycleId, Validators.required]
    });
  }

  protected getEmptyItem():Reparation {
    return this.emptyItem;
  }

  constructor(service:ReparationsService,
              route:ActivatedRoute,
              router:Router,
              responsibles:UsersService,
              deviceTypes:DeviceTypesService,
              reparationCycles:ReparationCyclesService,
              private fb:FormBuilder) {
    super(service, PATH, route, router);

    this.responsibles = responsibles.getAll();
    this.deviceTypes = deviceTypes.getAll();
    this.reparationCycles = reparationCycles.getAll();
  }
}
