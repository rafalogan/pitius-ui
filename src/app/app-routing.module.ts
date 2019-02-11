import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'not-found', loadChildren: './components/not-found/not-found.module#NotFoundModule' },
  { path: 'users', loadChildren: './components/users/users.module#UsersModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
