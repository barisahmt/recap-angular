import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responce/responseModel';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  apiUrl = 'http://localhost:56305/api/Favorites/addfavorite';

  constructor(private httpClient: HttpClient) { }

  add(favorite: any): Observable<ResponseModel>{
    let newPath: string = this.apiUrl;
    return this.httpClient.post<ResponseModel>(newPath, favorite);
  }

  deleteFavorite(favorite: any): Observable<ResponseModel>{
    let newPath: string = this.apiUrl;
    return this.httpClient.post<ResponseModel>(newPath, favorite);  
  }
}
