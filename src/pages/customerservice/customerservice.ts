import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavigationService } from '../../providers/navigation-service/navigation-service';

@IonicPage()
@Component({
  selector: 'page-customerservice',
  templateUrl: 'customerservice.html',
})
export class CustomerservicePage {

  accounts
  filter = [{ role: '' }]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navigationService: NavigationService
  ) {
    this.loadAccounts()
    this.filterSet()
  }

  loadAccounts() {
    this.accounts = this.navigationService.getAccounts()
  }

  push(i) {
    this.navCtrl.push('ChatPage', { 'Account': i,'userRole': 'admin' })
  }

  filterSet() {
    this.filter.splice(0, 1, { role: '5951c3063afd231d8437173e'})
  }

}
