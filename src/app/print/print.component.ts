import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-print',
    templateUrl: './print.component.html',
    styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    @ViewChild('a') sectionA: ElementRef;
    @ViewChild('b') sectionB: ElementRef;

    ngOnInit(): void {

    }

    onPrintA() {
        console.log(this.sectionA.nativeElement.innerHTML)
        // this.router.navigate(['print-layout', { content: this.sectionA.nativeElement.innerHTML }]);
        this.router.navigate(['/print/print-layout']);
    }
    onPrintB() {
        console.log(this.sectionB.nativeElement.innerHTML)
        this.router.navigate(['/print/print-layout', { content: this.sectionB.nativeElement.innerHTML }]);
    }
}
