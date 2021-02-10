import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mysite-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public email = "anthony.tang2@ucalgary.ca";

  constructor() { }

  ngOnInit(): void {
  }

  public copyToClipboard() {
    navigator.clipboard.writeText(this.email);
  }

}
