import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {BaseFormComponent} from '../shared/base-form.component';
import {DeviceType, PATH} from './index';
import {DeviceTypesService} from './device-types.service';

@Component({
  moduleId: module.id,
  selector: 'sd-device-type-form',
  templateUrl: 'device-type-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class DeviceTypeFormComponent extends BaseFormComponent<DeviceType> {
  formName:String = 'Tipo de Equipo';

  private emptyItem:DeviceType = {
    id: -1,
    name: '',
    lastUpdated: null
  };

  protected buildFormFor(item:DeviceType):FormGroup {
    let form = this.fb.group({'name': [item.name, Validators.required]});

    if (this.editing())
      form.addControl('lastUpdated', new FormControl(item.lastUpdated, Validators.required));

    return form;
  }

  protected getEmptyItem():DeviceType {
    return this.emptyItem;
  }

  constructor(service:DeviceTypesService,
              route:ActivatedRoute,
              router:Router,
              private fb:FormBuilder) {
    super(service, PATH, route, router);
  }
}
