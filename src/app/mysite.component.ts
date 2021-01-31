import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { BackgroundImageService } from './background-image.service';

@Component({
  selector: 'mysite-root',
  templateUrl: './mysite.component.html',
  providers: [BackgroundImageService],
  styleUrls: ['./mysite.component.scss']
})
export class MySiteComponent {
  private readonly X_OFFSET = 40;
  private readonly Y_OFFSET = 18; 
  @ViewChild('mysite_background') background: ElementRef;
  public currentPictureUrl: String;
  
  constructor(private el: ElementRef, private BackgroundImageService: BackgroundImageService) {}

  ngOnInit() {
    this.el.nativeElement.style['background-position-x'] = `${this.X_OFFSET}%`;
    this.el.nativeElement.style['background-position-y'] = `${this.Y_OFFSET}%`;
    fromEvent(document.body, 'mousemove').subscribe((e: MouseEvent) => {
      this.el.nativeElement.style['background-position-x'] = `calc(${e.pageX*5/window.innerWidth}rem + ${this.X_OFFSET}%)`;
      this.el.nativeElement.style['background-position-y'] = `calc(${e.pageY*2/window.innerHeight}rem + ${this.Y_OFFSET}%)`;
    })
  }

  ngAfterViewInit() {
    this.BackgroundImageService.setBackgroundElement(this.background);
  }
}
