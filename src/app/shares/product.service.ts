import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import {forkJoin} from 'rxjs';  // change to new RxJS 6 import syntax
import { map, filter, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  domain  =  ''
   url  ={
    getMultiMarketId: this.domain+   "/member-service/user/get-marketid?status=",
    getExListMultiMarket: this.domain+  "/exchange-service/events/list-multi-market",
    getMarketsByMarketIds: "/member-market/api/market-info.json",
   }
  constructor(private http: HttpClient) { }
 public  getMultiMarketId(params): Observable<any> {
    return this.http.get(this.url.getMultiMarketId + params).pipe( 
    );
}
public  getListMultiMarket(params): Observable<any> {
  if (params.marketId.length <= 0) {
   return of([])
  }
  var self = this;
  const join = [];
   join.push(this.http.post(this.url.getExListMultiMarket,  params));
  const marketIds = params.marketId.toString().replace(/1\./gi, '');  
   join.push(this.http.get(this.url.getMarketsByMarketIds+ "?marketIds="+marketIds+"&brandId=1"));
     return forkJoin(join).pipe( 
       map( r => {
          // r = r[0].concat()
          return r;
       })
      );
  }
  
  //   $http({
  //     url: this.url.getExListMultiMarket,
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     data: JSON.stringify(params)
  // }).success(function (data) {
  //   // ?marketIds={0}&brandId={1}
  //     // var marketIds = params.marketId.toString().replace(/1\./gi, '');
  //     // _global.brandId = "1"
  //     $http({
  //         url: PRODUCT_SERVICES_URL.getMarketsByMarketIds.format(marketIds, _global.brandId),
  //         method: 'GET',
  //         headers: {'Content-Type': 'application/json'}
  //     }).success(function (fancyData) {
  //         data = data.concat(fancyData);
  //         self.processFancyData(data, defer);
  //     });
  // });
  // return defer.promise;
}
