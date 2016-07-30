import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {ReparationCycleTransitionListComponent} from './transition-list.component';
import {BaseComponent} from './base.component';

@Component({
  moduleId: module.id,
  template: `<sd-reparation-cycle-transition-list *ngIf="loaded"></sd-reparation-cycle-transition-list>`,
  directives: [ReparationCycleTransitionListComponent]
})
export class ReparationCycleTransitionListBaseComponent extends BaseComponent {
  constructor(route:ActivatedRoute, http:Http) {
    super(route, http);
  }
}
