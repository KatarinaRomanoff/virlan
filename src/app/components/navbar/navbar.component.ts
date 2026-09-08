import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  protected readonly links = [
    { label: 'Profile', href: '#profil-artysty', muted: false },
    { label: 'Kwintet Iona Virlana', href: '#kwintet', muted: true },
    { label: 'Edukacja', href: '#edukacja', muted: true },
    { label: 'Osiągnięcia', href: '#osiagniecia', muted: true },
    { label: 'Współpraca', href: '#wspolpraca', muted: true },
  ];

  protected menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
