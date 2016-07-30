import {Component, OnInit, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseComponent} from './base.component';
import {ReparationCycleTransitionsService} from './transitions.service';
import {Observable} from 'rxjs/Rx';
import {DeviceTypesService} from '../../+device-types/index';
import {FormControl, Validators, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';

@Component({
  moduleId: module.id,
  templateUrl: 'valid-states.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ReparationCycleTransitionValidStatesComponent extends BaseComponent implements OnInit, OnDestroy {
  error:string;
  notFoundItemsText:string = 'No se encontraron estados válidos...';
  list:any[] = [];
  deviceTypeControl:FormControl = new FormControl('', Validators.required);
  deviceTypes:Observable<any[]>;
  private sub2:any;
  private transitionId:number;

  ngOnInit() {
    super.ngOnInit();
    this.sub2 = this.route.params.subscribe(params => {
      this.transitionId = +params['id'];
      this.reload();
    });
  }

  add() {
    const value = this.deviceTypeControl.value;
    console.log('submitted:', value);
    ReparationCycleTransitionsService.SERVICE.postValidDeviceType(this.transitionId, {deviceTypeId: +value})
      .subscribe(()=> {
        this.reload();
      }, (err) => this.error = err.message);
  }

  close() {
    this.router.navigate(['/' + ReparationCycleTransitionsService.SERVICE.path]);
  }

  constructor(route:ActivatedRoute,
              private router:Router,
              http:Http,
              deviceTypes:DeviceTypesService) {
    super(route, http);
    this.deviceTypes = deviceTypes.getAll();
  }

  ngOnDestroy() {
    this.sub2.unsubscribe();
    super.ngOnDestroy();
  }

  private reload() {
    this.error = null;
    ReparationCycleTransitionsService.SERVICE.getValidDeviceTypes(this.transitionId)
      .subscribe(list => this.list = list);
  }
}
