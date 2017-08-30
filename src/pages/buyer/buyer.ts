import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavigationService } from '../../providers/navigation-service/navigation-service';

@IonicPage()
@Component({
  selector: 'page-buyer',
  templateUrl: 'buyer.html',
})
export class BuyerPage {

  accounts
  filter = [{ role: '' }]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navigationService: NavigationService) {
    this.loadAccounts()
  }

  loadAccounts() {
    this.accounts = this.navigationService.getAccounts()
  }

  push(i) {
    this.navCtrl.push('ShoplistPage', { 'Account': i })
  }
}
