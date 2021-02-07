import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'personal-projects', component: PersonalProjectsComponent},
  {path: 'contact', component: ContactComponent}, 
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MySiteRoutingModule { }
