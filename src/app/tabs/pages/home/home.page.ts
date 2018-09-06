import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RedmineService } from '../../../services/redmine.service';
import { Issue, PageIssues } from '../../../models/issue';
import { MainService } from '../../../services/main.service';
import { Market } from '../../../models/market';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  listIssue: Issue[] = [];
  sportctrl: Market
  selectionId =  0;
  handicap = 0;
  constructor(public menuCtrl: MenuController, private redmineService: RedmineService, private mainService: MainService) {
    this.redmineService.getIssues().subscribe((r: PageIssues) => {
      this.listIssue = r.issues;
    });
    this.redmineService.getSportCtrl().subscribe ( r => {
       this.sportctrl = r;
       console.log(this.sportctrl);
    })
    this.redmineService.getData().subscribe( r => {
      console.log(r);
    })
  }
  public toggleMenu() {
    this.menuCtrl.toggle();
  }
  public addIssues($event: Issue) {
     $event.isAdd = !$event.isAdd;
     if ( $event.isAdd) {
      this.mainService.addIssues($event);
     } else {
      this.mainService.deleteIsses($event);
     }
  }
}
