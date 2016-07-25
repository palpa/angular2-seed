import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {ReparationService} from './reparation.service';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-list',
  templateUrl: 'reparation-list.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class ReparationListComponent {
  constructor(public service:ReparationService) {
  }
}
