import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class BackgroundImageService {
  private _backgroundElementRef: ElementRef;

  public setBackgroundElement(el: ElementRef) {
    this._backgroundElementRef = el;
  }
  public setBackgroundUrl(pictureUrl: String) {
    this._backgroundElementRef.nativeElement.style['background-image'] = `url(${pictureUrl})`;
  }

  constructor() { }
}
