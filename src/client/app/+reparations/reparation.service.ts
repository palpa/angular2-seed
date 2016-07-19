import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {Reparation} from "./Reparation";

@Injectable()
export class ReparationService {

  reparations:Reparation[] = [];
  private request:Observable<Reparation[]>;
  private usersUrl         = 'http://localhost:8080/api/reparations';

  constructor(private http:Http) {
  }

  init():Observable<Reparation[]> {
    if (this.reparations && this.reparations.length) {
      return Observable.from([this.reparations]);
    }
    if (!this.request) {
      this.request = this.http.get(this.usersUrl)
        .map(this.jsonResponse)
        .map((data:Reparation[]) => {
          this.request = null;
          return this.reparations = data;
        });
    }
    return this.request;
  }

  get(id:number):Observable<any> {
    return this.http.get(this.usersUrl + '/' + id)
      .map(this.jsonResponse).catch(err => {
        return this.serverError(err, this.localUserById(id));
      });
  }

  add(value:string):void {
    this.http.post(this.usersUrl, {username: value}, this.jsonRequestOptions())
      .map(this.jsonResponse)
      .subscribe((data) => {
        this.reparations.push(data);
      });

  }

  remove(user:Reparation) {
    return this.http.delete(this.usersUrl + '/' + user.id)
      .map((data) => {
        console.log('remove response' + data);
        this.removeUserLocally(user);
        return data;
      }).catch(err => {
        return this.serverError(err, user);
      });
  }

  edit(newUserData:Reparation) {
    return this.http.put(this.usersUrl + '/' + newUserData.id, newUserData, this.jsonRequestOptions())
      .map(this.jsonResponse)
      .map((updatedObject:Reparation) => {
        this.updateLocal(updatedObject);
        return updatedObject;
      });
  }

  private updateLocal(updatedObject:Reparation) {
    const localUser = this.localUserById(updatedObject.id);
    if (localUser) {
      Object.assign(localUser, updatedObject);
    }
  }

  private localUserById(id:number) {
    return this.reparations.find((user:Reparation) => user.id === id);
  }

  private jsonRequestOptions() {
    const headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }

  private jsonResponse(res:Response) {
    return res.json();
  }

  private serverError(err:any, user:Reparation):Observable<string> {
    console.error('sever error:', err);  // debug
    if (err instanceof Response) {
      const errorResponse = err.json();
      if (errorResponse.code === 404) {
        this.removeUserLocally(user);
      }
      return Observable.throw(errorResponse.message || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }

  private removeUserLocally(user:Reparation) {
    const index = this.reparations.indexOf(user);
    if (index > -1) {
      this.reparations.splice(index, 1);
    }
  }

}

