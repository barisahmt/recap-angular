import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';

export const routes: Routes = [
    {path:"" , pathMatch : "full" , component:CarComponent},
    {path:"cars" , component :CarComponent},
    {path : "brands" ,pathMatch :   "full" , component :BrandComponent},
    {path : "cars/brand/:brandId" , pathMatch : "full" , component : CarComponent},
    {path :   "cars/add" , pathMatch : "full", component : CarAddComponent}
    // {path : "cars/brand/:brandId" , pathMatch : "full", loadComponent:()=>import('./components/car/car.component').then(c=>c.CarComponent)}
];
