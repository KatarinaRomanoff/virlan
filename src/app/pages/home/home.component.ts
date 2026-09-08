import { Component } from '@angular/core';

interface ProfileItem {
  label: string;
  value: string;
}

interface FlagshipItem {
  title: string;
  description: string;
}

interface EducationItem {
  school: string;
  degree: string;
  major: string;
}

interface Scholarship {
  year: string;
  title: string;
  description: string;
}

interface MediaItem {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  protected readonly profileItems: ProfileItem[] = [
    { label: 'Główne Instrumenty', value: 'Kontrabas, gitara basowa' },
    {
      label: 'kierunki twórcze',
      value: 'Współczesny jazz, kompozycja, folk-jazz aranżacja',
    },
    {
      label: 'Projekt flagowy',
      value: 'Ion Virlan Quintet (Lider, kompozytor, aranżer)',
    },
    { label: 'Urodzony', value: '1990 r., Mołdawia' },
    { label: 'OBECNA BAZA ARTYSTYCZNA', value: 'Wrocław, Polska' },
    { label: 'AKTYWNOŚĆ KONCERTOWA', value: 'Od 2010' },
  ];

  protected readonly flagshipItems: FlagshipItem[] = [
    {
      title: 'Fuzja Kulturowa',
      description:
        'Połączenie głębokiej wrażliwości balkanskiej tradycji ludowej z nowoczesnym jezykiem europejskiego jazzu.',
    },
    {
      title: 'Orginalna Komozycja',
      description:
        'Repertuar zespołu opiera się wyłącznie na autorskich kompozycjach Iona oraz jego nowatorskich aranżacjach tradycyjnych pieśni folklorystycznych.',
    },
    {
      title: 'Album',
      description:
        'Głównym celem powołania kwintetu było stworzenie i zarejestrowanie albumu, który przekształca tradycyjne tematy witalne w pełne energii, współczesne utwory jazzowe.',
    },
  ];

  protected readonly educationItems: EducationItem[] = [
    {
      school: 'Akademia Muzyczna we Wrocławiu',
      degree: 'Magister Sztuki (Kontrabas Jazzowy)',
      major: 'Specjalność: Kontrabas Jazzowy',
    },
    {
      school: 'Akademia Muzyczna w Bukareszcie',
      degree: 'Licencjat (Kontrabas Klasyczny)',
      major: 'Specjalność: Kontrabas Klasyczny',
    },
    {
      school: 'Szkoła Muzyczna w Kiszyniowie',
      degree: '',
      major: 'Podstawy Klasyczne i Teoretyczne',
    },
  ];

  protected readonly scholarships: Scholarship[] = [
    {
      year: '2021',
      title: 'Stypendium 2021',
      description:
        'Opracowanie pierwszych autorskich aranżacji jazzowych dla tradycyjnej moldawskiej muzyki ludowej.',
    },
    {
      year: '2024',
      title: 'Stypendium 2024',
      description:
        'Sfinalizowanie prac nad autorskim albumem formacji Ion Virlan Quintet.',
    },
  ];

  protected readonly mediaItems: MediaItem[] = [
    { title: 'Gaude - Album', subtitle: 'YouTube playlist link' },
    {
      title:
        'Canta Cucul Live - Ion Virlan Quintet, Vertigo Summer Jazz Festival',
      subtitle: 'Ion Virlan Quintet Live from Vertigo Summer Jazz Festival',
    },
    {
      title: 'Piotr Szlempo Quintet - live: highlight (Nysa)',
      subtitle: 'YouTube video',
    },
    {
      title: 'Jos de Vâlcea într-un sat - Ion Virlan',
      subtitle: 'Ion Virlan - YouTube video',
    },
    {
      title: 'Blue in Green — Ion Virlan, contrabas',
      subtitle: 'YouTube video',
    },
  ];
}
