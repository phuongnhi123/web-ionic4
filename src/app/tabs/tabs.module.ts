import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { HomePageModule } from './pages/home/home.module';
import { ContactPageModule } from './pages/contact/contact.module';
import { SendReportPageModule } from './pages/send-report/send-report.module';
import { FavouritesPageModule } from './pages/favourites/favourites.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    ContactPageModule,
    SendReportPageModule,
    FavouritesPageModule
    
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
