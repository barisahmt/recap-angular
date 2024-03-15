import { Component, Input, OnInit, signal } from '@angular/core';
import { Car } from '../../models/car';
import {
  CurrencyPipe,
  NgClass,
  NgFor,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { VatAddedPipe } from '../../pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter-pipe.pipe';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CarService } from '../../services/car.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem';
import { ClearCar } from '../../models/clearCar';
import { CarDto } from '../../models/carDto';
import { catchError } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Colour } from '../../models/color';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [
    NgFor,
    TitleCasePipe,
    UpperCasePipe,  
    CurrencyPipe,
    VatAddedPipe,
    FormsModule,
    FilterPipe,
    ToastrModule,
    NgClass
  ],
  templateUrl: './car.component.html',
  styleUrl : './car.component.scss'
})
export class CarComponent implements OnInit {

  favorites: any[] = [];
  cars: Car[] = [];
  dataLoaded = false;
  filterText = '';
  files: File[];
  carAdded = false;
  i: number = 0;
  hover = signal(0)


  authen = this.autherService.authentication

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService,
    private router: Router,
    private autherService : AuthService,
    private favoriteService : FavoriteService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      }else if (params['colourId']){
        this.getCarsByColorId(params['colourId'])
      }else{
        this.getCars()
      }
    });
  }
  onChange(event: any) {
    if (event.target.files) {
      this.files = event.target.files;
    }
  }

  delete(id: number) {
    this.carService
      .delete(id)
      .pipe(
        catchError((err) => {
          this.toastrService.error('An error occurred while deleting the car.');
          throw err;
        }),
      )
      .subscribe(() => this.toastrService.success('Success'));
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByColorId(colourId : number){
    this.carService.getCarsByColourId(colourId).subscribe((response) =>{
      this.cars = response.data
    })
  }
  getById(carId : number){
    this.router.navigate(["/cars/details/" + carId] )
  }
  addToCart(car: Car) {
    if(localStorage.getItem("token")){
      this.toastrService.success('Sepete Eklendi', car.brandName);
      this.cartService.addToCart(car);
    }else{
      this.toastrService.error("Please Login")
    }
  }
  enter(id : number){
    this.hover.set(id);
  }
  leave(){
    this.hover.set(undefined)
  }

}
