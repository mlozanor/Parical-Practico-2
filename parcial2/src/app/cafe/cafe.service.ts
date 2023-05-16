import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CafeService {

  //private apiUrl: string = environment.baseUrl + 'authors';

constructor(private http: HttpClient) { }

}

