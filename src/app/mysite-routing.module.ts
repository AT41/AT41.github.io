import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LinkedInRedirect } from './guards/LinkedInRedirect';
import { HomeComponent } from './home/home.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'personal-projects', component: PersonalProjectsComponent},
  {path: 'contact', component: ContactComponent}, 
  {path: 'linked-in', canActivate: [LinkedInRedirect], component: LinkedInRedirect},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MySiteRoutingModule { }
