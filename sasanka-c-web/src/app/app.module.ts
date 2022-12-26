import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './module/landing/landing.component';
import { PortfolioComponent } from './module/portfolio/portfolio.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ContactComponent } from './shared/contact/contact.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { ImageStackComponent } from './shared/image-stack/image-stack.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, PortfolioComponent, NavBarComponent, ContactComponent, SocialLinksComponent, ImageStackComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
