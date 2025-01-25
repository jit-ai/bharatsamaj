import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  currentImage: string = '';
  
  images: string[] = [
    "https://media.assettype.com/dharmadispatch%2F2024-02%2Fffc6ac93-1360-48b4-a7e8-24cf153449c3%2FGita.jpeg?rect=0%2C0%2C1281%2C721&w=1200&auto=format%2Ccompress&fit=max",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg/1280px-Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg",
    "https://feeds.abplive.com/onecms/images/uploaded-images/2024/01/22/ac17f991b8e8960a2e7445287fac79ff55440.png",
    "https://akm-img-a-in.tosshub.com/aajtak/images/story/202208/modi_red_fort-sixteen_nine.jpg",
    "https://media.assettype.com/dharmadispatch%2F2024-02%2Fffc6ac93-1360-48b4-a7e8-24cf153449c3%2FGita.jpeg?rect=0%2C0%2C1281%2C721&w=1200&auto=format%2Ccompress&fit=max",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg/1280px-Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg",
    "https://feeds.abplive.com/onecms/images/uploaded-images/2024/01/22/ac17f991b8e8960a2e7445287fac79ff55440.png",
    "https://akm-img-a-in.tosshub.com/aajtak/images/story/202208/modi_red_fort-sixteen_nine.jpg",
    "https://media.assettype.com/dharmadispatch%2F2024-02%2Fffc6ac93-1360-48b4-a7e8-24cf153449c3%2FGita.jpeg?rect=0%2C0%2C1281%2C721&w=1200&auto=format%2Ccompress&fit=max",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg/1280px-Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg",
    "https://feeds.abplive.com/onecms/images/uploaded-images/2024/01/22/ac17f991b8e8960a2e7445287fac79ff55440.png",
    "https://akm-img-a-in.tosshub.com/aajtak/images/story/202208/modi_red_fort-sixteen_nine.jpg"
  ];

  currentIndex: number = 0;
  private modal!: Modal;

  openModal(index: number): void {
    this.currentIndex = index;
    const modalElement = document.getElementById('galleryModal') as HTMLElement;
    this.modal = new Modal(modalElement);
    this.modal.show();
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
