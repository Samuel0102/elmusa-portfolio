import { Component } from '@angular/core';
import {Experience} from "../../interfaces/experience";
import {experienceList} from "../../../../../assets/data/experience-list";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public experiences: Experience[] = experienceList;
}
