import { Component } from '@angular/core';
import {educationList} from "@assets/data/education-list";
import {Education} from "../../interfaces/education";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    SectionHeadingComponent
  ],
  templateUrl: './education.component.html'
})
export class EducationComponent {
  public readonly educations : Education[] = educationList;
}
