import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BaseListComponent} from '../shared/index';
import {Reparation, ReparationsService, PATH} from './index';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-list',
  templateUrl: 'reparation-list.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class ReparationListComponent extends BaseListComponent<Reparation> {
  resourceLink:string = PATH;
  newButtonText:string = 'Nueva Reparación';
  notFoundItemsText:string = 'No se encontraron reparaciones...';

  constructor(service:ReparationsService) {
    super(service);
  }
}
