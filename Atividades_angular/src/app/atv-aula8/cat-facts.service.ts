import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {
  private api = 'https://meowfacts.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getFacts(count: number){
    return this.http.get(`${this.api}?count=${count}&lang=por`);
  }
}
