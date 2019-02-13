import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements OnInit {
  user: object = {
    id: '',
    name: 'Usuário',
    email: 'email@email.com',
    admin: true
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(router) {
    this.router.navigate([router]);
  }

}
