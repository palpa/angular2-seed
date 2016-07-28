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

  public get(id:number):Observable<T> {
    return this.http.get(this.endpoint + '/' + id)
      .map(this.jsonResponse);
  }

  protected getSubResource(id:number, subResource:string):Observable<any> {
    return this.http.get(this.subResource(id, subResource))
      .map(this.jsonResponse);
  }

  protected postSubResource(id:number, subResource:string, value:any) {
    return this.http.post(this.subResource(id, subResource), value, this.jsonRequestOptions())
      .map(this.jsonResponse);
  }

  private subResource(id:number, subResource:string) {
    return this.endpoint + '/' + id + '/' + subResource;
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
