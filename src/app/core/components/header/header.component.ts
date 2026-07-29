import {Component, Input} from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {MobileMenuService} from "../../services/mobile-menu.service";
import {AsyncPipe, NgClass} from "@angular/common";
import {TranslocoDirective, TranslocoService} from "@jsverse/transloco";
import {LanguageSelectorComponent} from "@core/components/language-selector/language-selector.component";
import {Observable} from "rxjs";
import {Section} from "@core/interfaces/section";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, NgClass, TranslocoDirective, LanguageSelectorComponent, AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public readonly mobileMenuIcon = faBars;
  public sectionList$: Observable<Section[]>;

  @Input() navigationMode: 'anchor' | 'router' = 'anchor';
  @Input() routerBasePath = '';

  get isMenuMobileOpened(): boolean {
    return this.mobileMenuService.showMenu();
  }

  public openMobileMenu(): void {
    this.mobileMenuService.openMenu();
  }

  constructor(private readonly translocoService: TranslocoService,
              private readonly mobileMenuService: MobileMenuService) {
    this.sectionList$ = this.translocoService.selectTranslateObject('header.list') as Observable<Section[]>;
  }

  public getRouterLink(section: Section): string[] {
    return [this.routerBasePath || '/', this.getSectionPath(section.key)];
  }

  private getSectionPath(sectionKey: string): string {
    return sectionKey.replace(/^#/, '');
  }

}
