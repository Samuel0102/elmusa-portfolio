import { Component } from '@angular/core';
import {SkillList} from "../../interfaces/skill-list";
import {skillList} from "../../../../../assets/data/skill-list";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  public skills: SkillList[] = skillList;
}
