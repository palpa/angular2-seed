import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {BaseComponent} from './base.component';
import {ReparationCycleTransitionsService} from './transitions.service';

@Component({
  moduleId: module.id,
  template: `
<div *ngIf="loaded">
<h3>Estados Válidos de Reparación</h3>
<p *ngFor="let obj of validDeviceTypes | async" [value]="obj.id">{{obj.name}}</p>
</div>
`,
  directives: []
})
export class ReparationCycleTransitionValidStatesComponent extends BaseComponent {
  private sub:any;
  validDeviceTypes;

  constructor(route:ActivatedRoute, http:Http) {
    super(route, http);
  }

  ngOnInit() {
    super.ngOnInit();
    this.sub = this.route.params.subscribe(params => {
      const id = +params['id'];
      console.log('id', id);
      this.validDeviceTypes = ReparationCycleTransitionsService.SERVICE.getValidDeviceTypes(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    super.ngOnDestroy();
  }
}
