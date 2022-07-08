import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ScrollComponent } from "./scroll.component";

const routes: Routes = [
    { path: '', component: ScrollComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ScrollRoutingModule { }