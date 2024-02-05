import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';


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
    FormsModule,
    ReactiveFormsModule,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rent-a-car';
}
