import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export abstract class BaseService <T> {
  protected baseUrl:string = 'http://localhost:8080/api/';

  constructor(private http:Http, private resource:string) {
  }

  public getAll():Observable<T[]> {
    return this.http.get(this.endpoint)
      .map(this.jsonResponse);
  }

  protected get endpoint() {
    return this.baseUrl + this.resource;
  }

  protected jsonResponse(res:Response) {
    return res.json();
  }
}
