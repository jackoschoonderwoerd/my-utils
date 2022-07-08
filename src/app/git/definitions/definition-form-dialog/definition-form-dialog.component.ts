import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Definition, GitService } from '../../git.service';

@Component({
    selector: 'app-definition-form-dialog',
    templateUrl: './definition-form-dialog.component.html',
    styleUrls: ['./definition-form-dialog.component.scss']
})
export class DefinitionFormDialogComponent implements OnInit {

    definitionsForm: FormGroup;
    editmode: boolean = false

    constructor(
        private fb: FormBuilder,
        private gitService: GitService,
        public dialogRef: MatDialogRef<DefinitionFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any

    ) { }

    ngOnInit(): void {
        this.initDefinitionsForm()
        this.dialogRef.updateSize('310px')
        if (this.data) {
            this.editmode = true;
            this.definitionsForm.patchValue({
                item: this.data.definition.item,
                definition: this.data.definition.definition
            })
        }
        console.log(this.editmode);
    }
    initDefinitionsForm() {
        this.definitionsForm = this.fb.group({
            item: new FormControl(null, [Validators.required]),
            definition: new FormControl(null, [Validators.required]),
        })
    }
    onSubmitDefinition() {
        const definition: Definition = {
            item: this.definitionsForm.value.item,
            definition: this.definitionsForm.value.definition
        }
        if (!this.editmode) {
            this.gitService.addDefinition(definition)
                .then((res: any) => {
                    console.log(res)
                    this.dialogRef.close();
                })
                .catch(err => console.log(err))
        } else {
            definition.id = this.data.definition.id
            this.gitService.editDefinition(definition)
                .then(res => {
                    this.dialogRef.close()
                })
                .catch(err => console.log(err));
        }
    }

}
