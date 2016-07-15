import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {User} from "./User";

@Injectable()
export class UsersService {

  users:User[]     = [];
  private request:Observable<User[]>;
  private usersUrl = 'http://localhost:8080/api/workers';

  constructor(private http:Http) {
  }

  init():Observable<User[]> {
    if (this.users && this.users.length) {
      return Observable.from([this.users]);
    }
    if (!this.request) {
      this.request = this.http.get(this.usersUrl)
        .map(this.jsonResponse)
        .map((data:User[]) => {
          this.request = null;
          return this.users = data;
        });
    }
    return this.request;
  }

  getUser(id:number):Observable<any> {
    return this.http.get(this.usersUrl + '/' + id)
      .map(this.jsonResponse).catch(err => {
        return this.serverError(err, this.localUserById(id));
      });
  }

  add(value:string):void {
    this.http.post(this.usersUrl, {username: value}, this.jsonRequestOptions())
      .map(this.jsonResponse)
      .subscribe((data) => {
        this.users.push(data);
      });

  }

  remove(user:User) {
    return this.http.delete(this.usersUrl + '/' + user.id)
      .map((data) => {
        console.log('remove response' + data);
        this.removeUserLocally(user);
        return data;
      }).catch(err => {
        return this.serverError(err, user);
      });
  }

  edit(newUserData:User) {
    return this.http.put(this.usersUrl + '/' + newUserData.id, newUserData, this.jsonRequestOptions())
      .map(this.jsonResponse)
      .map((updatedUser:User) => {
        this.updateLocalUser(updatedUser);
        return updatedUser;
      });
  }

  private updateLocalUser(updatedUser:User) {
    const localUser = this.localUserById(updatedUser.id);
    if (localUser) {
      Object.assign(localUser, updatedUser);
    }
  }

  private localUserById(id:number) {
    return this.users.find((user:User) => user.id === id);
  }

  private jsonRequestOptions() {
    const headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }

  private jsonResponse(res:Response) {
    return res.json();
  }

  private serverError(err:any, user:User):Observable<string> {
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

  private removeUserLocally(user:User) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

}

