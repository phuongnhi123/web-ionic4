import { HttpClient } from '@angular/common/http';
import { ProductService } from './../../../shares/product.service';
import { Component, OnInit } from '@angular/core';
import { ShareDataService, RootScope } from '../../../shares/share-data.service';

@Component({
  selector: 'favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  bet: any;
  backupBet = {};
  betslips = [];
  multiMarketList = [];
  $rootScope: RootScope;
  hasOpenBets: boolean;
  hasHASingleLine: boolean;
  isHiddenGraph: boolean;
  blockMarket: any = {};
  isMaintenance: any;
  inputClick = '';
  deleteInputInterval = undefined;
  loadingAllFavourites = true;
  private selectedHorseInfoList = [];
  private isValidUpdate: boolean = false;
  private lengthBackLayArr = [];
  private isFirstLoadCurrentAF = true;
  constructor( private http: HttpClient ,private shareDataService: ShareDataService, private productService: ProductService) { 
      this.http.get("/member-service/user/get-marketid?status=MULTI").subscribe( r=> {
          console.log(r);
      })
  }

  ngOnInit() {
    this.shareDataService.getRootScope().subscribe(($rootScope: RootScope) => {
      this.shareDataService.$rootScope.isShowOdd = $rootScope.isShowOdd = true;
      this.shareDataService.$rootScope.isHiddenRule = $rootScope.isHiddenRule = true;
      this.$rootScope = $rootScope;
      this.bet = this.emptyBet();
      console.log(this.$rootScope);
      this.hasOpenBets = false;
      this.hasHASingleLine = false;
      this.isHiddenGraph = true;
      const prodMaintenance = this.$rootScope.uData.prodMaintenance;
      this.isMaintenance = prodMaintenance.indexOf("EXCHANGE") >= 0;
      console.log(prodMaintenance)
      this.renderMultiMarketInplay();
    });
  }
  public emptyBet() {
    this.backupBet = {};
    return {
      selectedPriceButton: '', selectionId: '', price: '', size: '', type: '', bestOdd: '', stake: '',
      increaseUnitPrice: 0.01, hasPnl: false, selectionIndex: '', isEditting: false, validationErrors: [],
      runnerName: '', updateBet: false, persistenceType: 'LAPSE', showInlineBet: true, handicap: 0, isCancelFull: false, marketId: ''
    };
  }
  public renderMultiMarketInplay() {
    if (this.isValidUpdate) {//Check condition to do not update multi market list while place bet
      return;
    }
    let filter: any = {};
    filter.status = "MULTI";
    const currencyCode = this.$rootScope.uData.currencyCode;
    console.log(currencyCode)
   this.productService.getMultiMarketId(filter.status).subscribe((data) => {
    const multiFilter: any = {};
      multiFilter.currencyCode = currencyCode;
      multiFilter.marketId = [];
      for (let i = 0; i < data.length; i++) {
          if (i > 10) {
              return;
          }
          multiFilter.marketId.push("1." + data[i]);
      }
       this.multiMarketList = data;
      this.productService.getListMultiMarket(multiFilter).subscribe( (responseData) => {
            console.log(responseData)
        //   result = responseData[0];
        //   var lbe = [];
        //   var lbm = [];
        //   ProductService.getListM().success(function (response) {
        //       lbe = response.be || [];
        //       lbm = response.bm || [];
        //       var listMarket = [];
        //       var multiMarket = [];
        //       var eventFancyList = [];
        //       var event27FancyList = [];
        //       angular.forEach(responseData, function (item) {
        //           var obj = {};
        //           var marketId = item.marketId.toString();
        //           var eventId = item.eventId.toString();
        //           if (lbe.indexOf(eventId) >= 0 || lbm.indexOf("1."+marketId) >= 0) {
        //               return;
        //           }
        //           if(marketId.isFancyMarket()){
        //               if(eventFancyList.indexOf(item.eventId)<0){
        //                   eventFancyList.push(item.eventId);
        //               }
        //           }else if(marketId.isFairFancyMarket()){
        //               if(event27FancyList.indexOf(item.eventId)<0){
        //                   event27FancyList.push(item.eventId);
        //               }
        //           }else{
        //               angular.forEach(item.runners, function (runner) {
        //                   if (runner.exchanges.availableToBack.length > 3) {
        //                       runner.exchanges.availableToBack.splice(3, (runner.exchanges.availableToBack.length - 3));
        //                   }
        //                   if (runner.exchanges.availableToLay.length > 3) {
        //                       runner.exchanges.availableToLay.splice(3, (runner.exchanges.availableToLay.length - 3));
        //                   }
        //               });
        //               obj.eventId = item.eventId;
        //               obj.marketId = item.marketId;
        //               listMarket.push(obj);
        //               multiMarket.push(angular.copy(prepareData(item)));
        //           }
        //       });
        //       if(!angular.equals($scope.fairFancyCtrl.eventFancyFavourites, eventFancyList) ||
        //           !angular.equals($scope.fairFancyCtrl.event27FancyFavourites, event27FancyList)){
        //           $scope.fairFancyCtrl.eventFancyFavourites = eventFancyList;
        //           $scope.fairFancyCtrl.event27FancyFavourites = event27FancyList;
        //           $scope.fairFancyCtrl.loadMulti();
        //       }
        //       $scope.getSummaryBetslip(listMarket, multiMarket);
        //   });
      });
  });
  }
}
