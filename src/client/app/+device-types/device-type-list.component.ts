import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BaseListComponent} from '../shared/index';
import {DeviceTypesService} from './device-types.service';
import {DeviceType, PATH} from './index';

@Component({
  moduleId: module.id,
  selector: 'sd-device-type-list',
  templateUrl: 'device-type-list.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DeviceTypeListComponent extends BaseListComponent<DeviceType> {
  resourceLink:string = PATH;
  newButtonText:string = 'Nuevo Tipo de Equipo';
  notFoundItemsText:string = 'No se encontraron tipos de equipo...';

  constructor(service:DeviceTypesService) {
    super(service);
  }
}
