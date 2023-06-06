import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { RouterModule } from '@angular/router';
import { CircularImageHolderComponent } from './circular-image-holder/circular-image-holder.component';



@NgModule({
  declarations: [MenubarComponent, CircularImageHolderComponent],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    RouterModule
  ],
  exports: [
    MenubarComponent,
    CircularImageHolderComponent,
    AngularMaterialsModule
  ]
})
export class SharedModule { }
