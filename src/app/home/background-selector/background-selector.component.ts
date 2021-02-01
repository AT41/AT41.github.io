import { ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { CookieService } from 'ngx-cookie-service';
import { BackgroundImageService } from 'src/app/background-image.service';

@Component({
  selector: 'mysite-background-selector',
  templateUrl: './background-selector.component.html',
  styleUrls: ['./background-selector.component.scss']
})
export class BackgroundSelectorComponent implements AfterViewInit {
  @ViewChild(MatButtonToggleGroup) toggle;
  public pictures: string[];

  constructor(private BackgroundImageService: BackgroundImageService, private CookieService: CookieService, private ChangeDetectorRef: ChangeDetectorRef) {
    this.pictures = BackgroundImageService.pictures;
  }

  ngAfterViewInit() {
    if (this.CookieService.check(this.BackgroundImageService.backgroundCookie)) {
      let url = this.CookieService.get(this.BackgroundImageService.backgroundCookie);
      let index = this.pictures.findIndex(val => val === url);
      this.selectImage(index !== -1 ? index : 0);
    }
  }

  public selectImage(index: number) {
    this.BackgroundImageService.setBackgroundUrl(index);
    this.toggle._buttonToggles._results[index].checked = true;
    this.ChangeDetectorRef.detectChanges();
  }

}
