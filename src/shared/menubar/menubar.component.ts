import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PERSONAL_PROJECTS, PersonalProject } from 'src/app/personal-projects/personal-projects.config';

@Component({
  selector: 'mysite-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
  personalProjects: PersonalProject[] = PERSONAL_PROJECTS;
  projectsMenuOpen = false;

  constructor(private router: Router) { }

  isPersonalProjectsActive(): boolean {
    return this.router.url.startsWith('/personal-projects');
  }

  openProjectsMenu(): void {
    this.projectsMenuOpen = true;
  }

  closeProjectsMenu(): void {
    this.projectsMenuOpen = false;
  }
}
