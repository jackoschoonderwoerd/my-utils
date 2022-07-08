import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssHostContextRoutingModule } from './css-host-context-routing.module';
import { CssHostContextComponent } from './css-host-context.component';
import { LayerOneComponent } from './layer-one/layer-one.component';
import { LayerTwoComponent } from './layer-two/layer-two.component';


@NgModule({
  declarations: [
    CssHostContextComponent,
    LayerOneComponent,
    LayerTwoComponent
  ],
  imports: [
    CommonModule,
    CssHostContextRoutingModule
  ]
})
export class CssHostContextModule { }
