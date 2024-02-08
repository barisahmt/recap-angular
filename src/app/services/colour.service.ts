import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponceModel } from '../models/responce/listResponceModel';
import { Colour } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColourService {    

  apiUrl = "http://localhost:56305/api/Colours/"
  constructor(private httpClient : HttpClient) { }

  getColors():Observable<ListResponceModel<Colour>>{
    return this.httpClient.get<ListResponceModel<Colour>>(this.apiUrl + "getall")
  }
}
