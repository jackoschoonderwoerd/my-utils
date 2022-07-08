import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssHostComponent } from './css-host.component';

const routes: Routes = [
  { path: '', component: CssHostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssHostRoutingModule { }
