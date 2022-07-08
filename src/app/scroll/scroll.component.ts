import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  constructor(
    private router: Router,
    private scroller: ViewportScroller
  ) { }

  ngOnInit(): void {
  }
  onToBottom() {
    this.router.navigate([], { fragment: 'lorem3' })
    this.scroller.scrollToAnchor('lorem3')
  }
  onToTop() {
    this.router.navigate([], { fragment: 'lorem1' })
    this.scroller.scrollToAnchor('lorem1')
  }
}
