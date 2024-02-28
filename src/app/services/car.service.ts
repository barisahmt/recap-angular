import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/responce/listResponseModel';
import { ResponseModel } from '../models/responce/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'http://localhost:56305/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getcardetails';

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath =
      this.apiUrl + 'Cars/getcardetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColourId(colourId: number): Observable<ListResponseModel<Car>> {
    let newPath =
      this.apiUrl + 'Cars/getcardetailsbycolourid?colourId=' + colourId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarById(carId : number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'Cars/getcardetailbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  delete(id: number): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(`${this.apiUrl}Cars?id=${id}`);
  }

  add(car: Car): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'Cars/add';
    return this.httpClient.post<ResponseModel>(newPath, car);
  }

  addWithImages(car: CarDto, files: File[]): Observable<ResponseModel> {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('carForAddDto.Images', files[i]);
    }

    formData.append('carForAddDto.UserId', JSON.stringify(car.userId));
    formData.append('carForAddDto.BrandId', JSON.stringify(car.brandId));
    formData.append('carForAddDto.ColourId', JSON.stringify(car.colourId));
    formData.append('carForAddDto.EngineId', JSON.stringify(car.engineId));
    formData.append('carForAddDto.FuelId', JSON.stringify(car.fuelId));
    formData.append('carForAddDto.ModelYear', JSON.stringify(car.modelYear));
    formData.append(
      'carForAddDto.FuelConsumption',
      JSON.stringify(car.fuelConsumption),
    );
    formData.append('carForAddDto.DoorNumber', JSON.stringify(car.doorNumber));
    formData.append('carForAddDto.DailyPrice', JSON.stringify(car.dailyPrice));
    formData.append('carForAddDto.Description', car.description);
    let newPath = this.apiUrl + 'Cars/addWithImages';
    return this.httpClient.post<ResponseModel>(newPath, formData);
  }
}
