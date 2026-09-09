import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { NavbarLink } from './models/navbar.models';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslocoDirective, LanguageSwitcherComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuOpen = false;

  readonly links: NavbarLink[] = [
    { key: 'label', href: '#profile', muted: false },
    { key: 'band', href: '#band', muted: true },
    { key: 'education', href: '#education', muted: true },
    { key: 'achievements', href: '#achievements', muted: true },
    { key: 'colaboration', href: '#collaboration', muted: true },
    { key: 'media', href: '#media', muted: true },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
