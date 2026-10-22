import {Component, computed, DOCUMENT, effect, inject} from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
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
  private readonly translocoService = inject(TranslocoService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly queryParams = toSignal(this.route.queryParams);

  readonly currentLang = computed(() => this.queryParams()?.['lang'] || 'pl');

  constructor() {
    effect(() => {
      const lang = this.currentLang();
      this.translocoService.setActiveLang(lang);

      this.document.documentElement.lang = lang;

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

        // Dynamiczna aktualizacja tagów dla robotów Google
        this.updateCanonicalTag(lang);
        this.ensureHreflangTags();
      });
    });
  }

  private updateCanonicalTag(lang: string): void {
    let canonicalLink = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalLink);
    }

    const canonicalUrl = lang === 'pl'
      ? 'https://vercel.app'
      : 'https://vercel.app?lang=en';

    canonicalLink.setAttribute('href', canonicalUrl);
  }


  private ensureHreflangTags(): void {
    const languages = [
      { code: 'en', url: 'https://ion-virlan.vercel.app?lang=en' },
      { code: 'pl', url: 'https://ion-virlan.vercel.app?lang=pl' },
      { code: 'x-default', url: 'https://ion-virlan.vercel.app' }
    ];

    languages.forEach(lang => {
      let link = this.document.querySelector(`link[hreflang="${lang.code}"]`);
      if (!link) {
        link = this.document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang.code);
        link.setAttribute('href', lang.url);
        this.document.head.appendChild(link);
      }
    });
  }
}
