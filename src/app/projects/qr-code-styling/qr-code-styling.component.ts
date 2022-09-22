import { Component, OnInit } from '@angular/core';
import { Options } from 'ngx-qrcode-styling';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
    selector: 'app-qr-code-styling',
    templateUrl: './qr-code-styling.component.html',
    styleUrls: ['./qr-code-styling.component.scss']
})
export class QrCodeStylingComponent implements OnInit {

    public config: Options = {
        width: 500,
        height: 500,
        data: "http://localhost:4200//?site=mochuco&objectId=5IyMFi4cE9PWtyPXASVo&venueId=00zQuHJ5pHtqjxNZv90k",
        image: './../../../assets/Images/mochuco-Logo-1000px.png',
        margin: 5,
        dotsOptions: {
            color: "#000000",
            type: "square"
        },
        backgroundOptions: {
            color: "#ffffff",
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 0
        }
    };

    constructor() { }

    ngOnInit(): void {
    }
    public openPDF(): void {
        let DATA: any = document.getElementById('printData');
        console.log(DATA)
        html2canvas(DATA).then((canvas) => {
            console.log(canvas)
            let fileWidth = 210;
            // let fileHeight = 210;
            let fileHeight = (canvas.height * fileWidth) / canvas.width;
            const FILEURI = canvas.toDataURL('image/png');
            let PDF = new jsPDF('p', 'mm', 'a4');

            let position = 0;
            PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
            PDF.save('angular-demo.pdf');
        });
    }

}
// 'C:\Angular\UTILS\my-utils\src\app\projects\qr-code-styling\assets\images\2021-0705_Mochuco_-_Logo_zwart_wit_1000px.png'
