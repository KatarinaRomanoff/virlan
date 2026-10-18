import {Component, signal} from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import {ProfileItem, FlagshipItem, EducationItem, Scholarship, MediaItem, MediaType} from './models/home.models';
import {YoutubeModalComponent} from '../../components/youtube-modal/youtube-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslocoDirective, YoutubeModalComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  isModalOpen = signal(false);
  activeItem = signal<MediaItem | null>(null);

  readonly profileItems: ProfileItem[] = [
    { label: 'profile.items.instruments.label', value: 'profile.items.instruments.value' },
    { label: 'profile.items.directions.label', value: 'profile.items.directions.value' },
    { label: 'profile.items.flagship.label', value: 'profile.items.flagship.value' },
    { label: 'profile.items.born.label', value: 'profile.items.born.value' },
    { label: 'profile.items.base.label', value: 'profile.items.base.value' },
    { label: 'profile.items.activity.label', value: 'profile.items.activity.value' },
  ];

  readonly flagshipItems: FlagshipItem[] = [
    { title: 'flagship.items.fusion.title', description: 'flagship.items.fusion.description' },
    { title: 'flagship.items.composition.title', description: 'flagship.items.composition.description' },
    { title: 'flagship.items.album.title', description: 'flagship.items.album.description' },
  ];

  readonly educationItems: EducationItem[] = [
    { school: 'education.items.wroclaw.school', degree: 'education.items.wroclaw.degree', major: 'education.items.wroclaw.major' },
    { school: 'education.items.bucharest.school', degree: 'education.items.bucharest.degree', major: 'education.items.bucharest.major' },
    { school: 'education.items.chisinau.school', degree: '', major: 'education.items.chisinau.major' },
  ];

  readonly scholarships: Scholarship[] = [
    { year: '2021', title: 'achievements.items.scholarship2021.title', description: 'achievements.items.scholarship2021.description' },
    { year: '2024', title: 'achievements.items.scholarship2024.title', description: 'achievements.items.scholarship2024.description' },
  ];

  readonly mediaItems = signal<MediaItem[]>([
    { title: 'media.items.gaudeAlbum.title', subtitle: 'media.items.gaudeAlbum.subtitle', youtubeId: 'OLAK5uy_lI_ZeBjj8DM8YO-xSKe6P7XJ0OxvJcGjI', type: MediaType.Playlist, customThumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/b7acd7bdabc27ec5c459542feec7b08346fc0f7d' },
    { title: 'media.items.cantaCucul.title', subtitle: 'media.items.cantaCucul.subtitle', youtubeId: '4XcdvlnEyv0', type: MediaType.Video },
    { title: 'media.items.szlempo.title', subtitle: 'media.items.szlempo.subtitle', youtubeId: 'xQCoOyMVW6Q', type: MediaType.Video },
    { title: 'media.items.vosValcea.title', subtitle: 'media.items.vosValcea.subtitle', youtubeId: 'EBMQUqg4z3o', type: MediaType.Video },
    { title: 'media.items.blueGreen.title', subtitle: 'media.items.blueGreen.subtitle', youtubeId: 'WG8DRMViq-U', type: MediaType.Video },
  ]);

  openVideo(item: MediaItem): void {
    this.activeItem.set(item);
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.activeItem.set(null);
  }

  protected readonly MediaType = MediaType;
}
