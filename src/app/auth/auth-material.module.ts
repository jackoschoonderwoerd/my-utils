import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
    ]
})

export class AuthMaterialModule { }
