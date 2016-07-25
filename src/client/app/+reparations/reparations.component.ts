import {Component, OnInit} from '@angular/core';
import {ReparationService} from './reparation.service';
import {ROUTER_DIRECTIVES} from '@angular/router';

/**
 * This class represents the lazy loaded ReparationsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-reparations',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['reparations.component.css'],
  providers: [ReparationService],
  directives: [ROUTER_DIRECTIVES]
})
export class ReparationsComponent implements OnInit {

  constructor(private service:ReparationService) {
  }

  ngOnInit() {
    this.service.init().subscribe();
  }
}
