import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './pages/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { CarComponent } from './pages/car/car.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CarAddComponent } from './pages/car-add/car-add.component';
import { ColorComponent } from './pages/color/color.component';
import { DetailComponent } from './pages/detail/detail.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor,
    RouterOutlet,
    NaviComponent,
    HttpClientModule,
    CarComponent,
    BrandComponent,
    CarAddComponent,
    ColorComponent,
    FormsModule,
    ReactiveFormsModule,
    LoginComponent,
    DetailComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rent-a-car';
}
