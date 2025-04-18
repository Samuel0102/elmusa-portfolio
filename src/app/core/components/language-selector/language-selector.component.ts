import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {TranslocoService} from "@jsverse/transloco";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {Language} from "@core/components/language-selector/interfaces/language";

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    FaIconComponent
  ],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {
  public languages: Language[] = [
    { code: 'en', flag: '🇺🇸' },
    { code: 'pt', flag: '🇧🇷' },
  ];

  public selectedLanguage = 'pt';
  public chevronDown = faChevronDown;

  constructor(private readonly translocoService: TranslocoService) {
    this.selectedLanguage = this.translocoService.getActiveLang();
  }

  onLanguageChange() {
   this.translocoService.setActiveLang(this.selectedLanguage);
  }
}
