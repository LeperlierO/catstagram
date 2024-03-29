import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginPath = environment.apiUrl + 'identity/login';
  private registerPath = environment.apiUrl + 'identity/register';

  constructor(private http: HttpClient) { }

  login(data: any) : Observable<any> {
    return this.http.post(this.loginPath, data);
  }

  register(data: any) : Observable<any> {
    return this.http.post(this.registerPath, data);
  }

  saveToken(token: any) {
    localStorage.setItem('token', token['token']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isAuthenticated(){
    return this.getToken() != null;
  }
}
