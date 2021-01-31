import { Input, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import * as EventEmitter from 'events';
import { BackgroundImageService } from 'src/app/background-image.service';

@Component({
  selector: 'mysite-background-selector',
  templateUrl: './background-selector.component.html',
  styleUrls: ['./background-selector.component.scss']
})
export class BackgroundSelectorComponent implements OnInit {
  public readonly pictures = [
    '../assets/field.jpg',
    '../assets/banff_springs.jpg',
    '../assets/house.jpg',
    '../assets/vancouver_woods.jpg'
  ]
  @ViewChild(MatButtonToggleGroup) toggle;
  
  constructor(private BackgroundImageService: BackgroundImageService) { }

  ngOnInit(): void {
  }

  public selectImage(pictureUrl: String) {
    console.log(pictureUrl)
    this.BackgroundImageService.setBackgroundUrl(pictureUrl);
  }

}
