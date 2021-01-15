import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MySiteRoutingModule } from './mysite-routing.module';
import { MySiteComponent } from './mysite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    MySiteComponent
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
