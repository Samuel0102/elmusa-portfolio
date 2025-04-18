import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";
import {TranslocoDirective} from "@jsverse/transloco";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SectionHeadingComponent,
    TranslocoDirective
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
}
