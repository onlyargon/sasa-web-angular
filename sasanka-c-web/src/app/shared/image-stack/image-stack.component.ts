import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-stack',
  templateUrl: './image-stack.component.html',
  styleUrls: ['./image-stack.component.scss'],
})
export class ImageStackComponent implements OnInit {
  imageList: string[] = [
    '../../../assets/imgs/img_1.jpg',
    '../../../assets/imgs/img_2.jpg',
    '../../../assets/imgs/img_3.jpg',
    '../../../assets/imgs/img_4.jpg',
    '../../../assets/imgs/img_5.jpg',
    '../../../assets/imgs/img_6.jpg',
    '../../../assets/imgs/img_7.jpg',
    '../../../assets/imgs/img_8.jpg',
  ];

  imagePlaceholder: string = '../../../assets/imgs/image_placeholder.png';
  activeIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.rotateImages();
  }

  private rotateImages(): void {
    setInterval(() => {
      let index = this.activeIndex;
      index++;
      if (index > this.imageList.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex = index;
      }
    }, 5000);
  }
}
