import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'my-semi-swipe',
        loadChildren: () => import('./my-semi-swipe/my-semi-swipe.module').then(m => m.MySemiSwipeModule)
    },
    {
        path: 'progress-bar',
        loadChildren: () => import('./projects/progress-bar/progress-bar.module').then(m => m.ProgressBarModule)
    },
    {
        path: 'ng-class',
        loadChildren: () => import('./projects/ng-class/ng-class.module').then(m => m.NgClassModule)
    },
    {
        path: 'css',
        loadChildren: () => import('./projects/css-the-complete-guide/css-the-complete-guide.module').then(m => m.CssTheCompleteGuideModule)
    },
    {
        path: 'scroll',
        loadChildren: () => import('./projects/scroll/scroll.module').then(m => m.ScrollModule)
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
    },
    {
        path: 'print',
        loadChildren: () => import('./print/print.module').then(m => m.PrintModule)
    },
    {
        path: 'qrcode-styling', loadChildren:
            () => import('./projects/qr-code-styling/qr-code-styling.module').then(m => m.QrCodeStylingModule)
    },
    {
        path: 'share-social', loadChildren:
            () => import('./projects/share-social/share-social.module').then(m => m.ShareSocialModule)
    },
    {
        path: 'audio', loadChildren:
            () => import('./projects/audio/audio.module').then(m => m.AudioModule)
    },
    {
        path: 'js-qrscanner', loadChildren:
            () => import('./projects/js-qrscanner/js-qrscanner.module').then(m => m.JsQRScannerModule)
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
