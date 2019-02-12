import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { User } from '../shared/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  token: any = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJhZmFlbCBCLiBDYW5kZWlyYSIsImVtYWlsIjoicm9vdEByb290LmNvbSIsImFkbWluIjoxLCJpYXQiOjE1NDk5OTcxNzYsImV4cCI6MTU1MDA4MzU3Nn0.nQ37P4joPuAuxlAUoL9AZJa4WtXm6U6-tYmfP5ie_s4';

  private readonly API = `${environment.API}users`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<User[]>(this.API, {headers: {Authorization: `bearer ${this.token}`}})
      .pipe(
        tap(console.log)
      );
  }
}
