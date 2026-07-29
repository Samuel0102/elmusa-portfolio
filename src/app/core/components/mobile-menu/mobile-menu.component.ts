import {Component, Input} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {MobileMenuService} from "../../services/mobile-menu.service";
import {AsyncPipe, KeyValuePipe} from "@angular/common";
import {Observable} from "rxjs";
import {Section} from "@core/interfaces/section";
import {TranslocoService} from "@jsverse/transloco";
import {LanguageSelectorComponent} from "@core/components/language-selector/language-selector.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [
    FaIconComponent,
    KeyValuePipe,
    AsyncPipe,
    LanguageSelectorComponent,
    RouterLink
  ],
  templateUrl: './mobile-menu.component.html'
})
export class MobileMenuComponent {
  public readonly closeMenuIcon = faTimes;
  public sectionList$: Observable<Section[]>;

  @Input() navigationMode: 'anchor' | 'router' = 'anchor';
  @Input() routerBasePath = '';

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

  public getRouterLink(section: Section): string[] {
    return [this.routerBasePath || '/', section.key.replace(/^#/, '')];
  }

}
