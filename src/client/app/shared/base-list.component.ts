import {OnInit} from '@angular/core';
import {BaseService} from './base.service';

export class BaseListComponent<T> implements OnInit {
  list:T[] = [];

  constructor(private service:BaseService<T>) {
  }

  ngOnInit() {
    this.service.getAll().subscribe((list:any) => this.list = list);
  }

  removeItem(item:T) {
    this.service.remove(item).subscribe(() => this.ngOnInit()
      , (err) => alert(err.message)
    );
  }
}
