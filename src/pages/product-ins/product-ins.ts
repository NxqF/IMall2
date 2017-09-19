import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ItemtypesService } from '../../providers/itemtypes-service/itemtypes-service';

@IonicPage()
@Component({
  selector: 'page-product-ins',
  templateUrl: 'product-ins.html',
})
export class ProductInsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public itemtypesService: ItemtypesService,
    private toastCtrl: ToastController
  ) {
  }

  proIns(value) {
    this.itemtypesService.addItemTypes(value.name).subscribe(() => {
      this.showToast()
    })
  }
  showToast() {
    let toast = this.toastCtrl.create({
      message: '增加成功',
      duration: 1000
    });
    toast.present();
  }

}
