import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "./core/components/header/header.component";
import {MobileMenuComponent} from "./core/components/mobile-menu/mobile-menu.component";
import {HomeComponent} from "./features/home/views/home/home.component";
import {AboutComponent} from "./features/about/views/about/about.component";
import {ExperienceComponent} from "./features/experience/views/experience/experience.component";
import {SkillsComponent} from "./features/skills/views/skills/skills.component";
import {EducationComponent} from "./features/education/views/education/education.component";
import {ProjectsComponent} from "./features/projects/views/projects/projects.component";
import {FooterComponent} from "./core/components/footer/footer.component";
import {IParticlesProps, NgParticlesService, NgxParticlesModule} from "@tsparticles/angular";
import {Container, MoveDirection, OutMode} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileMenuComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    FooterComponent,
    NgxParticlesModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'elmusa-portfolio';

  public id = "tsparticles";
  public particlesOptions: IParticlesProps = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    background: {
      color: {
        value: "#151019",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        resize: {
          enable: true,
        },
      },
    },
    particles: {
      color: {
        value: "#2596be",
      },
      links: {
        color: "#2596be",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 0.5,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          height: 800,
          width: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
