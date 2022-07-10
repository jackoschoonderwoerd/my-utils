import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {

  classIsAdded: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  onAddClass() {
    console.log('add class');
    // this.classIsAdded = false;
    this.classIsAdded = true;
    setTimeout(() => {
        this.onRemoveClass();
    }, 1000);
  }
  onRemoveClass() {
    console.log('remove class');
    this.classIsAdded = false;
  }
}
