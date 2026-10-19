import { Component, computed, effect, inject } from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly translocoService = inject(TranslocoService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  private readonly queryParams = toSignal(this.route.queryParams);

  readonly currentLang = computed(() => this.queryParams()?.['lang'] || 'pl');

  constructor() {
    effect(() => {
      const lang = this.currentLang();
      this.translocoService.setActiveLang(lang);

      firstValueFrom(this.translocoService.load(lang)).then(() => {
        this.title.setTitle(
          this.translocoService.translate('seo.title', undefined, lang) ?? '',
        );
        this.meta.updateTag({
          name: 'description',
          content:
            this.translocoService.translate(
              'seo.description',
              undefined,
              lang,
            ) ?? '',
        });
      });
    });
  }

  changeLanguage(lang: string): void {
    this.router.navigate([], {
      queryParams: { lang },
      queryParamsHandling: 'merge',
    });
  }
}
