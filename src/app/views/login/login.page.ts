import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isShowLoading = false;
  constructor(private naCtrl: NavController, private loadingService: LoadingService) { }
  ngOnInit() {
    this.loadingService.showMenu.asObservable().subscribe( r => this.isShowLoading = r ); }
  public loginPage() {
    this.loadingService.showMenu.next(true);
    this.naCtrl.goBack('/main/tabs/tabs/(home:home)');
  }
}
