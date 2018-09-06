import { Market } from './../models/market';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageIssues, Issue } from '../models/issue';
@Injectable({
  providedIn: 'root'
})
export class RedmineService {
  constructor(private http: HttpClient) { }
  public getIssues(): Observable<PageIssues> {
    return this.http.get<PageIssues>('/issues.json');
  }
  public getSportCtrl(): Observable<Market> {
    return this.http.get<Market>('/data-aggregator');
  }
  public getData(): Observable<any> {
   return this.http.get<any>('http://localhost/market-service/sport-name-id-mapping?isInverse=false');
  }
  

}
