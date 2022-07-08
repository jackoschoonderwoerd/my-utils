import { AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit } from '@angular/core';

import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent implements OnInit, AfterContentInit {

  constructor() { }

  @Input('icon') icon: string;

  @ContentChild(InputRefDirective) input: InputRefDirective

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (!this.input) {
      console.error('the fa-input needs an input inside its content')
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }



  get classes() {
    return this.icon
  }
}
