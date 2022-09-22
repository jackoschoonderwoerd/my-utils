import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthUser, AuthService } from './auth.service';



@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


    action: string = 'reset';
    authUser: any;
    spinnerActive: boolean = false;



    constructor(
        public authService: AuthService) { }

    ngOnInit(): void {

    }

    onSetAction(action) {
        this.action = action;
    }
    formDataReceived(authUser: AuthUser) {

        if (this.action === 'logIn') {
            this.logIn(authUser)
        } else if (this.action === 'signUp') {
            this.signUp(authUser)
        } else {
            alert('something went wrong')
        }
    }

    logIn(authUser: AuthUser) {
        this.spinnerActive = true;
        // this.authService.logIn(authUser).subscribe(data => {
        //     this.spinnerActive = false;
        // })
        this.authService.logIn(authUser)
            .then((authUser: AuthUser) => {
                if (authUser.email) {
                    console.log(authUser);
                } else {
                    console.log(authUser)
                    alert('unknown email and password combination')
                }
                this.spinnerActive = false;
            })
            .catch(err => alert(err))
    }
    signUp(authUser: AuthUser) {
        this.spinnerActive = true;
        this.authService.signUp(authUser).subscribe((data: any) => {
            this.spinnerActive = false;
            this.logIn(authUser)
        })
    }

    onLogOut() {
        this.authService.logOut();
    }
}
