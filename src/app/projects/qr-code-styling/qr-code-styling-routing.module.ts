import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeStylingComponent } from './qr-code-styling.component';

const routes: Routes = [
    { path: '', component: QrCodeStylingComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QrCodeStylingRoutingModule { }
