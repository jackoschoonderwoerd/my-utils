import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CssTheCopleteGuideComponent } from "./css-the-coplete-guide.component";


const routes: Routes =  [
	{path: '', component: CssTheCopleteGuideComponent}
]



@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class CssTheCompleteGuideRoutingModule {

	
}