import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MainService } from '../../../services/main.service';
import { Issue } from '../../../models/issue';
@Component({
  selector: 'app-send-report',
  templateUrl: './send-report.page.html',
  styleUrls: ['./send-report.page.scss'],
})
export class SendReportPage implements OnInit {
  listIssue: Issue[] = [];
  constructor(public menuCtrl: MenuController, private mainService: MainService) {
    this.mainService.getNumberIssue().subscribe(r => {
      this.listIssue = this.mainService.listIssues;
    });
   }

  ngOnInit() {
    this.listIssue = this.mainService.listIssues;
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
