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
  worker:User;
  error:string;
  form:FormGroup;
  private sub:any;

  constructor(private usersService:UsersService,
              private fb:FormBuilder,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params['id'];
      if (Number.isNaN(id)) {
        this.worker = {
          id: -1,
          username: '',
          lastUpdated: null
        };
        this.buildForm(this.worker);
      }
      else
        this.loadUser(id);
    });
  }

  onSubmit() {
    const value = this.form.value;
    console.log('submitted:', value);

    const operation:Observable = (this.editing()) ? this.usersService.edit(this.worker.id, value) : this.usersService.add(value);

    operation.subscribe(()=> {
        this.goBack();
      }, (err) => this.error = err ? err.json().message : null
    );
  }

  editing() {
    return this.worker.id !== -1;
  }
  
  reload() {
    this.loadUser(this.worker.id);
    this.error = null;
  }

  cancel() {
    this.goBack();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private loadUser(id:number) {
    this.usersService.get(id).subscribe(worker => {
      this.worker = worker;
      this.buildForm(worker);
    }, errMsg => {
      alert(errMsg);
      this.goBack();
    });
  }

  private buildForm(item:User) {
    this.form = this.fb.group({'username': [item.username, Validators.required]});

    if (this.editing())
      this.form.addControl('lastUpdated', new FormControl(item.lastUpdated, Validators.required));
  }

  private goBack() {
    this.router.navigate(['/users']);
  }
}
