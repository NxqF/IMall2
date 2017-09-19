import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { NavigationService } from '../../providers/navigation-service/navigation-service';
import { Events } from 'ionic-angular';
import { ItemtypesService } from '../../providers/itemtypes-service/itemtypes-service';

@IonicPage()
@Component({
  selector: 'page-product-del',
  templateUrl: 'product-del.html',
})
export class ProductDelPage {

  itemTypes: Array<any>

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public navigationService: NavigationService,
    private event: Events,
    public itemtypesService: ItemtypesService,
    private toastCtrl: ToastController
  ) {
    this.loadItemTypes()
  }

  loadItemTypes() {
    this.navigationService.loadItemTypes()
    this.event.subscribe('itemTypes', (data) => {
      this.itemTypes = data
    })
  }

  removeAccount(id) {
        this.itemtypesService.deleteItemTypes(id).subscribe(() => {
          this.loadItemTypes()
          this.showToast()
        })
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: '删除成功',
      duration: 1000
    });
    toast.present();
  }

}
