import { Component, OnInit } from '@angular/core';
import { Command, GitService } from '../git.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommandFormDialogComponent } from './command-form-dialog/command-form-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'app-commands',
    templateUrl: './commands.component.html',
    styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {


    dataSource = new MatTableDataSource<Command>();

    displayedColumns: string[] = ['command', 'effect', 'edit', 'delete'];


    constructor(
        public gitService: GitService,
        private dialog: MatDialog,

    ) { }

    ngOnInit(): void {

        this.gitService.getCommands().subscribe((commands: Command[]) => {
            this.dataSource.data = commands
        })
    }

    onAddCommand() {
        this.dialog.open(CommandFormDialogComponent);
    }
    onDelete(id: string) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent);
        dialogRef.afterClosed().subscribe((res) => {
            if (!res) {
                return
            } else {
                this.gitService.deleteCommand(id)
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
            }
        })
    }
    onEdit(command: Command) {
        this.dialog.open(CommandFormDialogComponent, {
            data: {
                command
            }
        })
    }

}
