import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GitService, Command } from '../../git.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-command-form-dialog',
    templateUrl: './command-form-dialog.component.html',
    styleUrls: ['./command-form-dialog.component.scss']
})
export class CommandFormDialogComponent implements OnInit {

    commandsForm: FormGroup;
    editmode: boolean = false;

    constructor(
        private fb: FormBuilder,
        private gitService: GitService,
        private dialogRef: MatDialogRef<CommandFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any
    ) { }

    ngOnInit(): void {
        this.initCommandsForm()
        this.dialogRef.updateSize('310px');
        if (this.data) {
            this.editmode = true;
            this.commandsForm.patchValue({
                command: this.data.command.command,
                effect: this.data.command.effect
            })
        }


    }
    initCommandsForm() {
        this.commandsForm = this.fb.group({
            command: new FormControl(null, [Validators.required]),
            effect: new FormControl(null, [Validators.required])
        })
    }


    onSubmitCommand() {
        const command: Command = {
            command: this.commandsForm.value.command,
            effect: this.commandsForm.value.effect
        }
        if (!this.editmode) {
            this.gitService.addCommand(command)
                .then((res: any) => {
                    console.log(res)
                    this.dialogRef.close();
                })
                .catch(err => console.log(err));
        } else {
            command.id = this.data.command.id;
            this.gitService.editCommand(command)
                .then(res => {
                    console.log(res)
                    this.dialogRef.close()
                })
                .catch(err => console.log(err));
        }
    }

}
