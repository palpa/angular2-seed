import {Component, OnInit, OnDestroy} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {UsersService} from './users.service';
import {User} from './User';
import {Observable} from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'sd-user-form',
  templateUrl: 'user-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class UserFormComponent implements OnInit, OnDestroy {
  error:string;
  form:FormGroup;

  private emptyItem:User = {
    id: -1,
    username: '',
    lastUpdated: null
  };
  private item:User;
  private sub:any;

  constructor(private service:UsersService,
              private fb:FormBuilder,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.init(+params['id']);
    });
  }

  onSubmit() {
    const value = this.form.value;
    console.log('submitted:', value);

    const operation:Observable<User> = (this.editing()) ?
      this.service.edit(this.item.id, value) : this.service.add(value);

    operation.subscribe(()=> {
        this.goBack();
      }, (err) => this.error = err.message
    );
  }

  editing() {
    return this.item.id !== -1;
  }

  reload() {
    this.init(this.item.id);
  }

  cancel() {
    this.goBack();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private init(id:number) {
    this.error = null;

    this.loadItem(id).subscribe(item => {
      this.item = item;
      this.buildFormFor(item);
    }, err => {
      alert(err.message);
      this.goBack();
    });
  }

  private loadItem(id:number):Observable<User> {
    return (Number.isNaN(id)) ?
      Observable.create((obs:any) => {
        obs.next(this.emptyItem);
        obs.complete();
      }) : this.service.get(id);
  }

  private buildFormFor(item:User) {
    this.form = this.fb.group({'username': [item.username, Validators.required]});

    if (this.editing())
      this.form.addControl('lastUpdated', new FormControl(item.lastUpdated, Validators.required));
  }

  private goBack() {
    this.router.navigate(['/users']);
  }
}
