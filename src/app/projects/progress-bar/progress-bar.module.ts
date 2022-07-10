import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarRoutingModule } from './progress-bar-routing-module';



@NgModule({
  declarations: [
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    ProgressBarRoutingModule
  ]
})
export class ProgressBarModule { }
