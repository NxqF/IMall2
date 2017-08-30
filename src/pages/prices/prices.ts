import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NavigationService } from '../../providers/navigation-service/navigation-service';

@IonicPage()
@Component({
  selector: 'page-prices',
  templateUrl: 'prices.html',
})
export class PricesPage {

  prices: Array<any>
  price: Array<any>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navigationService: NavigationService
  ) {
    this.prices = this.navigationService.getPrices()
    this.price = this.PricesFilter()
  }

  PricesFilter() {
    var params = this.navParams.get('params'), num
    for (var x = 0; x < this.prices.length; x++) {
      num = 0
      for (var y = 0; y < params.length; y++) {
        if (params[y].options == this.prices[x].params[y]) {
          num += 1
        }
        if (num == params.length) {
          return this.prices.slice(x, x + 1)
        }
      }
    }
  }

  goShopCart() {
    this.price[0].num = 1
    this.navigationService.loadShopCart(this.price[0])
    this.navCtrl.pop()
    this.navCtrl.parent.select(1)
  }
  
}
