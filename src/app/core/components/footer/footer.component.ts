import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {socialMediaIcons} from "../../constants/icon-constants";
import {socialMediaLinks} from "../../constants/link-constants";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public readonly socialMediaIcons = socialMediaIcons;
  public readonly socialMediaLinks = socialMediaLinks;
}
