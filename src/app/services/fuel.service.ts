import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fuel } from '../models/fuel';
import { ListResponseModel } from '../models/responce/listResponseModel';
@Injectable({
  providedIn: 'root'
})
export class FuelService {
  apiUrl = 'http://localhost:56305/api/Fuels/';
  constructor(private httpClient : HttpClient) { }

  getFuels():Observable<ListResponseModel<Fuel>>{
    return this.httpClient.get<ListResponseModel<Fuel>>(this.apiUrl + "getall")
  }
}
