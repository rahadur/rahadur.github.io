import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'layout',
  templateUrl: 'layout.component.html',
  imports: [RouterOutlet, NavbarComponent],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
