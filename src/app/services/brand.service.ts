import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/responce/listResponseModel';
import { ResponseModel } from '../models/responce/responseModel';




@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "http://localhost:56305/api/Brands/"

  constructor(private httpClient : HttpClient) {}

  getBrands():Observable<ListResponseModel<Brand>>
  {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl +  "getall")
  }
  add(brand: Brand): Observable<ResponseModel> {
    let newPath: string = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }
}

