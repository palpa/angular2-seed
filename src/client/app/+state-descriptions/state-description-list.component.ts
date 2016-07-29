import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BaseListComponent} from '../shared/index';
import {StateDescriptionsService} from './state-descriptions.service';
import {StateDescription, PATH} from './index';

@Component({
  moduleId: module.id,
  selector: 'sd-state-description-list',
  templateUrl: 'state-description-list.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class StateDescriptionListComponent extends BaseListComponent<StateDescription> {
  resourceLink:string = PATH;
  newButtonText:string = 'Nuevo Estado de Reparación';
  notFoundItemsText:string = 'No se encontraron estados de raparación...';

  constructor(service:StateDescriptionsService) {
    super(service);
  }
}
