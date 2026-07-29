import {Component, input} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {Project} from "@features/projects/interfaces/project";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {TranslocoDirective} from "@jsverse/transloco";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage,
    FaIconComponent,
    TranslocoDirective
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  public mainProject = input.required<Project>();
  public index = input(0);

  public readonly linkIcons = {
    deploy: faEye,
    repository: faGithub
  }

}
