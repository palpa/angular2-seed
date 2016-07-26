import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {ReparationsService} from '../index';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-historic-states',
  templateUrl: 'reparation-historic-states.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ReparationHistoricStatesComponent implements OnInit, OnDestroy {
  list:any[] = [];
  private sub:any;

  constructor(private reparations:ReparationsService,
              private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.loadList(+params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private loadList(id:number) {
    this.reparations.getHistoricStates(id).subscribe(list=>this.list = list);
  }
}
