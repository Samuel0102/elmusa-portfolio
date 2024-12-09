import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {socialMediaIcons} from "../../constants/icon-constants";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [
        FaIconComponent
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public readonly socialMediaIcons = socialMediaIcons;
}
