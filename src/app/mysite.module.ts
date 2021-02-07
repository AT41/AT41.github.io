import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MySiteRoutingModule } from './mysite-routing.module';
import { MySiteComponent } from './mysite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './home/footer/footer.component';
import { BackgroundSelectorComponent } from './home/background-selector/background-selector.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { PasswordStrengthProjectComponent } from './personal-projects/password-strength-project/password-strength-project.component';

@NgModule({
  declarations: [
    MySiteComponent,
    HomeComponent,
    PersonalProjectsComponent,
    ContactComponent,
    FooterComponent,
    BackgroundSelectorComponent,
    PasswordStrengthProjectComponent
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
