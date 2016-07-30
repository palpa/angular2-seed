import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {ReparationCycleTransitionListComponent} from './transition-list.component';
import {BaseComponent} from './base.component';

@Component({
  moduleId: module.id,
  template: `
<div *ngIf="loaded">
<h3>Estados Válidos de Reparación</h3>
</div>
`,
  directives: [ReparationCycleTransitionListComponent]
})
export class ReparationCycleTransitionValidStatesComponent extends BaseComponent {
  constructor(route:ActivatedRoute, http:Http) {
    super(route, http);
  }
}
