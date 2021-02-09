import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { BackgroundImageService } from './background-image.service';
import firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
  selector: 'mysite-root',
  templateUrl: './mysite.component.html',
  providers: [BackgroundImageService],
  styleUrls: ['./mysite.component.scss']
})
export class MySiteComponent implements AfterViewInit {
  private readonly X_OFFSET = 40;
  private readonly Y_OFFSET = 18; 
  @ViewChild('mysite_background') background: ElementRef;
  public currentPictureUrl: String;
  
  constructor(private el: ElementRef, private BackgroundImageService: BackgroundImageService) {
    let db = firebase.initializeApp(environment.firebase).database();
    firebase.auth().signInAnonymously();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        var date = new Date();

        db.ref(`visitors/${uid}`).set({date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`});
      }
    });
  }

  ngAfterViewInit() {
    this.BackgroundImageService.setBackgroundElement(this.background);
    
    this.background.nativeElement.style['background-position-x'] = `${this.X_OFFSET}%`;
    this.background.nativeElement.style['background-position-y'] = `${this.Y_OFFSET}%`;
    fromEvent(document.body, 'mousemove').subscribe((e: MouseEvent) => {
      this.background.nativeElement.style['background-position-x'] = `calc(${e.pageX*5/window.innerWidth}rem + ${this.X_OFFSET}%)`;
      this.background.nativeElement.style['background-position-y'] = `calc(${e.pageY*2/window.innerHeight}rem + ${this.Y_OFFSET}%)`;
    })
  }
}