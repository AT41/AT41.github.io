import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mysite-digital-photoframe',
  templateUrl: './digital-photoframe.component.html',
  styleUrls: ['./digital-photoframe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitalPhotoframeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
