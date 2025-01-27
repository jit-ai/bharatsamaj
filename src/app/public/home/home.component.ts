import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef;

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;

    video.muted = true; // Ensure it is muted for autoplay
    video.autoplay = true;
    video.loop = true;

    video.play().catch(error => {
      console.log('Autoplay prevented:', error);
    });
  }
}
