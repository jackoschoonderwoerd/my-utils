import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-print-layout',
    templateUrl: './print-layout.component.html',
    styleUrls: ['./print-layout.component.scss']
})
export class PrintLayoutComponent implements OnInit {


    @ViewChild('test') test: ElementRef

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }
    onInvoice() {
        // this.router.navigateByUrl('http://localhost:4200/(print:print/invoice/101,102)')
        console.log('onInvoice')
        this.router.navigateByUrl('print/invoice/101,102)')
    }
    onPrint() {
        // const test = document.getElementById('test');
        console.log(this.test.nativeElement.innerHTML);
        const content = this.test.nativeElement.innerHTML
        const newWindow = window.open('', 'Print-Window')
        newWindow.document.open();
        newWindow.document.write(`
            <html>
                <link rel="stylesheet" type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
                media="print"/>
                <body onload="window.print()">` +
            content +
            `</body>
            </html>`);
        // newWindow.close();

    }
}
