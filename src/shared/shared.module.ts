import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';



@NgModule({
  declarations: [MenubarComponent],
  imports: [
    CommonModule,
    AngularMaterialsModule
  ],
  exports: [
    MenubarComponent,
    AngularMaterialsModule
  ]
})
export class SharedModule { }
