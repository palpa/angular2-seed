import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BaseListComponent} from '../../shared/index';
import {ReparationCycleTransitionsService} from './transitions.service';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-cycle-transition-list',
  templateUrl: 'transition-list.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ReparationCycleTransitionListComponent extends BaseListComponent<any> {
  resourceLink:string = ReparationCycleTransitionsService.SERVICE.path;
  newButtonText:string = 'Nueva Transición';
  notFoundItemsText:string = 'No se encontraron transiciones...';

  constructor() {
    super(ReparationCycleTransitionsService.SERVICE);
  }
}
