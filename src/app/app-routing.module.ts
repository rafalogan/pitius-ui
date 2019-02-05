import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AnswerComponent } from './components/answer/answer.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

const appRoutes: Routes = [
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'answer', component: AnswerComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'socialmedia', component: SocialmediaComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', component: DashboardComponent }
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
