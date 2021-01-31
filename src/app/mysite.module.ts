import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MySiteRoutingModule } from './mysite-routing.module';
import { MySiteComponent } from './mysite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './home/footer/footer.component';
import { BackgroundSelectorComponent } from './home/background-selector/background-selector.component';

@NgModule({
  declarations: [
    MySiteComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    BackgroundSelectorComponent
  ],
  imports: [
    BrowserModule,
    MySiteRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [MySiteComponent]
})
export class MySiteModule { }
