import { Routes } from '@angular/router';
import { CarComponent } from './pages/car/car.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CarAddComponent } from './pages/car-add/car-add.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './pages/guard/login.guard';
import { authGuard } from './pages/guard/auth.guard';
import { AddPanelComponent } from './pages/add-panel/add-panel.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'cars/brand/:brandId', pathMatch: 'full', component: CarComponent },

  { path: 'cars/colour/:colourId', pathMatch: 'full', component: CarComponent },
  {
    path: 'add-panel',
    component: AddPanelComponent,
    canActivate : [authGuard]
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/car/car.component').then((c) => c.CarComponent),
    canActivate: [authGuard],
  },
  {
    path: 'cars',
    canActivate : [authGuard],
    loadComponent: () =>
      import('./pages/car/car.component').then((c) => c.CarComponent),
  },

  {
    path: 'brands',
    canActivate : [authGuard],
    loadComponent: () =>
      import('./pages/brand/brand.component').then((b) => b.BrandComponent),
  },

  {
    path: 'cars',
    canActivate : [authGuard],
    loadComponent: () =>
      import('./pages/car/car.component').then((c) => c.CarComponent),
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./pages/login/login.component').then((l) => l.LoginComponent),
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate : [authGuard],
    children: [
      {
        path: 'cars/brand/:brandId',
        //Eager loading
        // component: PersonComponent,

        // Lazy standalone component loading
        loadComponent: () =>
          import('./pages/car/car.component').then(
            (c) => c.CarComponent,
          ),
      },
      {
        path: 'cars/colour/:colourId',
        //Eager loading
        // component: PersonComponent,

        // Lazy standalone component loading
        loadComponent: () =>
          import('./pages/car/car.component').then(
            (c) => c.CarComponent,
          ),
      },
    ],
  },
];
