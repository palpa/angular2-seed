import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {ReparationCycleTransitionFormComponent} from './transition-form.component';
import {BaseComponent} from './base.component';

@Component({
  moduleId: module.id,
  template: `<sd-reparation-cycle-transition-form *ngIf="loaded"></sd-reparation-cycle-transition-form>`,
  directives: [ReparationCycleTransitionFormComponent]
})
export class ReparationCycleTransitionFormBaseComponent extends BaseComponent {
  constructor(route:ActivatedRoute, http:Http) {
    super(route, http);
  }
}
