import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { QrCodeStylingRoutingModule } from './qr-code-styling-routing.module';
import { QrCodeStylingComponent } from './qr-code-styling.component';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';


@NgModule({
    declarations: [
        QrCodeStylingComponent
    ],
    imports: [
        CommonModule,
        // QrCodeStylingRoutingModule,
        NgxQrcodeStylingModule
    ]
})
export class QrCodeStylingModule { }
