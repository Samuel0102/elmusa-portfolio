import {Component} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {MobileMenuService} from "../../services/mobile-menu.service";

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  public closeMenuIcon = faTimes;

  get showMenu(): boolean {
    return this.mobileMenuService.showMenu();
  }

  constructor(private readonly mobileMenuService: MobileMenuService) {
  }

  public closeMenu(): void {
    this.mobileMenuService.closeMenu();
  }

}
