import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/';
import {IDateTime} from './dateTime.model';

@Injectable()
export class ApiService {
  public resourceUrl = 'https://jsonmock.hackerrank.com/datetime';

  constructor(private http: HttpClient) {
  }

  getDateTimeAPI(): Observable<HttpResponse<IDateTime>> {
    return this.http.get<IDateTime>(`${this.resourceUrl}`, {observe: 'response'});
  }
}
