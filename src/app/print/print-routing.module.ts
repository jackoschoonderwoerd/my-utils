import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { PrintComponent } from './print.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
    {
        path: '',
        // outlet: 'print',
        // component: PrintLayoutComponent,
        component: PrintComponent,
        children: [
            { path: 'invoice/:invoiceIds', component: InvoiceComponent },
            { path: 'print-layout', component: PrintLayoutComponent }
        ],
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]

})

export class PrintRoutingModule { }
