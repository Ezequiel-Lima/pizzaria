import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../../utils/Pizza';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  readonly baseUrl = 'https://localhost:7090'

  constructor(private http: HttpClient) { }

  public getAll():Observable<Pizza>{
    console.log('testetste');
    return this.http.get<Pizza>(`${this.baseUrl}/api/pizzas`);
  }

}
