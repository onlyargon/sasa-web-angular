import { Component, OnInit } from '@angular/core';
import { socialType } from '../../core/models/constants/constants';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public gotoSite(type: socialType): void {
    switch (type) {
      case 'facebook':
        window.open('https://www.facebook.com/sasankaCphotography');
        break;

      case 'instagram':
        window.open('https://www.instagram.com/sasanka_c_photography/');
        break;
      default:
        break;
    }
  }
}
