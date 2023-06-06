import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mysite-circular-image-holder',
  templateUrl: './circular-image-holder.component.html',
  styleUrls: ['./circular-image-holder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircularImageHolderComponent implements OnInit {

  @Input() offsetX: number;
  @Input() offsetY: number;

  constructor() { }

  ngOnInit(): void {
  }

}
