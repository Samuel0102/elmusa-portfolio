import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./core/components/header/header.component";
import {MobileMenuComponent} from "./core/components/mobile-menu/mobile-menu.component";
import {HomeComponent} from "./features/home/views/home/home.component";
import {AboutComponent} from "./features/about/views/about/about.component";
import {ExperienceComponent} from "./features/experience/views/experience/experience.component";
import {SkillsComponent} from "./features/skills/views/skills/skills.component";
import {EducationComponent} from "./features/education/views/education/education.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MobileMenuComponent, HomeComponent, AboutComponent, ExperienceComponent, SkillsComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elmusa-portfolio';
}
