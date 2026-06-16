import { Component } from '@angular/core';
import { TocSection } from 'src/shared/table-of-contents/table-of-contents.component';

@Component({
  selector: 'mysite-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tocSections: TocSection[] = [
    { id: 'section-one', label: 'Home' },
    { id: 'section-two', label: 'About Me' },
    { id: 'section-three', label: 'Education' },
    { id: 'section-four', label: 'Work Experience' },
  ];
}
