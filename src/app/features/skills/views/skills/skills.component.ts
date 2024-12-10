import { Component } from '@angular/core';
import {SkillList} from "../../interfaces/skill-list";
import {skillList} from "@assets/data/skill-list";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgClass} from "@angular/common";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass,
    SectionHeadingComponent
  ],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  public readonly skills: SkillList[] = skillList;
}
