import {Component} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {MobileMenuService} from "../../services/mobile-menu.service";
import {AsyncPipe, KeyValuePipe} from "@angular/common";
import {Observable} from "rxjs";
import {Section} from "@core/interfaces/section";
import {TranslocoService} from "@jsverse/transloco";
import {LanguageSelectorComponent} from "@core/components/language-selector/language-selector.component";

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [
    FaIconComponent,
    KeyValuePipe,
    AsyncPipe,
    LanguageSelectorComponent
  ],
  templateUrl: './mobile-menu.component.html'
})
export class MobileMenuComponent {
  public readonly closeMenuIcon = faTimes;
  public sectionList$: Observable<Section[]>;

  get showMenu(): boolean {
    return this.mobileMenuService.showMenu();
  }

  public closeMenu(): void {
    this.mobileMenuService.closeMenu();
  }

  constructor(private readonly translocoService: TranslocoService,
              private readonly mobileMenuService: MobileMenuService) {
    this.sectionList$ = this.translocoService.selectTranslateObject('header.list') as Observable<Section[]>;
  }

}
