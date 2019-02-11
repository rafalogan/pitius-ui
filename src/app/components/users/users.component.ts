import { Component, OnInit } from '@angular/core';

import { UsersService } from './services/users.service';
import { User } from './shared/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  pageCount: number;
  pageLimit: number;

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.service.list().subscribe(
      users => {
        this.users = users.data;
        this.pageCount = users.count;
        this.pageLimit = users.limit;
      });
  }

}
