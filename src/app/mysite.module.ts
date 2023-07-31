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
import { DigitalPhotoframeComponent } from './personal-projects/digital-photoframe/digital-photoframe.component';
import { JapaneseWebsiteComponent } from './personal-projects/japanese-website/japanese-website.component';
import { PiEmulatorComponent } from './personal-projects/pi-emulator/pi-emulator.component';
import { LinkedInRedirect } from './guards/LinkedInRedirect';
import { ContentsModule } from 'angular-contents';
import { EinkBusinesscardComponent } from './personal-projects/eink-businesscard/eink-businesscard.component';

@NgModule({
  declarations: [
    MySiteComponent,
    HomeComponent,
    PersonalProjectsComponent,
    ContactComponent,
    FooterComponent,
    BackgroundSelectorComponent,
    PasswordStrengthProjectComponent,
    DigitalPhotoframeComponent,
    JapaneseWebsiteComponent,
    PiEmulatorComponent,
    EinkBusinesscardComponent
  ],
  imports: [
    BrowserModule,
    MySiteRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ContentsModule
  ],
  providers: [LinkedInRedirect],
  bootstrap: [MySiteComponent]
})
export class MySiteModule { }
