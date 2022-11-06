import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { PortfolioComponent } from './module/portfolio/portfolio.component';
import { TitleComponent } from './module/home/title/title.component';
import { ContactsComponent } from './shared/contacts/contacts.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, SocialLinksComponent, PortfolioComponent, TitleComponent, ContactsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
