import {Component, OnInit} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Reparation, ReparationsService} from './index';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-list',
  templateUrl: 'reparation-list.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class ReparationListComponent implements OnInit {
  list:Reparation[] = [];

  constructor(private service:ReparationsService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(list => this.list = list);
  }

  removeItem(item:Reparation) {
    this.service.remove(item).subscribe(() => this.ngOnInit()
      , (errMsg) => alert(errMsg)
    );
  }
}
