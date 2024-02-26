import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { SingleResponceModel } from '../models/responce/singleResponceModel';
import { TokenModel } from '../models/tokenModel';
import { LoginModel } from '../models/loginModel';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public authentication = signal(false)

  apiUrl = 'http://localhost:56305/api/auth/';

  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel) {
    this.authentication.set(true)
    return this.httpClient.post<SingleResponceModel<TokenModel>>(this.apiUrl + 'login', loginModel);

  }
  logout(){
    this.authentication.set(false)
    localStorage.removeItem('token')
  }
  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.authentication.set(false)
      return false;
    }
  }
}
