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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navigationService: NavigationService
  ) {
    this.getParams()
    this.paramsFilter()
  }

  getParams(){
    this.params = this.navigationService.getParams()
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
    this.navCtrl.push('PricesPage',{'params':this.params})
  }

}
