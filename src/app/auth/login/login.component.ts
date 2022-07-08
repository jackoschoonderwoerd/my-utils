import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User, AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    message: string = 'You are logged in!';

    constructor(
        private fb: FormBuilder,
        public authService: AuthService) { }

    ngOnInit(): void {
        this.initForm()
    }
    initForm() {
        this.form = this.fb.group({
            email: new FormControl('jackoboes@gmail.com', [Validators.required]),
            password: new FormControl('123456', [Validators.required])
        })
    }
    onSubmit() {
        const user: User = {
            email: this.form.value.email,
            password: this.form.value.password
        }
        this.authService.logIn(user).subscribe((data: any) => console.log(data));
    }
}
