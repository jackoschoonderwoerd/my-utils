import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintRoutingModule } from './print-routing.module';
import { PrintComponent } from './print.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { InvoiceComponent } from './invoice/invoice.component';



@NgModule({
    declarations: [
        PrintLayoutComponent,
        PrintComponent,
        InvoiceComponent
    ],
    imports: [
        CommonModule,
        PrintRoutingModule
    ]
})
export class PrintModule { }
