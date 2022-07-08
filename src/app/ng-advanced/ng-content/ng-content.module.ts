import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgContentRoutingModule } from './ng-content-routing.module';
import { NgContentComponent } from './ng-content.component';
import { FirstLayerComponent } from './first-layer/first-layer.component';
import { SecondLayerComponent } from './first-layer/second-layer/second-layer.component';


@NgModule({
  declarations: [
    NgContentComponent,
    FirstLayerComponent,
    SecondLayerComponent
  ],
  imports: [
    CommonModule,
    NgContentRoutingModule
  ]
})
export class NgContentModule { }
