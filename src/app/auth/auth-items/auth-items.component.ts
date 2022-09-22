import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthItem, AuthItemsService } from './auth-items.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AuthConfirmComponent } from './auth-confirm/auth-confirm.component';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-auth-items',
    templateUrl: './auth-items.component.html',
    styleUrls: ['./auth-items.component.scss']
})
export class AuthItemsComponent implements OnInit {

    form: FormGroup

    authItems$: Observable<AuthItem[]>

    constructor(
        private fb: FormBuilder,
        private authItemService: AuthItemsService,
        private authService: AuthService,
        private dialog: MatDialog) { }

    ngOnInit(): void {
        this.initForm();
    }
    initForm() {
        this.form = this.fb.group({
            name: new FormControl('new item', Validators.required)
        })
        this.authItems$ = this.authItemService.getAuthItems()
    }
    onAddItem() {
        const item: AuthItem = {
            ...this.form.value
        }
        this.authItemService.addAuthItem(this.authService.getAuthUser().email, item)
            .then((data: any) => {
                console.log(data)
            })
            .catch(err => console.log(err));
    }

    onDeleteAuthItem(id: string) {
        const dialogRef = this.dialog.open(AuthConfirmComponent);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                console.log(res)
                this.authItemService.deleteAuthItem(id)
            }
        })
    }
}
