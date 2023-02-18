import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private api = 'https://api.themoviedb.org/3/movie/';
  private key = '?api_key=7128cc23bb835419dab02e5eab2923a5';

  constructor(private http: HttpClient) { }

  getMovie(id: number){
    return this.http.get(`${this.api}${id}${this.key}&language=pt-BR`);
  }
}
