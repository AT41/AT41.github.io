import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LinkedInRedirect } from './guards/LinkedInRedirect';
import { HomeComponent } from './home/home.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { EinkBusinesscardComponent } from './personal-projects/eink-businesscard/eink-businesscard.component';
import { DigitalPhotoframeComponent } from './personal-projects/digital-photoframe/digital-photoframe.component';
import { PiEmulatorComponent } from './personal-projects/pi-emulator/pi-emulator.component';
import { JapaneseWebsiteComponent } from './personal-projects/japanese-website/japanese-website.component';
import { PasswordStrengthProjectComponent } from './personal-projects/password-strength-project/password-strength-project.component';
import { StatRequirementChecklistComponent } from './personal-projects/stat-requirement-checklist/stat-requirement-checklist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'personal-projects',
    component: PersonalProjectsComponent,
    children: [
      { path: '', redirectTo: 'stat-requirement-checklist', pathMatch: 'full' },
      { path: 'stat-requirement-checklist', component: StatRequirementChecklistComponent },
      { path: 'eink-businesscard', component: EinkBusinesscardComponent },
      { path: 'digital-photoframe', component: DigitalPhotoframeComponent },
      { path: 'pi-emulator', component: PiEmulatorComponent },
      { path: 'japanese-website', component: JapaneseWebsiteComponent },
      { path: 'password-strength', component: PasswordStrengthProjectComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'linked-in', canActivate: [LinkedInRedirect], component: LinkedInRedirect },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MySiteRoutingModule {}
