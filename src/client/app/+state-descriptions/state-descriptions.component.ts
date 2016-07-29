import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sd-state-descriptions',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['state-descriptions.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class StateDescriptionsComponent {
}
