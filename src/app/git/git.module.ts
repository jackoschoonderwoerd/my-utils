import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitRoutingModule } from './git-routing.module';

import { GitComponent } from './git.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GitMaterialModule } from './git-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DefinitionsComponent } from './definitions/definitions.component';
import { CommandsComponent } from './commands/commands.component';
import { DefinitionFormDialogComponent } from './definitions/definition-form-dialog/definition-form-dialog.component';
import { CommandFormDialogComponent } from './commands/command-form-dialog/command-form-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';




@NgModule({
  declarations: [

    GitComponent,

    DefinitionsComponent,
    CommandsComponent,
    DefinitionFormDialogComponent,
    CommandFormDialogComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    GitRoutingModule,
    FlexLayoutModule,
    GitMaterialModule,
    ReactiveFormsModule
  ]
})
export class GitModule { }
