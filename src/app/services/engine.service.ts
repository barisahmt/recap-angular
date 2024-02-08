import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponceModel } from '../models/responce/listResponceModel';
import { Engine } from '../models/engine';

@Injectable({
  providedIn: 'root',
})
export class EngineService {
  apiUrl = 'http://localhost:56305/api/Engines/';

  constructor(private httpClient: HttpClient) {}

  getEngines(): Observable<ListResponceModel<Engine>> {
    return this.httpClient.get<ListResponceModel<Engine>>(this.apiUrl + 'getall');
  }
}
