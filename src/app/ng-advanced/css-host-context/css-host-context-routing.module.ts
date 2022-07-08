import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssHostContextComponent } from './css-host-context.component';

const routes: Routes = [
  { path: '', component: CssHostContextComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssHostContextRoutingModule { }
