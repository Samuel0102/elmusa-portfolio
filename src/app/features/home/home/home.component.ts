import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {TypewriterEffectService} from "../../../shared/services/typewriter-effect.service";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faGithub, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {Observable, of} from "rxjs";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    FaIconComponent,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public typedTitle$: Observable<string> = of();

  public subtitles = [
    'Web Developer',
    'Fullstack Developer',
    'Python Developer'
  ];

  public socialMediaIcons = {
    linkedin: faLinkedinIn,
    github: faGithub,
    instagram: faInstagram,
  }

  public arrowDownIcon = faArrowDown;

  constructor(private readonly typeWriterService: TypewriterEffectService) {
  }

  ngOnInit() {
    this.typedTitle$ = this.typeWriterService.getTypeWriterEffect(this.subtitles);
  }

}
