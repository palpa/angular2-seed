import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {User, UsersService} from '../+users/index';
import {DeviceType, DeviceTypesService} from '../+device-types/index';
import {ReparationCycle, ReparationCyclesService} from '../+reparation-cycles/index';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-form',
  templateUrl: 'reparation-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ReparationFormComponent {
  responsibles:Observable<User[]>;
  deviceTypes:Observable<DeviceType[]>;
  reparationCycles:Observable<ReparationCycle[]>;
  form:FormGroup;

  constructor(fb:FormBuilder,
              responsibles:UsersService,
              deviceTypes:DeviceTypesService,
              reparationCycles:ReparationCyclesService) {
    this.responsibles = responsibles.getAll();
    this.deviceTypes = deviceTypes.getAll();
    this.reparationCycles = reparationCycles.getAll();

    this.form = fb.group({
      'failure': ['', Validators.required],
      'deviceSerialNumber': ['', Validators.required],
      'responsibleShopWorkerId': ['', Validators.required],
      'deviceTypeId': ['', Validators.required],
      'reparationCycleId': ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('model-based form submitted');
    console.log(this.form);
  }
}
