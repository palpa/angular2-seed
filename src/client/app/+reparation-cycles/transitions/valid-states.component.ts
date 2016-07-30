import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseComponent} from './base.component';
import {ReparationCycleTransitionsService} from './transitions.service';
import {Observable} from 'rxjs/Rx';
import {DeviceTypesService} from '../../+device-types/index';

@Component({
  moduleId: module.id,
  templateUrl: 'valid-states.component.html',
  directives: []
})
export class ReparationCycleTransitionValidStatesComponent extends BaseComponent {
  private sub2:any;
  notFoundItemsText:string = 'No se encontraron estados válidos...';
  list:any[] = [];
  deviceTypes:Observable<any[]>;

  ngOnInit() {
    super.ngOnInit();
    this.sub2 = this.route.params.subscribe(params => {
      const id = +params['id'];
      console.log('id', id);
      ReparationCycleTransitionsService.SERVICE.getValidDeviceTypes(id).subscribe(list => this.list = list);
    });
  }

  close() {
    this.router.navigate(['/' + ReparationCycleTransitionsService.SERVICE.path]);
  }

  ngOnDestroy() {
    this.sub2.unsubscribe();
    super.ngOnDestroy();
  }

  constructor(route:ActivatedRoute,
              private router:Router,
              http:Http,
              deviceTypes:DeviceTypesService) {
    super(route, http);
    this.deviceTypes = deviceTypes.getAll();
  }
}
