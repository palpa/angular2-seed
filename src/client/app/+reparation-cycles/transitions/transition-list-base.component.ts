import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {ReparationCycleTransitionsService} from './transitions.service';
import {ReparationCycleTransitionListComponent} from './transition-list.component';

@Component({
  moduleId: module.id,
  template: `<sd-reparation-cycle-transition-list *ngIf="loaded"></sd-reparation-cycle-transition-list>`,
  directives: [ReparationCycleTransitionListComponent]
})
export class ReparationCycleTransitionListBaseComponent implements OnInit, OnDestroy {
  loaded:boolean = false;
  private sub:any;

  constructor(private route:ActivatedRoute,
              private http:Http) {
  }

  ngOnInit() {
    console.log('loading');
    this.sub = this.route.params.subscribe(params => {
      ReparationCycleTransitionsService.SERVICE = new ReparationCycleTransitionsService(this.http, +params['id']);
      this.loaded = true;
      console.log('loaded');
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
