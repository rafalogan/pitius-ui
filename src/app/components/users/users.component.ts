import { Component, OnInit } from '@angular/core';
import { catchError, take } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

import { UsersService } from './services/users.service';
import { DataUser } from './shared/data-user';
import { User } from './shared/user';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  data: DataUser;

  error$ = new Subject<boolean>();

  users: User[];

  count: number;
  limit: number;

  current: number;
  page: number;

  constructor(private service: UsersService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.list().pipe(
        take(1),
        catchError(error => {
          console.error(error);
          this.error$.next(true);
          return of;
        })
    ).subscribe(users => {
        this.data = users;
        this.setUsersData(this.data);
      });
  }

  setUsersData(data) {
    if (data.data) this.users = data.data;
    if (data.count) this.count = data.count;
    if (data.limit) this.limit = data.limit;

  }

  getUsersPage(page) {
    this.page = page;
    this.current = page;

    console.log(this.page);
  }
}
