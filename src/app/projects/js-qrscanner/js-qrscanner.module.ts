import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsQRScannerRoutingModule } from './js-qrscanner-routing.module';
import { JsQrscannerComponent } from './js-qrscanner.component';


@NgModule({
  declarations: [
    JsQrscannerComponent
  ],
  imports: [
    CommonModule,
    JsQRScannerRoutingModule
  ]
})
export class JsQRScannerModule { }
