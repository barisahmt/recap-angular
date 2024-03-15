import { Component, OnInit, inject } from '@angular/core';
import { CarComponent } from '../car/car.component';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../models/car';
import { NgFor } from '@angular/common';
import { NaviComponent } from '../navi/navi.component';
import { CarImagesService } from '../../services/car-images.service';
import { CarImage } from '../../models/carImage';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CarComponent, NgFor, NaviComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  car: Car[];
  carImages : CarImage[]

  protected readonly carImageService = inject(CarImagesService);
  protected readonly carService = inject(CarService);


  activatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      debugger
      if (params['carId']) {
        this.getimages(params['carId'])
        this.show(params['carId']);
      }
    });
  }
  
  getimages(carId : number){
    this.carImageService.get(carId)
  }



  show(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.car = response.data;
    });
  }
}
