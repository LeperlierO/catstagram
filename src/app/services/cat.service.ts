import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cat } from '../models/Cat';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private catPath = environment.apiUrl + 'cats';
  constructor(private http: HttpClient, private authService: AuthService) { }

  create(data: any): Observable<Cat>{
    return this.http.post<Cat>(this.catPath, data);
  }
}
