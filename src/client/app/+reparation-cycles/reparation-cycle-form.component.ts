import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {BaseFormComponent} from '../shared/base-form.component';
import {ReparationCycle, PATH} from './index';
import {ReparationCyclesService} from './reparation-cycles.service';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-cycle-form',
  templateUrl: 'reparation-cycle-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ReparationCycleFormComponent extends BaseFormComponent<ReparationCycle> {
  formName:String = 'Ciclo de Reparación';

  private emptyItem:ReparationCycle = {
    id: -1,
    name: '',
    initStateDescriptionId: -1,
    lastUpdated: null
  };

  protected buildFormFor(item:ReparationCycle):FormGroup {
    let form = this.fb.group({'name': [item.name, Validators.required]});

    if (this.editing())
      form.addControl('lastUpdated', new FormControl(item.lastUpdated, Validators.required));

    return form;
  }

  protected getEmptyItem():ReparationCycle {
    return this.emptyItem;
  }

  constructor(service:ReparationCyclesService,
              route:ActivatedRoute,
              router:Router,
              private fb:FormBuilder) {
    super(service, PATH, route, router);
  }
}
