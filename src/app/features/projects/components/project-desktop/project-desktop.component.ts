import {Component, input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Project} from "@features/projects/interfaces/project";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-project-desktop',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './project-desktop.component.html',
  styleUrl: './project-desktop.component.scss'
})
export class ProjectDesktopComponent {
  public mainProject = input.required<Project>();

  public readonly linkIcons = {
    deploy: faEye,
    repository: faGithub
  }
}
