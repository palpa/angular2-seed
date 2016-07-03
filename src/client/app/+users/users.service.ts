import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import {User} from "./User";

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class UsersService {

  /**
   * The array of initial names provided by the service.
   * @type {Array}
   */
  names:User[] = [];

  /**
   * Contains the currently pending request.
   * @type {Observable<string[]>}
   */
  private request:Observable<string[]>;

  private usersUrl = 'http://localhost:8080/api/users';

  /**
   * Creates a new UsersService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http:Http) {
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource. If there was a previous successful request
   * (the local names array is defined and has elements), the cached version is returned
   * @return {string[]} The Observable for the HTTP request.
   */
  get():Observable<string[]> {
    if (this.names && this.names.length) {
      return Observable.from([this.names]);
    }
    if (!this.request) {
      this.request = this.http.get(this.usersUrl)
        .map(this.jsonResponse)
        .map((data:string[]) => {
          this.request = null;
          return this.names = data;
        });
    }
    return this.request;
  }

  getUser(id:number):Observable<User> {
    return this.http.get(this.usersUrl + '/' + id)
      .map(this.jsonResponse);
  }

  /**
   * Adds the given name to the array of names.
   * @param {string} value - The name to add.
   */
  add(value:string):void {
    this.http.post(this.usersUrl, value, this.jsonRequestOptions())
      .map(this.jsonResponse)
      .subscribe((data) => {
        this.names.push(data)
      });

  }

  remove(user) {
    this.http.delete(this.usersUrl + '/' + user.id)
      .subscribe((data) => {
        console.log('remove response' + data);
        const index = this.names.indexOf(user);
        if (index > -1) {
          this.names.splice(index, 1);
        }
      });
  }

  edit(newUserData:User) {
    return this.http.put(this.usersUrl + '/' + newUserData.id, newUserData, this.jsonRequestOptions())
      .map(this.jsonResponse)
      .map((user:User) => {
        const oldUser = this.names.find((oldUser:User) => oldUser.id === user.id);
        Object.assign(oldUser, user);
        return user;
      });
  }

  private jsonRequestOptions() {
    const headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }

  private jsonResponse(res:Response) {
    return res.json();
  }

}

