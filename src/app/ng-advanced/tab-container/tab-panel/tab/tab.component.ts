import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {



    @Input() title: string;
    @Input() selected: boolean = false

    constructor() { }

    ngOnInit(): void {
        console.log(this.title)
    }

}
