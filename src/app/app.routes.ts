import { Routes } from '@angular/router';
import { CarComponent } from './pages/car/car.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CarAddComponent } from './pages/car-add/car-add.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './pages/guard/login.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/car/car.component').then((c) => c.CarComponent),
  },
  {
    path: 'cars',
    loadComponent: () =>
      import('./pages/car/car.component').then((c) => c.CarComponent),
  },

  {
    path: 'brands',
    loadComponent: () =>
      import('./pages/brand/brand.component').then((b) => b.BrandComponent),
  },

  {
    path: 'cars',
    loadComponent: () =>
      import('./pages/car/car.component').then((c) => c.CarComponent),
  },
  {
    path: 'cars/add',
    pathMatch: 'full',
    component: CarAddComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'cars',
    loadComponent: () =>
      import('./pages/login/login.component').then((l) => l.LoginComponent),
  },
];
