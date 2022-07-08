import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySemiSwipeComponent } from './my-semi-swipe.component';
import { MySemiSwipeAppRoutingModule } from './my-semi-swipe-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { MySemiSwipeMaterialModule } from './my-semi-swipe-material.module';



@NgModule({
  declarations: [
    MySemiSwipeComponent,
    ImageDialogComponent
  ],
  imports: [
    CommonModule,
    MySemiSwipeAppRoutingModule,
    FlexLayoutModule,
    MySemiSwipeMaterialModule
    
  ]
})
export class MySemiSwipeModule { }
