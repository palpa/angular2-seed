import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {BaseFormComponent} from '../../shared/index';
import {ReparationCycleTransitionsService} from './transitions.service';
import {StateDescriptionsService, StateDescription} from '../../+state-descriptions/index';
import {Observable} from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-cycle-transition-form',
  templateUrl: 'transition-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ReparationCycleTransitionFormComponent extends BaseFormComponent<any> {
  formName:String = 'Transición';
  stateDescriptions:Observable<StateDescription[]>;

  private emptyItem:any = {
    id: -1,
    startStateDescriptionId: -1,
    endStateDescriptionId: -1,
    lastUpdated: null
  };

  protected buildFormFor(item:any):FormGroup {
    let form = this.fb.group({
      'startStateDescriptionId': [item.startStateDescriptionId, Validators.required],
      'endStateDescriptionId': [item.endStateDescriptionId, Validators.required]
    });

    if (this.editing())
      form.addControl('lastUpdated', new FormControl(item.lastUpdated, Validators.required));

    return form;
  }

  protected getEmptyItem():any {
    return this.emptyItem;
  }

  constructor(route:ActivatedRoute,
              stateDescriptions:StateDescriptionsService,
              router:Router,
              private fb:FormBuilder) {
    super(ReparationCycleTransitionsService.SERVICE, ReparationCycleTransitionsService.SERVICE.path, route, router);
    this.stateDescriptions = stateDescriptions.getAll();
  }
}
