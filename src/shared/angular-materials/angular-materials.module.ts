import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatListModule} from '@angular/material/list'; 
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule
  ]
})
export class AngularMaterialsModule { }
