import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from './pages/home/home.page';
import { ContactPage } from './pages/contact/contact.page';
import { SendReportPage } from './pages/send-report/send-report.page';
import { FavouritesPage } from './pages/favourites/favourites.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },
      {
        path: 'report',
        outlet: 'report',
        component: SendReportPage
      },
      {
        path: 'favourites',
        outlet: 'favourites',
        component: FavouritesPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/tabs/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
