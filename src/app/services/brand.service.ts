import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponceModel } from '../models/responce/listResponceModel';
import { Brand } from '../models/brand';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "http://localhost:56305/api/Brands/"

  constructor(private httpClient : HttpClient) {}

  getBrands():Observable<ListResponceModel<Brand>>
  {
    return this.httpClient.get<ListResponceModel<Brand>>(this.apiUrl +  "getall")
  }
}

