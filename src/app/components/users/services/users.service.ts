import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { User } from '../shared/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  token: any = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJhZmFlbCBCLiBDYW5kZWlyYSIsImVtYWlsIjoicm9vdEByb290LmNvbSIsImFkbWluIjoxLCJpYXQiOjE1NTM1MjM1NjAsImV4cCI6MTU1MzYwOTk2MH0.CpmOwiDOjN7tIver9EgOJ_NfJm97GAeq7EsagjpVlpY';

  private readonly API = `${environment.API}users`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<User[]>(this.API, {headers: {Authorization: `bearer ${this.token}`}})
      .pipe(
        tap(console.log)
      );
  }

  save(body) {
    let url: string;

    if (body.id) {
      url = `${this.API}/${body.id}`;
    } else {
      url = this.API;
    }

    return this.http.post(url, body,  {headers: {Authorization: `bearer ${this.token}`}})
      .pipe(
        tap(console.log)
      );
  }
}
