import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import {
  CurrencyPipe,
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
  ],
  templateUrl: './car.component.html',
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  filterText = '';
  files: File[];
  carAdded = false;
  i: number = 0;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else {
        this.getCars();
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
  addToCart(car: Car) {
    this.toastrService.success('Sepete Eklendi', car.brandName);
    this.cartService.addToCart(car);
  }
}
