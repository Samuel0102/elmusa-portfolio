import {Component, Signal} from '@angular/core';
import {NgClass} from "@angular/common";
import {Project} from "../../interfaces/project";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";
import {ProjectComponent} from "@features/projects/components/project/project.component";
import {ProjectDesktopComponent} from "@features/projects/components/project-desktop/project-desktop.component";
import {TranslocoService} from "@jsverse/transloco";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass,
    SectionHeadingComponent,
    ProjectComponent,
    ProjectDesktopComponent
  ],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  public projectList$: Signal<Project[]>;

  public readonly arrowIcons = {
    right: faChevronRight,
    left: faChevronLeft
  }

  public currentProjectIndex = 0;

  constructor(private translocoService: TranslocoService) {
    this.projectList$ = toSignal(this.translocoService.selectTranslateObject('projectsSection.list'), { initialValue: [] });
  }

  get mainProject(): Project {
    return this.projectList$()[this.currentProjectIndex];
  }

  get isFirstProject(): boolean {
    return this.currentProjectIndex === 0;
  }

  public goToNextProject(): void {
    if (this.currentProjectIndex < this.projectList$().length) {
      this.currentProjectIndex += 1;
    }

    if (this.currentProjectIndex === this.projectList$().length) {
      this.currentProjectIndex = 0;
    }
  }

  public goToPreviousProject(): void {
    if (this.isFirstProject) {
      return;
    }

    this.currentProjectIndex -= 1;
  }
}
