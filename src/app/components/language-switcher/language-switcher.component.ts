import { Component, computed, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './language-switcher.component.html',
})
export class LanguageSwitcherComponent {
  protected availableLangs = ['pl', 'en'];

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly queryParams = toSignal(this.route.queryParams);

  protected activeLang = computed(() => this.queryParams()?.['lang'] || 'pl');

  changeLanguage(lang: string): void {
    this.router.navigate([], {
      queryParams: { lang },
      queryParamsHandling: 'merge',
    });
  }
}
