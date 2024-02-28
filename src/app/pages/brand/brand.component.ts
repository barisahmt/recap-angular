import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandService } from '../../services/brand.service';
import { NgFor } from '@angular/common';
import { Brand } from '../../models/brand';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './brand.component.html',
  styleUrl : './brand-component.scss'
})
export class BrandComponent implements OnInit {
  brands: Brand[];
  currenBrand: Brand;

  constructor(private brandService: BrandService) {}
  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  setCurrentBrand(brand: Brand) {
    this.currenBrand = brand;
  }
  setCurrentBrandActive(brand: Brand) {
    if (brand == this.currenBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
