import { Component } from '@angular/core';
import {SkillList} from "../../interfaces/skill-list";
import {skillList} from "@assets/data/skill-list";
import {NgClass} from "@angular/common";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgClass,
    SectionHeadingComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  public readonly skills: SkillList[] = skillList;
}
