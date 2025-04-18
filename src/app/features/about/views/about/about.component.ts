import {Component, computed, OnDestroy, signal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";
import {TranslocoDirective, TranslocoService} from "@jsverse/transloco";
import {Subject} from "rxjs";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SectionHeadingComponent,
    TranslocoDirective
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnDestroy {
  private readonly currentLang = signal<string>('');
  private unsubscribe$ = new Subject<void>();

  resumeUrl = computed(() => {
    const lang = this.currentLang();
    return lang === 'pt'
      ? 'assets/files/curriculum-pt.pdf'
      : 'assets/files/curriculum-en.pdf';
  });

  constructor(private readonly translocoService: TranslocoService) {
    this.currentLang = signal(this.translocoService.getActiveLang());

    this.translocoService.langChanges$.subscribe(lang => {
      this.currentLang.set(lang);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
