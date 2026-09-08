import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  protected readonly links = [
    { label: 'Profile', href: '#profile', muted: false },
    { label: 'Kwintet Iona Virlana', href: '#band', muted: true },
    { label: 'Edukacja', href: '#education', muted: true },
    { label: 'Osigniecia', href: '#achievements', muted: true },
    { label: 'Współpraca', href: '#colabortion', muted: true },
    { label: 'Media', href: '#media', muted: true },
  ];

  protected menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
