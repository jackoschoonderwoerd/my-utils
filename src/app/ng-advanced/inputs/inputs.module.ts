import { CommonModule } from '@angular/common';
import { FaInputComponent } from './lib/fa-input/fa-input.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputRefDirective } from './lib/common/input-ref.directive';
import { InputsComponent } from './inputs.component';
import { InputsMaterialModule } from './inputs-material.module';
import { InputsRoutingModule } from './inputs-routing.module';
import { NgModule } from '@angular/core';




@NgModule({
  declarations: [
    InputsComponent,
    FaInputComponent,
    InputRefDirective
  ],
  imports: [
    CommonModule,
    InputsRoutingModule,
    InputsMaterialModule,
    FlexLayoutModule,

  ]
})
export class InputsModule { }
