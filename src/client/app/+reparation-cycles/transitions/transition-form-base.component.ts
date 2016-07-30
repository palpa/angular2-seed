import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {ReparationCycleTransitionsService} from './transitions.service';
import {ReparationCycleTransitionFormComponent} from './transition-form.component';

@Component({
  moduleId: module.id,
  template: `<sd-reparation-cycle-transition-form *ngIf="loaded"></sd-reparation-cycle-transition-form>`,
  directives: [ReparationCycleTransitionFormComponent]
})
export class ReparationCycleTransitionFormBaseComponent implements OnInit, OnDestroy {
  loaded:boolean = false;
  private sub:any;

  constructor(private route:ActivatedRoute,
              private http:Http) {
  }

  ngOnInit() {
    console.log('loading');
    this.sub = this.route.params.subscribe(params => {
      ReparationCycleTransitionsService.SERVICE = new ReparationCycleTransitionsService(this.http, +params['cycleId']);
      this.loaded = true;
      console.log('loaded');
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
