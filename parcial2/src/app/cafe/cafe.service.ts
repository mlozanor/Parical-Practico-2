import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafe } from './cafe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CafeService {

  url = 'https://gist.githubusercontent.com/josejbocanegra/fe9511b47ddb335bb0da97ff9ba7462e/raw/a9601bdb1cb26abc1dabec48b7f2417440143541/cafes.json';


constructor(private http: HttpClient ) { }

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.url);
  }

  getCafe(id: string): Observable<Cafe> {
    return this.http.get<Cafe>(this.url + '/' + id);
  }

  createCafe(cafe: Cafe): Observable<Cafe> {
    return this.http.post<Cafe>(this.url, cafe);
  }




}

