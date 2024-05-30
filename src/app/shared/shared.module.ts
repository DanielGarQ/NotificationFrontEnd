import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHomeComponent } from './components/headers/header-home/header-home.component';
import { GeneralHeaderComponent } from './components/headers/general-header/general-header.component';



@NgModule({
  declarations: [
    HeaderHomeComponent,
    GeneralHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderHomeComponent,
    GeneralHeaderComponent
  ]
})
export class SharedModule { }
