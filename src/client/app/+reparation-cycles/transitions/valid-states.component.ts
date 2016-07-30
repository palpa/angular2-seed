import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {BaseComponent} from './base.component';
import {ReparationCycleTransitionsService} from './transitions.service';
import {Observable} from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  template: `
<div *ngIf="loaded">
<h3>Estados Válidos de Reparación</h3>
<p *ngFor="let obj of validDeviceTypes | async">{{obj.name}}</p>
</div>
`,
  directives: []
})
export class ReparationCycleTransitionValidStatesComponent extends BaseComponent {
  private sub2:any;
  validDeviceTypes: Observable<any[]>;

  constructor(route:ActivatedRoute, http:Http) {
    super(route, http);
  }

  ngOnInit() {
    super.ngOnInit();
    this.sub2 = this.route.params.subscribe(params => {
      const id = +params['id'];
      console.log('id', id);
      this.validDeviceTypes = ReparationCycleTransitionsService.SERVICE.getValidDeviceTypes(id);
    });
  }

  ngOnDestroy() {
    this.sub2.unsubscribe();
    super.ngOnDestroy();
  }
}
