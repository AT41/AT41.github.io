import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mysite-scroll-indicator',
  templateUrl: './scroll-indicator.component.html',
  styleUrls: ['./scroll-indicator.component.scss']
})
export class ScrollIndicatorComponent implements OnInit {

  public static readonly SCROLL_INDICATOR_ID = 'scroll-part-';
  constructor() { }

  ngOnInit(): void {
  }

}
