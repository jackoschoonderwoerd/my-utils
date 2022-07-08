import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssHostRoutingModule } from './css-host-routing.module';
import { CssHostComponent } from './css-host.component';
import { LayerOneComponent } from './layer-one/layer-one.component';


@NgModule({
  declarations: [
    CssHostComponent,
    LayerOneComponent
  ],
  imports: [
    CommonModule,
    CssHostRoutingModule
  ]
})
export class CssHostModule { }
