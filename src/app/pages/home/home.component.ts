import { Component, OnInit } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

type SocialPlatform = 'linkedin' | 'github' | 'stackoverflow';
enum SocialPlatformUrl  {
  Linkedin = 'https://www.linkedin.com/in/rahadur/',
  Github = 'https://github.com/rahadur',
  StackOverflow = 'https://stackoverflow.com/users/5290908/rahadur'
}

@Component({
  standalone: true,
  selector: 'home-page',
  templateUrl: 'home.component.html',
  imports: [SvgIconComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  openSocialLink(platform: SocialPlatform): void {
    switch (platform) {
      case 'github':
        window.location.href = SocialPlatformUrl.Github;
        break;
      case 'stackoverflow':
        window.location.href = SocialPlatformUrl.StackOverflow;
        break;
      default:
        window.location.href = SocialPlatformUrl.Linkedin;
        break;
    }
  }
}
