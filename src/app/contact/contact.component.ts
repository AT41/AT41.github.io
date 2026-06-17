import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mysite-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public email = "a.t.1592653@gmail.com";

  constructor() { }

  ngOnInit(): void {
  }

  public copyToClipboard() {
    navigator.clipboard.writeText(this.email);
  }

}
