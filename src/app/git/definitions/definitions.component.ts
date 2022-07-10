import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Definition, GitService } from '../git.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DefinitionFormDialogComponent } from './definition-form-dialog/definition-form-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'app-definitions',
    templateUrl: './definitions.component.html',
    styleUrls: ['./definitions.component.scss']
})
export class DefinitionsComponent implements OnInit {

    definitions$: Observable<Definition[]>
    definitions: Definition[]



    constructor(
        private gitService: GitService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.definitions$ = this.gitService.getDefinitions()
    }
    onAddDefinition() {
        this.dialog.open(DefinitionFormDialogComponent)
    }
    onEdit(definition: Definition) {
        console.log(definition)
        this.dialog.open(DefinitionFormDialogComponent, {
            data: {
                definition
            }
        })
    }
    onDelete(id: string) {
        const dialogRef: MatDialogRef<any> = this.dialog.open(ConfirmationDialogComponent)
        dialogRef.afterClosed().subscribe((res) => {
            if (!res) {
                return
            } else {
                this.gitService.deleteDefinition(id)
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
            }
        })
    }
}
