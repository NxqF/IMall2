import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NavigationService } from '../../providers/navigation-service/navigation-service';

@IonicPage()
@Component({
  selector: 'page-producttypes',
  templateUrl: 'producttypes.html',
})
export class ProducttypesPage {

  productTypes: Array<any>
  filter = [{ itemTypeId: '' }]
  title

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navigationService: NavigationService,
  ) {
    this.title = navParams.get('name');
    var x = navParams.get('x');
    this.productTypes = this.navigationService.getProductTypes()
    this.filterSet(x)
  }

  filterSet(x) {
    this.filter.splice(0, 1, { itemTypeId: x })
  }

  goParams(x) {
    this.navCtrl.push('ParamsPage', { 'x': x })
  }

}
