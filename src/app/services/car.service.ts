import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponceMoel } from '../models/responce/listResponceModel';
import { Car } from '../models/car';



@Injectable({
  providedIn: 'root'
})
export class CarService {


  apiUrl = "http://localhost:56305/api/"

  constructor(private httpClient : HttpClient) { }

  getCars():Observable<ListResponceMoel<Car>>
  {
    let newPath = this.apiUrl + "Cars/getcardetails"
    
    return this.httpClient.get<ListResponceMoel<Car>>(newPath)
  }
  
  getCarsByBrandId(brandId : number):Observable<ListResponceMoel<Car>>
  {
    let newPath = this.apiUrl + "Cars/getcardetailsbybrandid?brandId=" + brandId

    return this.httpClient.get<ListResponceMoel<Car>>(newPath)
  }
  add(car:Car){
    let newPath=  this.apiUrl + "Cars/add"
    return this.httpClient.post(newPath , car)

  }
}

