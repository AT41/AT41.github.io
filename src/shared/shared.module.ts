import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { RouterModule } from '@angular/router';
import { CircularImageHolderComponent } from './circular-image-holder/circular-image-holder.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';

@NgModule({
  declarations: [MenubarComponent, CircularImageHolderComponent, TableOfContentsComponent],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    RouterModule
  ],
  exports: [
    MenubarComponent,
    CircularImageHolderComponent,
    TableOfContentsComponent,
    AngularMaterialsModule
  ]
})
export class SharedModule { }
