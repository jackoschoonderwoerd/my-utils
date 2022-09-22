import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthUser } from '../auth.service';

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

    form: FormGroup;
    @Input() action: string;
    @Output() formData = new EventEmitter<AuthUser>();


    constructor(
        private fb: FormBuilder
    ) { }


    ngOnInit(): void {
        this.initForm()
        console.log(this.action)
    }

    initForm() {
        this.form = this.fb.group({
            email: new FormControl('jackoboes@gmail.com', Validators.required),
            password: new FormControl('123456', Validators.required)
        })
    }
    onSubmit() {
        const authUser: AuthUser = {
            ...this.form.value
        }
        this.formData.emit(authUser)
    }
}
