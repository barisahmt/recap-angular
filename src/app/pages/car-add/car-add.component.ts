import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CarService } from '../../services/car.service';
import { Brand } from '../../models/brand';
import { NgFor, NgIf } from '@angular/common';
import { BrandService } from '../../services/brand.service';
import { ColourService } from '../../services/colour.service';
import { Engine } from '../../models/engine';
import { EngineService } from '../../services/engine.service';
import { FuelService } from '../../services/fuel.service';
import { Fuel } from '../../models/fuel';
import { Colour } from '../../models/color';
import { CarDto } from '../../models/carDto';
import { ClearCar } from '../../models/clearCar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-add',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ToastrModule , NgIf , NgFor],
  templateUrl: './car-add.component.html',
})
export class CarAddComponent implements OnInit {
  brands : Brand[]
  colours : Colour[]
  engines : Engine[]
  fuels : Fuel[]
  files: File[];
  carAddForm: FormGroup;
  form: any;

  constructor(    
    private formBuider: FormBuilder,
    private toastrService: ToastrService,
    private carService: CarService,
    private brandService : BrandService,
    private colourService : ColourService,
    private engineService : EngineService,
    private fuelService : FuelService , 
    private router : Router
  ) {}
  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrandsforAdd(); 
    this.getColoursforAdd();
    this.getEnginesforAdd();
    this.getFuelsForAdd();
  }
  onChange(event: any) {
    if (event.target.files) {
      this.files = event.target.files;
    }
  }
  createCarAddForm() {
    this.carAddForm = this.formBuider.group({
      id: ['0', Validators.required],
      brandId: ['', Validators.required],
      colourId: ['', Validators.required],
      engineId: ['', Validators.required],
      fuelId: ['', Validators.required],
      fuelConsumption: ['', Validators.required],
      doorNumber: ['', Validators.required],
      userId: ['1', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  getBrandsforAdd() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getColoursforAdd(){
    this.colourService.getColors().subscribe((response)=>{
      this.colours = response.data;
      console.log(response.data)
    })
  }
  getEnginesforAdd(){
    this.engineService.getEngines().subscribe((response) =>{
      this.engines = response.data;
    })
  }
  getFuelsForAdd(){
    this.fuelService.getFuels().subscribe((response)=>
    {
      this.fuels = response.data;
    })
  }
  add() {
    if (this.carAddForm.valid) {
      let car = Object.assign({}, this.carAddForm.value);
      this.carService.addWithImages(car , this.files).subscribe((data) => {
        this.toastrService.success('Car Added');
      });
    } else {
      this.toastrService.error('Check The Your Value');
    }
  }
}
