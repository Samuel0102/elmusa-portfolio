import {Component, input} from '@angular/core';
import {TranslocoDirective} from "@jsverse/transloco";

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [
    TranslocoDirective
  ],
  templateUrl: './section-heading.component.html'
})
export class SectionHeadingComponent {
  public title = input.required<string>();
}
