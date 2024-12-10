import { Component } from '@angular/core';
import {AsyncPipe, NgClass, NgOptimizedImage} from "@angular/common";
import {Project} from "../../interfaces/project";
import {projectList} from "@assets/data/project-list";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faChevronLeft, faChevronRight, faEye} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    AsyncPipe,
    FaIconComponent,
    NgOptimizedImage,
    NgClass,
    SectionHeadingComponent
  ],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  public readonly projects: Project[] = projectList;

  public readonly arrowIcons = {
    right: faChevronRight,
    left: faChevronLeft
  }

  public readonly linkIcons = {
    deploy: faEye,
    repository: faGithub
  }

  public currentProjectIndex = 0;

  get mainProject(): Project {
    return this.projects[this.currentProjectIndex];
  }

  get isFirstProject(): boolean {
    return this.currentProjectIndex === 0;
  }

  public goToNextProject(): void {
    if (this.currentProjectIndex < this.projects.length) {
      this.currentProjectIndex += 1;
    }

    if (this.currentProjectIndex === this.projects.length - 1) {
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
