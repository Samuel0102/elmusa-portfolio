import { Component } from '@angular/core';
import {Education} from "../../interfaces/education";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";
import {Observable} from "rxjs";
import {TranslocoService} from "@jsverse/transloco";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    AsyncPipe
  ],
  templateUrl: './education.component.html'
})
export class EducationComponent {
  public educationList$: Observable<Education[]>;

  constructor(private translocoService: TranslocoService) {
    this.educationList$ = this.translocoService.selectTranslateObject('educationSection.list') as Observable<Education[]>;
  }
}
