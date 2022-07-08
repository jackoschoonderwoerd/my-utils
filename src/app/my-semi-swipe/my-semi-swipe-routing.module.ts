import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySemiSwipeComponent } from './my-semi-swipe.component';

const routes: Routes = [
  {path: '', component: MySemiSwipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySemiSwipeAppRoutingModule { }
