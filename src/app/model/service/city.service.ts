import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private http: HttpClient,
    @Inject('apiUrl') private apiUrl
  ) { }

  createCity(city: any): Observable<any> {
    return this.http.post(this.apiUrl + '/', city);
  }

  getCity(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + {id});
  }

  getAllCity(): Observable<any> {
    return this.http.get(this.apiUrl + '/');
  }
}
