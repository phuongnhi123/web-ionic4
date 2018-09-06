import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  domain  =  'http://localhost'
  URL  = {
    getUserData:  this.domain+ '/member-service/user/udata?marketId='
  }
  constructor(private http: HttpClient) {

   }
 public getUserData(marketId?: string): Observable<any> {
    marketId = marketId || '';
    return this.http.get(this.URL.getUserData + (marketId) + "&_" + new Date().getTime());
 }
}

