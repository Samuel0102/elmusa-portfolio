import {Component} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {MobileMenuService} from "../../services/mobile-menu.service";
import {KeyValuePipe} from "@angular/common";
import {sectionList} from "@assets/data/section-list";

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [
    FaIconComponent,
    KeyValuePipe
  ],
  templateUrl: './mobile-menu.component.html'
})
export class MobileMenuComponent {
  public readonly closeMenuIcon = faTimes;
  public readonly sections = sectionList;

  get showMenu(): boolean {
    return this.mobileMenuService.showMenu();
  }

  constructor(private readonly mobileMenuService: MobileMenuService) {
  }

  public closeMenu(): void {
    this.mobileMenuService.closeMenu();
  }

}
