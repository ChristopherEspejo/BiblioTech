import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API: String;
  private categoriesService: String

  constructor(private http: HttpClient) { 
    this.API = 'http://localhost:5000';
    this.categoriesService = '/api/libro/cate';
  }

  obtenerCategorias(): Observable<any>{
    return this.http.get(`${this.API}${this.categoriesService}`)
  }

}