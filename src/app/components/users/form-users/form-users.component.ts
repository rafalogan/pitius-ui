import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss']
})
export class FormUsersComponent implements OnInit {

  userform: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: UsersService,
  ) { }

  ngOnInit() {
    this.userform = this.formBuilder.group({
      id: [null],
      name: [null],
      email: [null],
      admin: [false],
      deletedAt: [null]
    });
  }

  onSubmint() {
    console.log(this.userform.value);

    this.service.save(this.userform.value).subscribe(res => console.log(res));
  }

}
