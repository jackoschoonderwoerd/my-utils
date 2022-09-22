import { Component, OnInit } from '@angular/core';

import { ShareModule } from 'ngx-sharebuttons';

import { ShareButtonsConfig } from 'ngx-sharebuttons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';

@Component({
    selector: 'app-share-social',
    templateUrl: './share-social.component.html',
    styleUrls: ['./share-social.component.scss']
})
export class ShareSocialComponent implements OnInit {

    // facebookBtn = document.querySelector('.facebook-btn');
    // twitterBtn = document.querySelector('.twitter-btn');
    // pinterestBtn = document.querySelector('.pinterest-btn');
    // linkedinBtn = document.querySelector('.linkedin-btn');
    // whatsappBtn = document.querySelector('.whatsapp-btn');


    constructor(

    ) { }

    ngOnInit(): void {

        const facebookBtn = document.querySelector('.facebook-btn');
        const twitterBtn = document.querySelector('.twitter-btn');
        const pinterestBtn = document.querySelector('.pinterest-btn');
        const linkedinBtn = document.querySelector('.linkedin-btn');
        const whatsappBtn = document.querySelector('.whatsapp-btn');

        const pinterestImg = document.querySelector('.pinterest-img')
        // let postUrl = encodeURI(document.location.href);
        // let postUrl = encodeURI('https://my-utils-91637.web.app/?site=mochuco&objectId=c9vxvo7FKL6tQWoYqwh9&venueId=00zQuHJ5pHtqjxNZv90k');

        // let postUrl = encodeURI('https://my-utils-91637.web.app/?site~mochuco_objectId~c9vxvo7FKL6tQWoYqwh9_venueId~00zQuHJ5pHtqjxNZv90k');
        let postUrl = encodeURI('https://my-utils-91637.web.app/?_site_mochuco~_objectId_c9vxvo7FKL6tQWoYqwh9~_venueId_00zQuHJ5pHtqjxNZv90k');

        let postTitle = encodeURI('Hi everyone. please check this out:');
        // let postImg = encodeURI(pinterestImg.src);
        let postImg = ''

        facebookBtn.setAttribute('href', `https://www.facebook.com/sharer.php?u=${postUrl}`)
        twitterBtn.setAttribute('href', `https://twitter.com/share?url=${postUrl}&text=${postTitle}`)
        pinterestBtn.setAttribute('href', `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`)
        linkedinBtn.setAttribute('href', `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`)
        whatsappBtn.setAttribute('href', `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`)
    }

}

// SOCIAL SHARE LINKS:

// Facebook:
// https://www.facebook.com/sharer.php?u=[post-url]
// Twitter:
// https://twitter.com/share?url=[post-url]&text=${postTitle}
// Pinterest:
// https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
// Linkedin:
// https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
// Whatsapp:
// https://api.whatsapp.com/send?text=[post-title] [post-url]


// You’re going to a link outside Facebook
// The link you tried to go to is outside Facebook: https://mochuco-a185b.web.app/?site~mochuco_objectId~c9vxvo7FKL6tQWoYqwh9_venueId~00zQuHJ5pHtqjxNZv90k&fbclid=IwAR212BsPB9IOkpaovzfsx4d0g7yxVCSmp9b9K1DRf3juBCUOCphCITvOpqY

// http://localhost:4201/?~site_mochuco~objectId_c9vxvo7FKL6tQWoYqwh9~venueId_00zQuHJ5pHtqjxNZv90k=
