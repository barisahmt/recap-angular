import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Engine } from '../models/engine';
import { ListResponseModel } from '../models/responce/listResponseModel';
@Injectable({
  providedIn: 'root',
})
export class EngineService {
  apiUrl = 'http://localhost:56305/api/Engines/';

  constructor(private httpClient: HttpClient) {}

  getEngines(): Observable<ListResponseModel<Engine>> {
    return this.httpClient.get<ListResponseModel<Engine>>(this.apiUrl + 'getall');
  }
}
