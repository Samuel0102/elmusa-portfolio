import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SectionHeadingComponent} from "@shared/components/section-heading/section-heading.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SectionHeadingComponent
  ],
  templateUrl: './about.component.html'
})
export class AboutComponent {

}
