import {Http, Response, Headers, RequestOptions} from '@angular/http';
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

  public add(value:any):Observable<T> {
    return this.http.post(this.endpoint, value, this.jsonRequestOptions())
      .map(this.jsonResponse);
  }

  protected get(id:number, subResource:string) {
    return this.http.get(this.endpoint + '/' + id + '/' + subResource)
      .map(this.jsonResponse);
  }

  private get endpoint() {
    return this.baseUrl + this.resource;
  }

  private jsonResponse(res:Response) {
    return res.json();
  }

  private jsonRequestOptions() {
    const headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }
}
