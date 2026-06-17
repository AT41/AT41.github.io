import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TocSection } from 'src/shared/table-of-contents/table-of-contents.component';
import {
  getAdjacentProject,
  getProjectBySlug,
  PERSONAL_PROJECTS,
} from './personal-projects.config';

@Component({
  selector: 'mysite-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss'],
})
export class PersonalProjectsComponent implements OnInit, OnDestroy {
  tocSections: TocSection[] = [];
  hasPrev = false;
  hasNext = false;
  activeSlug = '';

  private routerSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.updateFromRoute();
    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.updateFromRoute());
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  navigatePrev(): void {
    const project = getAdjacentProject(this.activeSlug, 'prev');
    if (project) {
      this.router.navigate(['/personal-projects', project.slug]);
    }
  }

  navigateNext(): void {
    const project = getAdjacentProject(this.activeSlug, 'next');
    if (project) {
      this.router.navigate(['/personal-projects', project.slug]);
    }
  }

  private updateFromRoute(): void {
    const slug = this.route.firstChild?.snapshot.url[0]?.path ?? PERSONAL_PROJECTS[0].slug;
    this.activeSlug = slug;
    const project = getProjectBySlug(slug);
    this.tocSections = project?.tocSections ?? [];
    this.hasPrev = !!getAdjacentProject(slug, 'prev');
    this.hasNext = !!getAdjacentProject(slug, 'next');
    window.scrollTo({ top: 0 });
  }
}
