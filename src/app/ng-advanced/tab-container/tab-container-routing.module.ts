import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabContainerComponent } from "./tab-container.component";

const routes: Routes = [
    { path: '', component: TabContainerComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabContainerRoutingModule { }