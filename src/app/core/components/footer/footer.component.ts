import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {socialMediaIcons} from "../../constants/icon-constants";
import {socialMediaLinks} from "../../constants/link-constants";
import {TranslocoDirective} from "@jsverse/transloco";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FaIconComponent,
    TranslocoDirective
  ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public readonly socialMediaIcons = socialMediaIcons;
  public readonly socialMediaLinks = socialMediaLinks;
}
