import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './components/template/header/header.module';
import { MenuModule } from './components/template/menu/menu.module';
import { FooterModule } from './components/template/footer/footer.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AnswerComponent } from './components/answer/answer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    CategoriesComponent,
    ArticlesComponent,
    SocialmediaComponent,
    NewsletterComponent,
    ContactsComponent,
    AnswerComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MenuModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
