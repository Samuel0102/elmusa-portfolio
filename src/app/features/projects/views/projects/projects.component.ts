import {Component, Signal} from '@angular/core';
import {Project} from "../../interfaces/project";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";
import {TranslocoService} from "@jsverse/transloco";
import {toSignal} from "@angular/core/rxjs-interop";
import {ProjectComponent} from "@features/projects/components/project/project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    ProjectComponent
  ],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  public projectList$: Signal<Project[]>;

  constructor(private translocoService: TranslocoService) {
    this.projectList$ = toSignal(this.translocoService.selectTranslateObject('projectsSection.list'), { initialValue: [] });
  }

}
