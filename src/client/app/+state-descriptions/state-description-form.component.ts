import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {BaseFormComponent} from '../shared/base-form.component';
import {StateDescription, PATH} from './index';
import {StateDescriptionsService} from './state-descriptions.service';

@Component({
  moduleId: module.id,
  selector: 'sd-state-description-form',
  templateUrl: 'state-description-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class StateDescriptionFormComponent extends BaseFormComponent<StateDescription> {
  formName:String = 'Estado de Reparación';

  private emptyItem:StateDescription = {
    id: -1,
    name: '',
    finalState: false,
    lastUpdated: null
  };

  protected buildFormFor(item:StateDescription):FormGroup {
    let form = this.fb.group(
      {
        'name': [item.name, Validators.required],
        'finalState': [item.finalState, Validators.required]
      }
    );

    if (this.editing())
      form.addControl('lastUpdated', new FormControl(item.lastUpdated, Validators.required));

    return form;
  }

  protected getEmptyItem():StateDescription {
    return this.emptyItem;
  }

  constructor(service:StateDescriptionsService,
              route:ActivatedRoute,
              router:Router,
              private fb:FormBuilder) {
    super(service, PATH, route, router);
  }
}
