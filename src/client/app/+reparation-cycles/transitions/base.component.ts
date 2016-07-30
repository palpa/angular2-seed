import {OnDestroy, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {ReparationCycleTransitionsService} from './transitions.service';


export class BaseComponent implements OnInit, OnDestroy {
  loaded:boolean = false;
  service;
  private sub:any;

  constructor(protected route:ActivatedRoute,
              private http:Http) {
  }

  ngOnInit() {
    console.log('loading');
    this.sub = this.route.params.subscribe(params => {
      ReparationCycleTransitionsService.SERVICE = new ReparationCycleTransitionsService(this.http, +params['cycleId']);
      this.service = ReparationCycleTransitionsService.SERVICE;
      this.loaded = true;
      console.log('loaded');
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
