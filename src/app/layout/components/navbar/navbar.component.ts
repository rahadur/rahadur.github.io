import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from '@ngneat/svg-icon';

interface Link {
  text: string;
  url: string;
}

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  imports: [CommonModule, RouterModule, SvgIconComponent],
})
export class NavbarComponent {
  links: Link[] = [
    {
      text: 'Home',
      url: '',
    },
    {
      text: 'Skills',
      url: 'skills',
    },
    {
      text: 'Experience',
      url: 'experience',
    },
    {
      text: 'Blog',
      url: 'blog',
    },
  ];
}
