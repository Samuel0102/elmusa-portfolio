import { Component } from '@angular/core';
import {Experience} from "../../interfaces/experience";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";
import {Observable} from "rxjs";
import {TranslocoService} from "@jsverse/transloco";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    AsyncPipe
  ],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  public experienceList$: Observable<Experience[]>;

  constructor(private translocoService: TranslocoService) {
    this.experienceList$ = this.translocoService.selectTranslateObject('experienceSection.list') as Observable<Experience[]>;
  }
}
