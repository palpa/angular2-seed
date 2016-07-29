import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {BaseFormComponent} from '../shared/base-form.component';
import {UsersService} from './users.service';
import {User} from './index';

@Component({
  moduleId: module.id,
  selector: 'sd-user-form',
  templateUrl: 'user-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class UserFormComponent extends BaseFormComponent<User> {
  private emptyItem:User = {
    id: -1,
    username: '',
    lastUpdated: null
  };

  protected buildFormFor(item:User):FormGroup {
    let form = this.fb.group({'username': [item.username, Validators.required]});

    if (this.editing())
      form.addControl('lastUpdated', new FormControl(item.lastUpdated, Validators.required));

    return form;
  }

  protected getEmptyItem():User {
    return this.emptyItem;
  }

  constructor(service:UsersService,
              route:ActivatedRoute,
              router:Router,
              private fb:FormBuilder) {
    super(service, 'users', route, router);
  }
}
