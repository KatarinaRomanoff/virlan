import { Component, computed, inject, input, output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {MediaItem, MediaType} from '../../pages/home/models/home.models';

@Component({
  selector: 'app-youtube-modal',
  standalone: true,
  templateUrl: './youtube-modal.component.html'
})
export class YoutubeModalComponent {
  private sanitizer = inject(DomSanitizer);

  isOpen = input<boolean>(false);
  youtubeId = input<string>();
  type = input<MediaType>();

  closeModal = output<void>();

  safeUrl = computed(() => {
    const id = this.youtubeId();
    const mediaType = this.type();

    if (!this.isOpen() || !id || !mediaType) return null;

    const embedUrl = mediaType === MediaType.Video
      ? `https://www.youtube.com/embed/${id}?autoplay=1`
      : `https://www.youtube.com/embed/videoseries?list=${id}&autoplay=1`;

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  });

  onClose(): void {
    this.closeModal.emit();
  }
}
