import {Component} from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {MobileMenuService} from "../../services/mobile-menu.service";
import {KeyValuePipe, NgClass} from "@angular/common";
import {sectionList} from "@assets/data/section-list";
import {TranslocoDirective} from "@jsverse/transloco";
import {LanguageSelectorComponent} from "@core/components/language-selector/language-selector.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, NgClass, TranslocoDirective, LanguageSelectorComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public readonly mobileMenuIcon = faBars;
  public readonly sections = sectionList;

  get isMenuMobileOpened(): boolean {
    return this.mobileMenuService.showMenu();
  }

  constructor(private readonly mobileMenuService: MobileMenuService) {
  }

  public openMobileMenu(): void {
    this.mobileMenuService.openMenu();
  }

}
