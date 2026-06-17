import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  OnDestroy,
} from '@angular/core';

export interface TocSection {
  id: string;
  label: string;
  icon: string;
  absolutePosition?: number;
}

@Component({
  selector: 'mysite-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
})
export class TableOfContentsComponent implements AfterViewInit, OnDestroy {
  @Input() sections: TocSection[] = [];

  activeSection: string;

  private observer: IntersectionObserver;
  private sectionRatios = new Map<string, number>();

  constructor(
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngAfterViewInit(): void {
    if (!this.sections.length) {
      return;
    }

    this.activeSection = this.sections[0].id;

    this.observer = new IntersectionObserver(
      (entries) => this.onIntersect(entries),
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    this.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        this.observer.observe(element);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  scrollTo(id: string, event: Event): void {
    // Prevent the link from being followed.
    event.preventDefault();
    if (this.sections.find((section) => section.id === id)?.absolutePosition !== undefined) {
      window.scrollTo({
        top: this.sections.find((section) => section.id === id)?.absolutePosition,
        behavior: 'smooth',
      });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private onIntersect(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      this.sectionRatios.set(entry.target.id, entry.intersectionRatio);
    });

    let bestId = this.activeSection;
    let bestRatio = 0;

    this.sections.forEach((section) => {
      const ratio = this.sectionRatios.get(section.id) || 0;
      if (ratio > bestRatio) {
        bestRatio = ratio;
        bestId = section.id;
      }
    });

    if (bestRatio > 0 && bestId !== this.activeSection) {
      this.ngZone.run(() => {
        this.activeSection = bestId;
        this.changeDetectorRef.detectChanges();
      });
    }
  }
}
