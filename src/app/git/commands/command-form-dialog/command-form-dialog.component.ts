import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
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
        this.dialogRef.updateSize('500px');
        if (this.data) {
            console.log(this.data)
            const command: Command = this.data.command
            this.editmode = true;
            this.commandsForm.patchValue({
                command: this.data.command.command,
            });
            this.fillArrayWithEffectListItems(command.effectListItems)

        }
        console.log(this.editmode);


    }
    fillArrayWithEffectListItems(effectListItems: string[]) {
        const controls: FormControl[] = [];
        effectListItems.forEach((effectListItem: string) => {
            controls.push(new FormControl(effectListItem))
        })
        controls.forEach((control: FormControl) => {
            (<FormArray>this.commandsForm.get('effectListItems')).push(control)
        })
    }
    initCommandsForm() {
        this.commandsForm = this.fb.group({
            command: new FormControl(null, [Validators.required]),
            effectListItems: new FormArray([])
        })
    }

    getInstrumentControls() {
        return (<FormArray>this.commandsForm.get('effectListItems')).controls;
    }

    onAddEffectListItem() {
        const control = new FormControl(null);
        (<FormArray>this.commandsForm.get('effectListItems')).push(control);
    }


    onSubmitCommand() {
        const command: Command = {
            command: this.commandsForm.value.command,
            effectListItems: this.commandsForm.value.effectListItems
        }
        if (!this.editmode) {
            this.gitService.addCommand(command)
                .then(res => {
                    this.dialogRef.close()
                })
                .catch(err => console.log(err));
        } else {
            command.id = this.data.command.id;
            console.log(command)
            command.effectListItems = command.effectListItems.filter((effectListItem) => {
                return effectListItem != null;
            });
            command.effectListItems = command.effectListItems.filter((effectListItem) => {
                return effectListItem != '';
            });
            this.gitService.editCommand(command)
                .then(res => {
                    this.dialogRef.close()
                })
                .catch(err => console.log(err));
        }

    }

}
