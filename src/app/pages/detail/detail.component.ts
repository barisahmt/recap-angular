import { Component, OnInit, inject } from '@angular/core';
import { CarComponent } from '../car/car.component';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../models/car';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CarComponent , NgFor],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  car:Car[]

  activatedRoute = inject(ActivatedRoute)
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>{
      if (params['carId']) {
        this.show(params['carId']);
      }
    })

  }

  carService = inject(CarService)
  show(carId :  number){
    this.carService.getCarById(carId).subscribe((response) =>{
      this.car = response.data
    });
  }
}
