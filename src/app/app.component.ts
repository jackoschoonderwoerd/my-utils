import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { MySemiSwipeService } from './my-semi-swipe/my-semi-swipe.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'my-utils';

    constructor(
        private mySemiSwipeService: MySemiSwipeService,
        public auth: AuthService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {

        console.log(window.location.href)
        const urlString: string = window.location.href
        if (urlString.indexOf('mochuco') != -1) {
            const split = urlString.split('~');
            const site = split[1].split('_')[1];
            const objectId = split[2].split('_')[1];
            const venueId = split[3].split('_')[1];

            console.log(split);
            console.log(site, objectId, venueId)
        } else {
            console.log('this is not a mochuco string')
        }
    }

    onPrevious() {
        this.mySemiSwipeService.previous()
    }
    onNext() {
        this.mySemiSwipeService.next();
    }
    onLogOut() {
        this.auth.logOut();
    }
}
