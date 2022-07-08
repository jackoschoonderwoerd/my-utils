import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContainerRoutingModule } from './tab-container-routing.module';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabComponent } from './tab-panel/tab/tab.component';
import { TabContainerComponent } from './tab-container.component';




@NgModule({
  declarations: [
    TabPanelComponent,
    TabComponent,
    TabContainerComponent
  ],
  imports: [
    CommonModule,
    TabContainerRoutingModule

  ]
})
export class TabContainerModule { }
