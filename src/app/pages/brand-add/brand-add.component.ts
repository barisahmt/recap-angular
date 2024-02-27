import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../models/brand';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-brand-add',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ToastrModule, NgIf, NgFor],
  templateUrl: './brand-add.component.html',
  styleUrl: './brand-add.component.scss'
})
export class BrandAddComponent implements OnInit {
  ngOnInit(): void {
    this.createBrandAddForm()
  }

  protected readonly formBuilder = inject(FormBuilder)
  protected readonly brandService = inject(BrandService)
  protected readonly toastrService = inject(ToastrService)

  brandAddForm: FormGroup;

  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      id : ["0" , Validators.required],
      name : ["" , Validators.required]
    })
  }

  add(){
    if(this.brandAddForm.valid){
      let brand = Object.assign({}, this.brandAddForm.value);
      this.brandService.add(brand).subscribe((response) =>{
        this.toastrService.success(response.message)
      })
    }
  }
}
