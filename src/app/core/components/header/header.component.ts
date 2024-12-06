import {Component, OnInit} from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {MobileMenuService} from "../../services/mobile-menu.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public mobileMenuIcon = faBars;

  constructor(private readonly mobileMenuService: MobileMenuService) {
  }

  public openMobileMenu(): void {
    this.mobileMenuService.openMenu();
  }

}
