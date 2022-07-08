import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { MySemiSwipeService } from './my-semi-swipe/my-semi-swipe.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'my-utils';

    constructor(
        private mySemiSwipeService: MySemiSwipeService,
        public auth: AuthService) { }

    onPrevious() {
        this.mySemiSwipeService.previous()
    }
    onNext() {
        this.mySemiSwipeService.next();
    }
    onLogOut() {
        this.auth.logout();
    }
}
