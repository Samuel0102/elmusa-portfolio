import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {TypewriterEffectService} from "@shared/services/typewriter-effect.service";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {Observable, of} from "rxjs";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {socialMediaIcons} from "@core/constants/icon-constants";
import {socialMediaLinks} from "@core/constants/link-constants";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    FaIconComponent,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public typedTitle$: Observable<string> = of();

  public readonly socialMediaIcons = socialMediaIcons;
  public readonly socialMediaLinks = socialMediaLinks;

  public readonly subtitles = [
    'Web Developer',
    'Fullstack Developer',
    'Python Developer',
    'Software Engineer'
  ];

  public readonly arrowDownIcon = faArrowDown;

  constructor(private readonly typeWriterService: TypewriterEffectService) {
  }

  ngOnInit() {
    this.typedTitle$ = this.typeWriterService.getTypeWriterEffect(this.subtitles);
  }

}
