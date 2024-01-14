import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import {
  CurrencyPipe,
  NgFor,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { VatAddedPipe } from '../../pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter-pipe.pipe';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CarService } from '../../services/car.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem';

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
  styleUrl: './car.component.scss',
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  filterText = '';
  carAdded = false;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
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
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  addToCart(car: Car) {
    this.toastrService.success('Sepete Eklendi', car.brandName);
    this.cartService.addToCart(car);
  }
}
