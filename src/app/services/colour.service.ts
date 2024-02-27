import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colour } from '../models/color';
import { ListResponseModel } from '../models/responce/listResponseModel';
import { ResponseModel } from '../models/responce/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ColourService {
  apiUrl = 'http://localhost:56305/api/Colours/';
  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Colour>> {
    return this.httpClient.get<ListResponseModel<Colour>>(
      this.apiUrl + 'getall',
    );
  }

  add(colour: Colour): Observable<ResponseModel> {
    let newPath: string = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, colour);
  }
}
