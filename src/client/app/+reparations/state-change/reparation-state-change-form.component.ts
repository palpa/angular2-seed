import {Component, OnDestroy, OnInit} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {User, UsersService} from '../../+users/index';
import {ReparationCyclesService} from '../../+reparation-cycles/index';
import {Reparation, ReparationsService} from '../index';

@Component({
  moduleId: module.id,
  selector: 'sd-reparation-state-change-form',
  templateUrl: 'reparation-state-change-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ReparationStateChangeFormComponent implements OnInit, OnDestroy {
  form:FormGroup;
  responsibles:Observable<User[]>;
  newValidStates:Observable<any[]>;
  item:Reparation;
  private sub:any;

  constructor(private reparations:ReparationsService,
              private reparationCycles:ReparationCyclesService,
              private router:Router,
              private route:ActivatedRoute,
              fb:FormBuilder,
              responsibles:UsersService) {

    this.responsibles = responsibles.getAll();

    this.form = fb.group({
      'comments': ['', Validators.required],
      'newReparationStateDescId': ['', Validators.required],
      'responsibleShopWorkerId': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.load(+params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    const value = this.form.value;
    console.log('submitted:', value);
    this.reparations.changeState(this.item.id, value)
      .subscribe(()=>this.goBack());
  }

  goBack() {
    this.router.navigate(['/reparations']);
  }

  private load(id:number) {
    this.reparations.get(id).subscribe(item=> {
      this.init(item);
    }, (err)=> {
      console.error(err);
      this.goBack();
    });
  }

  private init(item:Reparation) {
    this.item = item;
    this.form.addControl('lastUpdated', new FormControl(item.lastUpdated, Validators.required));
    this.newValidStates =
      this.reparationCycles.getNewValidStates(
        item.reparationCycleId,
        item.currentStateDescriptionId,
        item.deviceTypeId);
  }
}
