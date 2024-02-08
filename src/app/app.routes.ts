import { Routes } from '@angular/router';
import { CarComponent } from './pages/car/car.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CarAddComponent } from './pages/car-add/car-add.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './pages/guard/login.guard';

export const routes: Routes = [
    {path:"" , pathMatch : "full" , component:CarComponent},
    {path:"cars" , component :CarComponent},
    {path : "brands" ,pathMatch :   "full" , component :BrandComponent  },
    {path : "cars/brand/:brandId" , pathMatch : "full" , component : CarComponent},
    {path :   "cars/add" , pathMatch : "full", component : CarAddComponent , canActivate:[loginGuard]},
    {path: "auth/login" , pathMatch : "full" , component: LoginComponent}
    // {path : "cars/brand/:brandId" , pathMatch : "full", loadComponent:()=>import('./pages/car/car.component').then(c=>c.CarComponent)}
];
