import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';

import { MatTableModule } from '@angular/material';

import { UsersComponent } from './users.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { UsersService } from './services/users.service';



@NgModule({
  declarations: [
    UsersComponent,
    FormUsersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    UsersRoutingModule
  ],
  providers: [
    UsersService
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
