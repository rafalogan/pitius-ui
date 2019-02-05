import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
