import {Component, Signal} from '@angular/core';
import {Experience} from "../../interfaces/experience";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";
import {Observable} from "rxjs";
import {TranslocoService} from "@jsverse/transloco";
import {TimelineModule} from "primeng/timeline";
import {toSignal} from "@angular/core/rxjs-interop";
import {CardModule} from "primeng/card";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    TimelineModule,
    CardModule,
    FaIconComponent
  ],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  public experienceList$: Signal<Experience[] | undefined>;
  public workIcon = faBriefcase;

  constructor(private translocoService: TranslocoService) {
    this.experienceList$ = toSignal(this.translocoService.selectTranslateObject('experienceSection.list') as Observable<Experience[]>);
  }

  public getAlignByLayout(): string {
    return window.innerWidth >= 1024 ? 'alternate' : 'left';
  }
}
