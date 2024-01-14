import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponceMoel } from '../models/responce/listResponceModel';
import { Brand } from '../models/brand';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "http://localhost:56305/api/Brands/getall"

  constructor(private httpClient : HttpClient) {}

  getBrands():Observable<ListResponceMoel<Brand>>
  {
    return this.httpClient.get<ListResponceMoel<Brand>>(this.apiUrl)
  }
}

