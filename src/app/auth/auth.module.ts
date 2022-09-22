import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthMaterialModule } from './auth-material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthItemsComponent } from './auth-items/auth-items.component';
import { AuthConfirmComponent } from './auth-items/auth-confirm/auth-confirm.component';





@NgModule({
    declarations: [

        AuthComponent,
        AuthFormComponent,
        AuthItemsComponent,
        AuthConfirmComponent,


    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        AuthMaterialModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }
