import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormControl, Validators, UntypedFormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Definition, GitService } from '../../git.service';

@Component({
    selector: 'app-definition-form-dialog',
    templateUrl: './definition-form-dialog.component.html',
    styleUrls: ['./definition-form-dialog.component.scss']
})
export class DefinitionFormDialogComponent implements OnInit {

    definitionsForm: UntypedFormGroup;
    editmode: boolean = false

    constructor(
        private fb: UntypedFormBuilder,
        private gitService: GitService,
        public dialogRef: MatDialogRef<DefinitionFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any

    ) { }

    ngOnInit(): void {
        this.initDefinitionsForm()
        this.dialogRef.updateSize('500px')
        if (this.data) {
            const definition: Definition = this.data.definition
            this.editmode = true;
            this.definitionsForm.patchValue({
                topic: definition.topic,
                // definition: this.data.definition.definition
            })
            this.fillArrayWithDefinitionListItems(definition.definitionListItems)
        }
        console.log(this.editmode);
    }

    fillArrayWithDefinitionListItems(definitionListItems: string[]) {
        const controls: UntypedFormControl[] = [];
        definitionListItems.forEach((definitionListItem: string) => {
            controls.push(new UntypedFormControl(definitionListItem))
        })
        controls.forEach((control: UntypedFormControl) => {
            (<UntypedFormArray>this.definitionsForm.get('definitionListItems')).push(control)
        })
    }

    initDefinitionsForm() {
        this.definitionsForm = this.fb.group({
            topic: new UntypedFormControl(null, [Validators.required]),
            definitionListItems: new UntypedFormArray([]),
        })
    }

    getInstrumentControls() {
        return (<UntypedFormArray>this.definitionsForm.get('definitionListItems')).controls;
    }

    onAddDefinitionListItem() {
        const control = new UntypedFormControl(null);
        (<UntypedFormArray>this.definitionsForm.get('definitionListItems')).push(control);
    }

    onSubmitDefinition() {
        console.log(this.definitionsForm.value)
        const definition: Definition = {
            topic: this.definitionsForm.value.topic,
            definitionListItems: this.definitionsForm.value.definitionListItems
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
            definition.definitionListItems = definition.definitionListItems.filter((definitionListItem) => {
                return definitionListItem != null;
            })
            this.gitService.editDefinition(definition)
                .then(res => {
                    this.dialogRef.close()
                })
                .catch(err => console.log(err));
        }
    }

}
