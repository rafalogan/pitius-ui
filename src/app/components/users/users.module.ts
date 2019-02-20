import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

import { MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

import { UsersComponent } from './users.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { UsersService } from './services/users.service';
import {PaginationModule} from '../template/pagination/pagination.module';





@NgModule({
  declarations: [
    UsersComponent,
    FormUsersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    PaginationModule,
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
