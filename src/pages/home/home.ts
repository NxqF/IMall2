import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { NavigationService } from '../../providers/navigation-service/navigation-service';
import { Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itemTypes: Array<any>

  constructor(
    public navCtrl: NavController,
    public navigationService: NavigationService,
    private event: Events,
  ) {
    this.loadItemTypes()
  }

  loadItemTypes() {
    this.navigationService.loadItemTypes()
    this.event.subscribe('itemTypes', (data) => {
      this.itemTypes = data
    })
  }

  goProductTypes(x) {
    this.navCtrl.push('ProducttypesPage', { 'x': x })
  }

}
