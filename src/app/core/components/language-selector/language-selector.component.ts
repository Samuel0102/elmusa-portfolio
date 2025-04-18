import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {TranslocoService} from "@jsverse/transloco";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

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
  public languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
  ];

  public selectedLanguage = 'pt';
  public chevronDown = faChevronDown;

  constructor(private readonly translocoService: TranslocoService) {
  }

  onLanguageChange() {
   this.translocoService.setActiveLang(this.selectedLanguage);
  }
}
