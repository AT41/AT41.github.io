import { Component } from '@angular/core';
import { TocSection } from 'src/shared/table-of-contents/table-of-contents.component';

@Component({
  selector: 'mysite-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tocSections: TocSection[] = [
    { id: 'section-one', label: 'Home', icon: 'home', absolutePosition: 0 },
    { id: 'section-two', label: 'About Me', icon: 'person' },
    { id: 'section-three', label: 'Skills', icon: 'code' },
    { id: 'section-four', label: 'Education', icon: 'school' },
    { id: 'section-five', label: 'Work Experience', icon: 'work' },
  ];
}
