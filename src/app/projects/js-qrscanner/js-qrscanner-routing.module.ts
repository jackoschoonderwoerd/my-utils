import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsQrscannerComponent } from './js-qrscanner.component';

const routes: Routes = [
    { path: '', component: JsQrscannerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JsQRScannerRoutingModule { }
