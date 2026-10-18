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
    { key: 'label', href: '#profile', active: false },
    { key: 'band', href: '#band', active: false },
    { key: 'education', href: '#education', active: false },
    { key: 'achievements', href: '#achievements', active: false },
    { key: 'colaboration', href: '#collaboration', active: false },
    { key: 'media', href: '#media', active: false },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  setActive(selectedLink: NavbarLink): void {
    this.links.forEach(link => link.active = false);
    selectedLink.active = true;
    this.closeMenu();
  }
}
