import { Component } from '@angular/core';
import {Experience} from "../../interfaces/experience";
import {experienceList} from "@assets/data/experience-list";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    SectionHeadingComponent
  ],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  public readonly experiences: Experience[] = experienceList;
}
