import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./core/components/header/header.component";
import {MobileMenuComponent} from "./core/components/mobile-menu/mobile-menu.component";
import {HomeComponent} from "./features/home/home/home.component";
import {AboutComponent} from "./features/about/about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MobileMenuComponent, HomeComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elmusa-portfolio';
}
