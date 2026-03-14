import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { FeaturesComponent } from "./features/features.component";
import { UsesAreaComponent } from './uses-area/uses-area.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, HeroComponent, RouterOutlet, FooterComponent, FeaturesComponent,UsesAreaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
