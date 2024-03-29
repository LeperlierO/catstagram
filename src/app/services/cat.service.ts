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

  create(data: any): Observable<Number>{
    return this.http.post<Number>(this.catPath, data);
  }

  getCats():Observable<Array<Cat>>{
    return this.http.get<Array<Cat>>(this.catPath);
  }

  getCat(id: number): Observable<Cat>{
    return this.http.get<Cat>(this.catPath + '/' + id);
  }

  editCat(data: any){
    return this.http.put(this.catPath, data);
  }

  deleteCat(id: number){
    return this.http.delete(this.catPath + '/' + id);
  }

}
