import {Component, input} from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [],
  templateUrl: './section-heading.component.html'
})
export class SectionHeadingComponent {
  public title = input.required<string>()
}
