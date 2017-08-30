import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { NavigationService } from '../../providers/navigation-service/navigation-service';
import { UserstorageProvider } from '../../providers/userstorage/userstorage';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  shopCartNum: number = 0
  tab1Root = 'HomePage';
  tab2Root = 'ShopcartPage'
  tab3Root = 'ContactPage';

  constructor(
    public navigationService: NavigationService,
    public userstorage: UserstorageProvider
  ) {
    this.userstorage.loadUser()
  }

  ngDoCheck() {
    this.getShopCartNum()
  }


  getShopCartNum() {
    this.shopCartNum = this.navigationService.getShopCartNum()
  }
}
