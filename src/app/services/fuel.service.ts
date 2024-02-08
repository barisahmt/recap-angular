import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponceModel } from '../models/responce/listResponceModel';
import { Fuel } from '../models/fuel';

@Injectable({
  providedIn: 'root'
})
export class FuelService {
  apiUrl = 'http://localhost:56305/api/Fuels/';
  constructor(private httpClient : HttpClient) { }

  getFuels():Observable<ListResponceModel<Fuel>>{
    return this.httpClient.get<ListResponceModel<Fuel>>(this.apiUrl + "getall")
  }
}
