import {Component, Input, OnInit} from '@angular/core';
import { take } from 'rxjs/operators';

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
  pageInit: number = 1;

  @Input() page: number;

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.service.list()
      .pipe(take(1)).subscribe(
      users => {
        this.users = users.data;
        this.pageCount = users.count;
        this.pageLimit = users.limit;
      });
  }

}
