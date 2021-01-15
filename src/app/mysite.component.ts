import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mysite-root',
  templateUrl: './mysite.component.html',
  styleUrls: ['./mysite.component.scss']
})
export class MySiteComponent {
  title = 'MySite';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    fromEvent(document.body, 'mousemove').subscribe((e: MouseEvent) => {
      this.el.nativeElement.style['background-position-y'] = `${e.offsetY*5/window.innerHeight - 10}rem`;
      this.el.nativeElement.style['background-position-x'] = `${e.offsetX*5/window.innerWidth - 6}rem`;
    })
  }
}
