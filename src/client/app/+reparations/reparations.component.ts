import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ReparationsService} from './index';

/**
 * This class represents the lazy loaded ReparationsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-reparations',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['reparations.component.css'],
  providers: [ReparationsService],
  directives: [ROUTER_DIRECTIVES]
})
export class ReparationsComponent {
}
