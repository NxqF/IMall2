import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NavigationService } from '../../providers/navigation-service/navigation-service';

@IonicPage()
@Component({
  selector: 'page-params',
  templateUrl: 'params.html',
})
export class ParamsPage {

  params: Array<any>

  prices: Array<any>
  price: Array<any>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navigationService: NavigationService
  ) {
    this.getParams()
    this.paramsFilter()
    this.getPrices()
    this.priceChange()
  }

  getParams() {
    this.params = this.navigationService.getParams()
  }

  getPrices() {
    this.prices = this.navigationService.getPrices()
  }

  paramsFilter() {
    var x = this.navParams.get('x');
    for (var y = 0; y < this.params.length; y++) {
      this.params[y].option = this.params[y].params[0]
      if (this.params[y].productTypesId != x) {
        this.params.splice(y, 1)
        y -= 1
      }
    }
  }

  goPrices() {
    for (var y = 0; y < this.params.length; y++) {
      this.params[y].options = this.params[y].name + ':' + this.params[y].option
    }
  }

  PricesFilter() {
    var num
    for (var x = 0; x < this.prices.length; x++) {
        num = 0
        for (var y = 0; y < this.params.length; y++) {
          if (this.params[y].options == this.prices[x].params[y]&&this.params[y].productTypesId == this.prices[x].productTypesId) {
            num += 1
          }
          if (num == this.params.length) {
            this.price = this.prices.slice(x, x + 1)
            return
          }
        }
    }
  }

  goShopCart() {
    // this.price[0].num = 1
    this.navigationService.loadShopCart(this.price[0])
    this.navCtrl.pop()
    this.navCtrl.parent.select(1)
  }

  priceChange() {
    this.goPrices()
    this.PricesFilter()
  }

}
