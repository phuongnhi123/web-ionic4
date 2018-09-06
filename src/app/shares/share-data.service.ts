import { AccountService } from './account.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
   $rootScope: RootScope ;
  constructor(private http : HttpClient, private accountService: AccountService) {
  }
   public getRootScope(): Observable<RootScope>  {
     if(this.$rootScope) {
       return of(this.$rootScope)
     } else {
        this.$rootScope = {} ;
        this.$rootScope.isCashPlayer = false;
        this.$rootScope.uData = {currencyCode: 'GBP', prodMaintenance: [], products: ["EXCHANGE"]};
        this.$rootScope.periodType = {};
        this.$rootScope.menuDatas = {
          'user.home.highlight': 'HOME',
          'user.mybets-open': 'MY_BETS',
          'user.live-dealer': 'LIVE-DEALER',
          'user.mybets-settled': 'MY_BETS'
      };
      this.$rootScope.sitezone =  'GMT-04:00';
       this.$rootScope.isIST = this.$rootScope.sitezone == 'GMT+05:30';
       this.accountService.getUserData().subscribe((result: any) =>  {
        if (result.betSettings) {
            Object.keys(result.betSettings).forEach( key  => {
                this.$rootScope.periodType[result.betSettings[key].period] = result.betSettings[key].period;
            })
        }
        const SUB_SW_PRODUCTS = ["EXCHANGE", "EZUGI", "LADDER", "DIGIENT"];
        const SUB_LIVE_DEALER_PRODUCTS = ["EZUGI"];
        const SUB_PLAYTECH = ["PLAYTECH"];
        this.$rootScope.isSWallet = false;
        this.$rootScope.isPlaytech = false;
        this.$rootScope.isLiveDealer = false;
         const products = result.products || [];        
        result.products = ['EXCHANGE'];
        result.prodMaintenance = [];
        if (products) {
          for (let i = 0; i < products.length; i++) {
              if (SUB_SW_PRODUCTS.indexOf(products[i]) >= 0) {
                  this.$rootScope.isSWallet = true;
              }
              if (SUB_PLAYTECH.indexOf(products[i]) >= 0) {
                  this.$rootScope.isPlaytech = true;
              }
              if (SUB_LIVE_DEALER_PRODUCTS.indexOf(products[i]) >= 0) {
                  this.$rootScope.isLiveDealer = true;
              }
          }
      }
        return this.$rootScope.uData = result;
    });

        return of(this.$rootScope);
     }
   }
}
export interface RootScope {
  isCashPlayer?: boolean;
  uData?: any ;
  periodType?: any;
  menuDatas?: any ;
  sitezone?: any ;
  isIST?: boolean;
  isShowOdd?: boolean;
  isSWallet?: boolean;
  isPlaytech?: boolean;
  isLiveDealer?: boolean;
  isHiddenRule?: boolean;
  isHiddenGraph?: boolean
}