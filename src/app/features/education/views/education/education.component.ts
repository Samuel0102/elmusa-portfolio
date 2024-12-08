import { Component } from '@angular/core';
import {educationList} from "../../../../../assets/data/education-list";
import {Education} from "../../interfaces/education";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  public educations : Education[] = educationList;
}
