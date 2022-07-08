import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export class PlaceholderIcon {
  placeholder: string;
  icon: string
}

@Component({
  selector: 'app-inputs',
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  placeholderIcons: PlaceholderIcon[] = [
    {
      placeholder: 'email',
      icon: 'fa fa-envelope'
    },
    {
      placeholder: 'password',
      icon: 'fa fa-lock'
    },
    {
      placeholder: 'stripe',
      icon: 'fa fa-cc-stripe'
    },
    {
      placeholder: 'paypal',
      icon: 'fa fa-paypal'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
