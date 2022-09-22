import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareSocialModule } from './share-social.module';
import { ShareSocialComponent } from './share-social.component';

const routes: Routes = [
    { path: '', component: ShareSocialComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShareSocialRoutingModule { }
