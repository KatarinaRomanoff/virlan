import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './language-switcher.component.html',
})
export class LanguageSwitcherComponent {
  protected transloco = inject(TranslocoService);
  protected availableLangs = ['pl', 'en'];
  protected activeLang = 'pl';

  constructor() {
    // Load saved language preference
    const savedLang = localStorage.getItem('language');
    if (savedLang && this.availableLangs.includes(savedLang)) {
      this.activeLang = savedLang;
      this.transloco.setActiveLang(savedLang);
    }
  }

  changeLanguage(lang: string): void {
    this.activeLang = lang;
    this.transloco.setActiveLang(lang);
    localStorage.setItem('language', lang);
  }
}
