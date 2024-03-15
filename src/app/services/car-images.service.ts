import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarImagesService {
  apiUrl = 'http://localhost:56305/api/';

  constructor(private httpClient: HttpClient) {}

  get(carId : number){
    let newPath = this.apiUrl + 'CarImages/getbycarid?carId' + carId;
  }
}
