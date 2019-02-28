import {Component, OnInit, Output} from '@angular/core';
import {take} from 'rxjs/operators';

import { UsersService } from './services/users.service';
import {DataUser} from './shared/data-user';
import {User} from './shared/user';
import set = Reflect.set;


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  data: DataUser;
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
    this.service.list().pipe(take(1))
      .subscribe(users => {
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
