import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NavigationService } from '../../providers/navigation-service/navigation-service';
import { UserstorageProvider } from '../../providers/userstorage/userstorage';

@IonicPage()
@Component({
  selector: 'page-shoplist',
  templateUrl: 'shoplist.html',
})
export class ShoplistPage {

  shopList
  userId
  userRole
  fShopList

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navigationService: NavigationService,
    public userstorage: UserstorageProvider
  ) {
    this.setUser()
    this.LoadShopList()
  }

  LoadShopList() {
    this.navigationService.getShopList().subscribe(
      (shopList) => {
        this.shopList = shopList;
        this.filterMsg()
      });
  }

  setUser() {
    var user = this.navParams.get('Account');
    if (!user) {
      var user = this.userstorage.getUser()
    }
    if (user) {
      this.userId = user._id
    }
  }

  filterMsg() {
    this.fShopList = []
    var list = this.shopList
    for (var x = 0; x < list.length; x++) {
      if (list[x].userId == this.userId) {
        this.fShopList.push(list[x])
      }
    }
    console.log(this.fShopList)
  }
}
