import { Component } from '@angular/core';
import { NaviComponent } from '../navi/navi.component';
import { BrandComponent } from '../brand/brand.component';
import { ColorComponent } from '../color/color.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NaviComponent , BrandComponent , ColorComponent , RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
