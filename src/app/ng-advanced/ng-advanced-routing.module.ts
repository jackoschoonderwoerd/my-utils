import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    {
        path: 'inputs',
        loadChildren: () => import('./inputs/inputs.module').then(m => m.InputsModule)
    },
    {
        path: 'tab-container',
        loadChildren: () => import('./tab-container/tab-container.module').then(m => m.TabContainerModule)
    },

    {
        path: 'ng-content',
        loadChildren: () => import('./ng-content/ng-content.module').then(m => m.NgContentModule)
    },
    {
        path: 'css-host',
        loadChildren: () => import('./css-host/css-host.module').then(m => m.CssHostModule)
    },
    {
        path: 'css-host-context',
        loadChildren: () => import('./css-host-context/css-host-context.module').then(m => m.CssHostContextModule)
    }

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NgAdvancedRoutingModule { }