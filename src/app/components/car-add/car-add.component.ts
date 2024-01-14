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

@Component({
  selector: 'app-car-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, FormsModule, ToastrModule],
  templateUrl: './car-add.component.html',
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  form: any;

  constructor(
    private formBuider: FormBuilder,
    private toastrService: ToastrService,
    private carService: CarService
  ) {}
  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm() {
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
      description: ['', Validators.required],
    });
  }

  add() {
    if (this.carAddForm.valid) {
      let car = Object.assign({}, this.carAddForm.value);
      this.carService.add(car).subscribe((data) => {
        console.log(data);
        this.toastrService.success('Car Added');
      });
    } else {
      this.toastrService.error('Check The Your Value');
    }

    // let car =  Object.assign({}, this.carAddForm.value)
    // this.carService.add(car).subscribe(data=>{
    //      console.log(data)
    //       this.toastrService.success("Car Added")
    //     })
    //     console.log(car)
  }
}
