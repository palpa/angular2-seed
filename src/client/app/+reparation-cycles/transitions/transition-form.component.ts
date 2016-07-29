import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {BaseFormComponent} from '../../shared/index';
import {ReparationCycleTransitionsService} from './transitions.service';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-cycle-form',
  templateUrl: 'reparation-cycle-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ReparationCycleFormComponent extends BaseFormComponent<any> {
  formName:String = 'Ciclo de Reparación';

  private emptyItem:any = {
    id: -1,
    name: '',
    initStateDescriptionId: -1,
    initStateDescriptionName: '',
    lastUpdated: null
  };

  protected buildFormFor(item:any):FormGroup {
    let form = this.fb.group({
      'name': [item.name, Validators.required],
      'initStateDescriptionId': [item.initStateDescriptionId, Validators.required]
    });

    if (this.editing())
      form.addControl('lastUpdated', new FormControl(item.lastUpdated, Validators.required));

    return form;
  }

  protected getEmptyItem():any {
    return this.emptyItem;
  }

  constructor(route:ActivatedRoute,
              router:Router,
              private fb:FormBuilder) {
    super(ReparationCycleTransitionsService.SERVICE, ReparationCycleTransitionsService.SERVICE.path, route, router);
  }
}
