import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomepageData } from '../../providers/homepage-data/homepage-data';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  page:Array<any>
  slide:Array<any>

  constructor(
    public navCtrl: NavController,
    private homepageData : HomepageData
  ) {
    this.page = homepageData.page
    this.slide = homepageData.slide
  }

  goItemTypes(){
    this.navCtrl.push('ItemtypesPage')
  }

  goProductTypes(x) {
    this.navCtrl.push('ProducttypesPage', { 'x': x._id ,'name':x.name})
  }

  goParams(x) {
    this.navCtrl.push('ParamsPage', { 'x': x.productTypesId })
  }


}
