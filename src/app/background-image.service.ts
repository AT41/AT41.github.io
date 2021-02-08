import { ElementRef, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class BackgroundImageService {
  private _backgroundElementRef: ElementRef;
  public readonly backgroundCookie = "main_background_url"
  public readonly pictures = [
    'assets/field.jpg',
    'assets/banff_springs.jpg',
    'assets/house.jpg',
    'assets/vancouver_woods.jpg'
  ]

  public setBackgroundElement(el: ElementRef) {
    this._backgroundElementRef = el;
  }
  public setBackgroundUrl(buttonIndex: number) {
    this._backgroundElementRef.nativeElement.style['background-image'] = `url(${this.pictures[buttonIndex]})`;
    this.CookieService.set(this.backgroundCookie, this.pictures[buttonIndex]);
  }

  constructor(private CookieService: CookieService) { }
}
