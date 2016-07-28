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
    return this.getJsonFrom(this.endpoint);
  }

  public add(item:any):Observable<T> {
    return this.postJsonTo(this.endpoint, item);
  }

  public get(id:number):Observable<T> {
    return this.getJsonFrom(this.endpoint + '/' + id);
  }

  public edit(id:number, item:any):Observable<T> {
    return this.putJsonTo(this.endpoint + '/' + id, item);
  }

  public remove(item:any) {
    return this.deleteFrom(this.endpoint + '/' + item.id);
  }

  protected getSubResource(id:number, subResource:string):Observable<any> {
    return this.getJsonFrom(this.subResource(id, subResource));
  }

  protected postSubResource(id:number, subResource:string, value:any) {
    return this.postJsonTo(this.subResource(id, subResource), value);
  }

  private subResource(id:number, subResource:string) {
    return this.endpoint + '/' + id + '/' + subResource;
  }

  private get endpoint() {
    return this.baseUrl + this.resource;
  }

  private getJsonFrom(url:string) {
    return this.http.get(url)
      .map(this.jsonResponse)
      .catch(err => this.serverError(err));
  }

  private postJsonTo(url:string, value:any):Observable<T> {
    return this.http.post(url, value, this.jsonRequestOptions())
      .map(this.jsonResponse)
      .catch(err => this.serverError(err));
  }

  private putJsonTo(url:string, value:any):Observable<T> {
    return this.http.put(url, value, this.jsonRequestOptions())
      .map(this.jsonResponse)
      .catch(err => this.serverError(err));
  }

  private deleteFrom(url:string) {
    return this.http.delete(url)
      .catch(err => this.serverError(err));
  }

  private serverError(err:any):Observable<any> {
    console.error('sever error:', err);  // debug

    const errorResponse = (err instanceof Response) ?
      this.jsonResponse(err) : {message: err};

    return Observable.throw({message: errorResponse.message || 'backend server error'});
  }

  private jsonResponse(res:Response) {
    return res.json();
  }

  private jsonRequestOptions() {
    const headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }
}
