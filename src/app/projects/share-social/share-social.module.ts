import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareSocialRoutingModule } from './share-social-routing.module';
import { ShareSocialComponent } from './share-social.component';

import { ShareModule } from 'ngx-sharebuttons';

import { ShareButtonsConfig } from 'ngx-sharebuttons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';



const customConfig: ShareButtonsConfig = {
    include: ['facebook', 'twitter', 'google'],
    exclude: ['tumblr', 'stumble', 'vk'],
    theme: 'modern-light',
    prop: {
        facebook: {
            icon: ['fab', 'fa-facebook-official'],
            text: 'hi there'

        }
    },
    gaTracking: true,
    twitterAccount: 'twitterUsername',
    debug: true
}


@NgModule({
    declarations: [
        ShareSocialComponent,
    ],
    imports: [
        CommonModule,
        ShareSocialRoutingModule,
        // ShareModule,
        ShareButtonsModule.withConfig(customConfig),
        ShareIconsModule,

    ]
})
export class ShareSocialModule { }
