import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'my-semi-swipe',
        loadChildren: () => import('./my-semi-swipe/my-semi-swipe.module').then(m => m.MySemiSwipeModule)
    },
    {
        path: 'progress-bar',
        loadChildren: () => import('./progress-bar/progress-bar.module').then(m => m.ProgressBarModule)
    },
    {
        path: 'ng-class',
        loadChildren: () => import('./ng-class/ng-class.module').then(m => m.NgClassModule)
    },
    {
        path: 'css',
        loadChildren: () => import('./css-the-complete-guide/css-the-complete-guide.module').then(m => m.CssTheCompleteGuideModule)
    },
    {
        path: 'scroll',
        loadChildren: () => import('./scroll/scroll.module').then(m => m.ScrollModule)
    },

    {
        path: 'ng-advanced',
        loadChildren: () => import('./ng-advanced/ng-advanced.module').then(m => m.NgAdvancedModule)
    },
    {
        path: 'git',
        loadChildren: () => import('./git/git.module').then(m => m.GitModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
