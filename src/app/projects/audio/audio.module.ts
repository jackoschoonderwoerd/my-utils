import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudioRoutingModule } from './audio-routing.module';
import { AudioComponent } from './audio.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AudioMaterialModule } from './audio-maerial.module';


@NgModule({
    declarations: [
        AudioComponent
    ],
    imports: [
        CommonModule,
        AudioRoutingModule,
        FlexLayoutModule,
        AudioMaterialModule
    ]
})
export class AudioModule { }
