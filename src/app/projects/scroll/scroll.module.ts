import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollRoutingModule } from './scroll-routing.module';
import { ScrollComponent } from './scroll.component';



@NgModule({
  declarations: [
    ScrollComponent
  ],
  imports: [
    CommonModule,
    ScrollRoutingModule
  ]
})
export class ScrollModule { }
