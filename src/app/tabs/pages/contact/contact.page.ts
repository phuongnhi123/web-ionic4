import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  isAcctive = false;
  constructor(public menuCtrl: MenuController) {
    // $('button').click(function(){
    //   $('button').toggleClass('active');
    //   $('.title').toggleClass('active');
    //   $('nav').toggleClass('active');
    // });
  }
  public toggleMenu() {
    this.menuCtrl.toggle();
  }
}
