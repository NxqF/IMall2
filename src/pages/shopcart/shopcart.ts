import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { NavigationService } from '../../providers/navigation-service/navigation-service';
import { ItemtypesService } from '../../providers/itemtypes-service/itemtypes-service';
import { UserstorageProvider } from '../../providers/userstorage/userstorage';


@IonicPage()
@Component({
  selector: 'page-shopcart',
  templateUrl: 'shopcart.html',
})
export class ShopcartPage {

  shopCart: Array<any>
  shopCartNum: number = 0
  totalPrice: number = 0

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navigationService: NavigationService,
    public loadingCtrl: LoadingController,
    public itemtypesService: ItemtypesService,
    public userstorage: UserstorageProvider,
    private toastCtrl: ToastController
  ) {

  }

  ngDoCheck() {
    this.getShopCart()
    this.getShopCartNum()
    this.getTotalPrice()
  }

  getShopCart() {
    this.shopCart = this.navigationService.getShopCart()
  }

  getShopCartNum() {
    this.shopCartNum = this.navigationService.getShopCartNum()
  }

  getTotalPrice() {
    this.totalPrice = this.navigationService.getTotalPrice()
  }

  deleteProduct(x) {
    this.navigationService.deleteProduct(x)
  }

  valueDefine(event, i) {
    if (event.target.value > 99) {
      this.shopCart[i].num = 100
    }
  }

  addToList() {
    var user = this.userstorage.getUser()
    if (!user) {
      let toast = this.toastCtrl.create({
        message: '未登录',
        duration: 1000
      });
      toast.present();
    } else {
      let loader = this.loadingCtrl.create({
        content: "添加至购物车...",
        duration: 500
      });
      loader.present();
      console.log(user._id, this.shopCart, this.totalPrice)
      this.addToShopList(user._id, this.shopCart, this.totalPrice)
      this.clearProduct()
    }
  }

  clearProduct() {
    var temp = this;
    setTimeout(function () {
      temp.navigationService.clearProduct()
    }, 1000);
  }

  addToShopList(userId, shoplist, totalprice) {
    this.itemtypesService.addToShopList(userId, shoplist, totalprice).subscribe()
  }

}
