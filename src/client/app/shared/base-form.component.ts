import {OnInit, OnDestroy} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';

export abstract class BaseFormComponent<T> implements OnInit, OnDestroy {
  error:string;
  form:FormGroup;

  private sub:any;
  private item:any;

  constructor(private service:any,
              private basePath:string,
              private route:ActivatedRoute,
              private router:Router) {
  }

  protected abstract buildFormFor(item:T):FormGroup;

  protected abstract getEmptyItem():T;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.init(+params['id']);
    });
  }

  onSubmit() {
    const value = this.form.value;
    console.log('submitted:', value);

    const operation:Observable<T> = (this.editing()) ?
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
      this.form = this.buildFormFor(item);
    }, err => {
      alert(err.message);
      this.goBack();
    });
  }

  private loadItem(id:number):Observable<T> {
    return (Number.isNaN(id)) ?
      Observable.create((obs:any) => {
        obs.next(this.getEmptyItem());
        obs.complete();
      }) : this.service.get(id);
  }

  private goBack() {
    this.router.navigate(['/' + this.basePath]);
  }
}
