import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
    selector: 'tab-panel',
    templateUrl: './tab-panel.component.html',
    styleUrls: ['./../tab-panel.component.scss']
})
export class TabPanelComponent implements OnInit, AfterContentInit {

    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

    @Input() headerTemplate: TemplateRef<any>

    constructor() { }



    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        const selectedTab = this.tabs.find(tab => tab.selected);
        if (!selectedTab && this.tabs.first) {
            this.tabs.first.selected = true
        }
    }
    selectedTab(tab) {
        this.tabs.forEach(tab => tab.selected = false)
        tab.selected = true;
    }

    get tabsContext() {
        return {
            tabs: this.tabs
        }
    }

}
