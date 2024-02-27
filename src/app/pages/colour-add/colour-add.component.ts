import { NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ColourService } from '../../services/colour.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-colour-add',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ToastrModule, NgIf, NgFor , RouterLink],
  templateUrl: './colour-add.component.html',
  styleUrl: './colour-add.component.scss',
})
export class ColourAddComponent implements OnInit {
  public formBuilder = inject(FormBuilder);
  public colourService = inject(ColourService);
  public toastrService = inject(ToastrService)
  public router = inject(Router)

  colourAddForm: FormGroup;

  ngOnInit(): void {
    this.createColourAddForm();
  }

  createColourAddForm() {
    this.colourAddForm = this.formBuilder.group({
      id: ['0', Validators.required],
      name: ['', Validators.required],
    });
  }
  add() {
    if (this.colourAddForm.valid) {
      let colour = Object.assign({}, this.colourAddForm.value);
      this.colourService.add(colour).subscribe((response) => {
        this.router.navigate(["/colours/add"])
        this.toastrService.success(response.message);
      
      });
     
    }else{
      this.toastrService.error('Check Your Form')
    }
  }
}
