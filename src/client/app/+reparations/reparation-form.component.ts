import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-form',
  templateUrl: 'reparation-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ReparationFormComponent {
  form:FormGroup;

  public deviceTypes      = [{id: 1, name: 'calefon'}];
  public responsibles     = [{id: 1, name: 'juan'}];
  public reparationCycles = [{id: 1, name: 'Normal'}];

  constructor(fb:FormBuilder) {
    this.form = fb.group({
      'failure': ['', Validators.required],
      'deviceSerialNumber': ['', Validators.required],
      'responsibleShopWorkerId': [],
      'deviceTypeId': [],
      'reparationCycleId': []
    });
  }

  onSubmit() {
    console.log('model-based form submitted');
    console.log(this.form);
  }
}
