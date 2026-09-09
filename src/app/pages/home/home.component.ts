import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { ProfileItem, FlagshipItem, EducationItem, Scholarship, MediaItem } from './models/home.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslocoDirective],
  templateUrl: './home.component.html',
})
export class HomeComponent {
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
    { school: 'education.items.chisinau.school', degree: 'education.items.chisinau.degree', major: 'education.items.chisinau.major' },
  ];

  readonly scholarships: Scholarship[] = [
    { year: '2021', title: 'achievements.items.scholarship2021.title', description: 'achievements.items.scholarship2021.description' },
    { year: '2024', title: 'achievements.items.scholarship2024.title', description: 'achievements.items.scholarship2024.description' },
  ];

  readonly mediaItems: MediaItem[] = [
    { title: 'media.items.gaudeAlbum.title', subtitle: 'media.items.gaudeAlbum.subtitle', link: "https://www.youtube.com/playlist?list=OLAK5uy_lI_ZeBjj8DM8YO-xSKe6P7XJ0OxvJcGjI" },
    { title: 'media.items.cantaCucul.title', subtitle: 'media.items.cantaCucul.subtitle', link: 'https://www.youtube.com/watch?v=4XcdvlnEyv0' },
    { title: 'media.items.szlempo.title', subtitle: 'media.items.szlempo.subtitle', link: 'https://www.youtube.com/watch?v=xQCoOyMVW6Q' },
    { title: 'media.items.vosValcea.title', subtitle: 'media.items.vosValcea.subtitle', link: 'https://www.youtube.com/watch?v=EBMQUqg4z3o' },
    { title: 'media.items.blueGreen.title', subtitle: 'media.items.blueGreen.subtitle', link: 'https://www.youtube.com/watch?v=WG8DRMViq-U' },
  ];
}
