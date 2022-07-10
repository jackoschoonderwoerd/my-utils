import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-git',
    templateUrl: './git.component.html',
    styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit {

    message: string = 'You need to be logged in to see the data'

    constructor(
        public auth: AuthService
    ) { }

    ngOnInit(): void {



    }

}
