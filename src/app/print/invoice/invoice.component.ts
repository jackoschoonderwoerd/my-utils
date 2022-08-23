import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

    invoiceIds: string[];


    @ViewChild('test') public test: ElementRef

    constructor(
        route: ActivatedRoute
    ) {
        this.invoiceIds = route.snapshot.params['invoiceIds'].split(',');
    }

    ngOnInit(): void {

    }
    onPrintInvoice() {
        console.log('printing');


        const newWin = window.open('', 'Print_Window');
        newWin.document.open();
        newWin.document.write(`
            <html>
                <link rel="stylesheet" type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
                media="print"/>
                <body onload="window.print()">` +
            this.test.nativeElement.innerHTML +
            `</body>
            </html>`);
        newWin.document.close()
    }
}
