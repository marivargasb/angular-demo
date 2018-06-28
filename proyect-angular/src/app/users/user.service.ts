import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  configUrl = 'assets/config.json';

  getUsers() {
    return this.http.get(this.configUrl);
  }

  postUser(){

 //return this.http.post();

  }


}