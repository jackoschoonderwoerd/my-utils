import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-auth-confirm',
    templateUrl: './auth-confirm.component.html',
    styleUrls: ['./auth-confirm.component.scss']
})
export class AuthConfirmComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<AuthConfirmComponent>) { }

    ngOnInit(): void {
    }

    onCancel() {
        this.dialogRef.close();
    }
    onConfirm() {
        this.dialogRef.close('hithere')
    }
}
