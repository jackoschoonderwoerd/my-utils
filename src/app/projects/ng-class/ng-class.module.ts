import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClassComponent } from './ng-class.component';
import { NgClassRoutingModule } from './ng-class-routing-module';
import { NgClassMaterialModule } from './ng-class-material.module';



@NgModule({
  declarations: [
    NgClassComponent
  ],
  imports: [
    CommonModule,
    NgClassRoutingModule,
    NgClassMaterialModule
  ]
})
export class NgClassModule { }
