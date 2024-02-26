import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponceModel } from '../models/responce/responceModel';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  apiUrl = 'http://localhost:56305/api/Favorites/addfavorite';

  constructor(private httpClient: HttpClient) { }

  add(favorite: any): Observable<ResponceModel>{
    let newPath: string = this.apiUrl;
    return this.httpClient.post<ResponceModel>(newPath, favorite);
  }

  deleteFavorite(favorite: any): Observable<ResponceModel>{
    let newPath: string = this.apiUrl;
    return this.httpClient.post<ResponceModel>(newPath, favorite);  
  }
}
