import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public appPages = [
    {
      title: 'Home',
      url: '/main/tabs',
      icon: 'home'
    },
    {
      title: 'About',
      url: '/main/about',
      icon: 'arrow-dropright'
    }
  ];
  constructor(private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar) { }

  ngOnInit() {
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
