import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material';

import { HeaderComponent } from './header.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';

@NgModule({
  declarations: [
    HeaderComponent,
    UserDropdownComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
