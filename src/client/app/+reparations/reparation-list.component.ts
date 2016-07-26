import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {ReparationsService} from './reparation.service';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Reparation} from './Reparation';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-list',
  templateUrl: 'reparation-list.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class ReparationListComponent {
  list:Reparation[] = [];

  constructor(service:ReparationsService) {
    service.getAll().subscribe(list => this.list = list);
  }
}
