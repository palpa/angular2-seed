import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BaseListComponent} from '../shared/index';
import {ReparationCyclesService} from './reparation-cycles.service';
import {ReparationCycle, PATH} from './index';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-cycle-list',
  templateUrl: 'reparation-cycle-list.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ReparationCycleListComponent extends BaseListComponent<ReparationCycle> {
  resourceLink:string = PATH;
  newButtonText:string = 'Nuevo Ciclo de Reparación';
  notFoundItemsText:string = 'No se encontraron ciclos de raparación...';

  constructor(service:ReparationCyclesService) {
    super(service);
  }
}
