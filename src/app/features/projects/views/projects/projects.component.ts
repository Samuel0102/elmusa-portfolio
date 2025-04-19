import {Component, Signal} from '@angular/core';
import {Project} from "../../interfaces/project";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";
import {ProjectDesktopComponent} from "@features/projects/components/project-desktop/project-desktop.component";
import {TranslocoService} from "@jsverse/transloco";
import {toSignal} from "@angular/core/rxjs-interop";
import {CarouselModule} from "primeng/carousel";
import {ProjectComponent} from "@features/projects/components/project/project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    ProjectDesktopComponent,
    CarouselModule,
    ProjectComponent
  ],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  public projectList$: Signal<Project[]>;

  public readonly arrowIcons = {
    right: faChevronRight,
    left: faChevronLeft
  }

  constructor(private translocoService: TranslocoService) {
    this.projectList$ = toSignal(this.translocoService.selectTranslateObject('projectsSection.list'), { initialValue: [] });
  }

  get isNotLargeDevice(): boolean {
    return window.innerWidth < 1280;
  }

}
